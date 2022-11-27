<template>
  <v-row class="d-flex justify-center site" align="center">
    <v-col class="site__title" cols="1">
      <h3>{{ $t("message.site") }}</h3>
    </v-col>
    <v-col class="site__dropdown" cols="4">
      <v-select @change="filterBySite" :items="sitesBysocietes" item-text="libelle" item-value="idGoogle"> </v-select>
    </v-col>
    <v-col cols="1">
      <v-btn @click="setDisplayForm('site')" class="site__add" outlined color="green">
        <v-icon>add</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="1">
      <v-btn :disabled="isDisable(currentSite)" @click="deleteSite()" class="site__delete" outlined color="red">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
import { mapActions, mapState } from "vuex"
export default {
  computed: {
    ...mapState("webServiceStore", ["sitesBysocietes", "currentSite"]),
  },
  methods: {
    ...mapActions("commonStore", ["setDisplayForm"]),
    ...mapActions("webServiceStore", ["getFiltered", "delete", "resetAllValues", "setCurrent"]),
    async filterBySite(evt) {
      await this.setCurrent({ entity: "pages", data: {} })
      await this.setCurrent({ entity: "sites", data: evt })
      await this.getFiltered({ entity: "pages", parentEntity: "sites", parentEntityId: this.currentSite })
    },
    async deleteSite() {
      await this.delete({ entity: "sites", idResource: this.site })
      this.resetAllValues()
    },
    isDisable: (obj) => Object.keys(obj).length === 0,
  },
}
</script>
<style>
.sites__dropdown {
  height: 25vh;
}
.site__add:hover {
  border-color: green !important;
  background-color: green !important;
  color: #fff !important;
}
.site__modify:hover {
  border-color: orange !important;
  background-color: orange !important;
  color: #fff !important;
}
.site__delete:hover {
  border-color: red !important;
  background-color: red !important;
  color: #fff !important;
}
</style>
