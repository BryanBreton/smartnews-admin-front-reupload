<template>
  <v-row class="d-flex justify-center page" align="center">
    <v-col class="page__title" cols="1"><h3>{{$t("message.page")}}</h3></v-col>
    <v-col class="page__dropdown" cols="4">
      <v-select @change="changePage" :items="pagesBysites" item-text="libelle" item-value="idGoogle">
      </v-select>
    </v-col>
    <v-col cols="1">
      <v-btn :disabled="isDisable(currentSite)" @click="goToPage()" class="page__add" outlined color="green">
        <v-icon>add</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="1">
      <v-btn :disabled="isDisable(currentPage)" @click="deletePage()" class="page__delete" outlined color="red">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
import navigationService from "@/services/navigationService"
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions('commonStore', ['setDisplayForm']),
    ...mapActions('webServiceStore', ['delete', 'resetAllValues', 'setCurrent']),
    goToPage() {
      navigationService.goToPage()
    },
    async deletePage() {
      await this.delete({entity: "pages", idResource: this.currentPage})
      await this.resetAllValues()
    },
    isDisable: (obj) => Object.keys(obj).length === 0,
    changePage(evt) {
      this.setCurrent({entity: "pages", data: evt})
    }
  },
  computed: {
    ...mapState("webServiceStore", ["pagesBysites", "currentSite", "currentPage"])
  }
}
</script>
<style>
.pages__dropdown {
  height: 25vh;
}
.page__add:hover {
  border-color: green !important;
  background-color: green !important;
  color: #fff !important;
}
.page__modify:hover {
  border-color: orange !important;
  background-color: orange !important;
  color: #fff !important;
}
.page__delete:hover {
  border-color: red !important;
  background-color: red !important;
  color: #fff !important;
}
</style>
