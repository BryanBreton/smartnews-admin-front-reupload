<template>
  <v-container class="appairage__container">
    <v-row class="mt-12 appairage__numeroPage">
      <v-text-field v-model="numeroPage" placeholder="Numero Page"></v-text-field>
    </v-row>
    <v-row class="appairage__codeAppairage">
      <v-text-field v-model="codeAppairage" placeholder="Code Appairage"></v-text-field>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center"><v-btn :disabled="isDisable()" @click="appairage()" outlined class="buttons--irisColor" large>{{$t("message.form.valider")}}</v-btn></v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from "vuex"
export default {
  data() {
    return {
      numeroPage: null,
      codeAppairage: null,
    }
  },
  methods: {
    ...mapActions("webServiceStore", ["create"]),
    appairage() {
      this.create({ entity: "appairage", body: { numeroPage: this.numeroPage, codeAppairage: this.codeAppairage } })
    },
    isDisable() {
      return (!this.numeroPage || !this.codeAppairage)
    }
  },
}
</script>
<style>
.appairage__container {
  width: 30vw;
}
</style>
