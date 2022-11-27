<template>
  <v-row class="site__formulaire" justify="center">
    <v-dialog v-model="siteDisplayForm" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{$t("message.creation.site")}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-select v-model="societe" :items="societes" item-text="libelle" item-value="idGoogle" label="Societe"> </v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="site" label="Nom du site*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="mail" label="Adresse Mail*" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>{{$t("message.champs.obligatoire")}}</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" class="site__fermer" text @click="resetForm()"> {{$t("message.form.fermer")}} </v-btn>
          <v-btn color="blue darken-1" text @click="createSite()"> {{$t("message.form.valider")}} </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions, mapState } from "vuex"

export default {
  data() {
    return {
      site: null,
      societe: null,
      mail: null
    }
  },
  computed: {
    ...mapState("commonStore", ["siteDisplayForm"]),
    ...mapState("webServiceStore", ["societes"]),
  },
  methods: {
    ...mapActions("commonStore", ["setDisplayForm"]),
    ...mapActions("webServiceStore", ["create", "getAll", "resetAllValues"]),
    /**
     * remise a zero des variables locales
     */
    resetForm() {
      this.setDisplayForm('site')
      this.resetAllValues()
      this.site = null
      this.societe = null
      this.mail = null
    },
    /**
     * Fonction qui va appeler le web service pour créer un site
     */
    async createSite() {
      await this.create({entity: 'sites', body: {idGoogle:"test" ,libelle: this.site, societe: {idGoogle: this.societe}, mail: this.mail}})
      this.resetForm()
    }
  },
}
</script>
