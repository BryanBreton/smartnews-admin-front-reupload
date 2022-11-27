import adminService from "@/services/http/adminService"
import i18n from "@/plugins/i18n"

/**
 * Appel functionToCall avec déclenchement de l'affichagge du composant de loading
 * @param {Function} functionToCall fonction à appeler
 * @param {String} i18nKey clé i18n pour le message du composant de chargement
 * @param {Function} dispatch fonction de dispatch Vuex des événements setLoading/setIsLoading du commonStore
 */
const callFunctionWithLoader = async (functionToCall, i18nKey, dispatch) => {
  dispatch("commonStore/setLoading", { isLoading: true, messageLoading: i18n.tc(i18nKey) }, { root: true })
  try {
    return await functionToCall()
  } finally {
    dispatch("commonStore/setIsLoading", false, { root: true })
  }
}
export default {
  async setCurrent({ commit }, { entity, data }) {
    commit("setCurrent", { entity, data })
  },
  async getAll({ commit, dispatch }, entity) {
    let resources
    await callFunctionWithLoader(
      async () => {
        resources = await adminService.get(entity)
        commit("setAll", { entity: entity, data: resources })
      },
      "message.loading.get",
      dispatch
    )
  },
  async getOne({ commit }, { entity, idResource, setCurrent = false }) {
    const object = await adminService.getOne(entity, idResource)
    if (setCurrent) commit("setCurrent", { entity, data: object })
  },
  async getFiltered({ commit, dispatch }, { entity, parentEntity, parentEntityId }) {
    let resources
    await callFunctionWithLoader(
      async () => {
        resources = await adminService.get(`${parentEntity}/${parentEntityId}/${entity}`)
        commit("setAll", { entity: `${entity}By${parentEntity}`, data: resources })
      },
      "message.loading.get",
      dispatch
    )
  },
  async update({ commit }, { entity, idResource, body, setCurrent = false }) {
    const object = await adminService.put(entity, idResource, body)
    if (setCurrent) commit("setCurrent", { entity, data: object })
  },
  /**
   * Fonction d'appel en post au webservice
   * @param {String} entity entite en base
   * @param {object} body object a envoyer dans le corps de la requete
   * @param {boolean} setCurrent garde t-on l'objet dans le store local ?
   */
  async create({ commit, dispatch }, { entity, body, setCurrent = false }) {
    let resource
    await callFunctionWithLoader(
      async () => {
        resource = await adminService.post(entity, body)
        if (setCurrent) commit("setCurrent", { entity, data: resource })
      },
      "message.loading.get",
      dispatch
    )
  },
  async delete({ dispatch }, { entity, idResource }) {
    await callFunctionWithLoader(
      async () => {
        await adminService.delete(entity, idResource)
      },
      "message.loading.get",
      dispatch
    )
  },
  resetAllValues({commit}, ) {
    commit ("resetAllValues")
  }
}
