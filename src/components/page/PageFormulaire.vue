<template>
  <v-container class="page__container">
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="nomPage" label="Nom"></v-text-field>
      </v-col>
    </v-row>
    <v-radio-group v-model="codeTemplate">
      <v-row v-for="modelePage in modelespages" :key="modelePage.code">
        <v-col class="d-flex align-center" cols="1">
          <v-radio :value="modelePage.code"></v-radio>
        </v-col>
        <v-col class="d-flex align-center">{{ modelePage.code }}</v-col>
        <v-col cols="4" class="page__templateImage">
          <v-img :src="`/img/templates/${modelePage.code}.PNG`"></v-img>
        </v-col>
      </v-row>
    </v-radio-group>
    <v-row class="mb-6">
      <v-btn outlined large class="buttons--irisColor" @click="createPage()">{{ $t("message.form.valider") }}</v-btn>
    </v-row>
    
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex"
import navigationService from "@/services/navigationService"
export default {
  data() {
    return {
      codeTemplate: null,
      nomPage: null,
    }
  },
  created() {
    this.getAll("modelespages")
  },
  computed: {
    ...mapState("webServiceStore", ["modelespages", "currentSite"]),
  },
  methods: {
    ...mapActions("webServiceStore", ["create", "getAll", "resetAllValues"]),
    async createPage() {
      const body = {
        idGoogle: "test",
        libelle: this.nomPage,
        modelePage: { code: this.codeTemplate },
        site: {
          idGoogle: this.currentSite,
        },
      }
      await this.create({ entity: "pages", body })
      await this.resetAllValues()
      navigationService.goHome()
    },
  },
}
</script>
<style>
.page__container {
  width: 70vw;
}
.html{
  background-color: #fff !important;;
}
</style>
