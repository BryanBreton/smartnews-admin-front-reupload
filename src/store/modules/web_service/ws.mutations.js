import { transformResource } from "@/utils/functions"

export default {
  setAll(state, { entity, data }) {
    state[entity] = data
  },
  setCurrent(state, { entity, data }) {
    entity = transformResource(entity)
    state[`current${entity}`] = data
  },
  resetAllValues(state) {
    state.currentSite = {}
    state.currentPage = {}
    state.currentSociete = {}
    state.sitesBysocietes = []
    state.pagesBysites = []
  },
}
