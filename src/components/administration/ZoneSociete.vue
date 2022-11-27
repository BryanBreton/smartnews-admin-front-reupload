<template>
  <v-row class="mt-4 societes__buttons">
    <v-col class="d-flex justify-center" v-for="societe in societes" :key="societe.idGoogle">
      <v-btn @click="filterBySociete(societe)" outlined x-large :class="returnClass(societe)">{{societe.libelle}}</v-btn>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState("webServiceStore", ["societes", "currentSociete"])
  },
  methods: {
    ...mapActions("webServiceStore", ["getAll", "getFiltered", "setCurrent", "resetAllValues"]),
    async filterBySociete(societe) {
      this.resetAllValues()
      this.setCurrent({entity: 'societes', data: societe})
      await this.getFiltered({entity: "sites", parentEntity: "societes", parentEntityId: societe.idGoogle})
    },
    returnClass(societe) {
      return societe === this.currentSociete ? "buttons--selected" : "buttons--irisColor"
    }
  },
  created() {
    this.getAll('societes')
  }
}
</script>
<style>
.societes__buttons{
  height: 25vh;
}
</style>
