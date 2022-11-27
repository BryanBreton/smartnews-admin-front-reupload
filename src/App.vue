<template>
  <v-app v-if="isAuth">
    <div>
      <v-tabs class="menu" v-model="active" fixed-tabs slider-color="#17a2b8">
        <v-tab @click="resetAllValues()" :to="'/administration'" class="menu-el tabs__administration">Administration</v-tab>
        <v-tab @Click="resetAllValues()" :to="'/appairage'" class="menu-el tabs__appairage">Appairage</v-tab>
      </v-tabs>
    </div>

    <display-alert-button></display-alert-button>
    <reload-button></reload-button>

    <v-main class="background">
      <router-view />
      <v-overlay :value="isLoading" :z-index="250"> <v-progress-circular indeterminate size="80" color="primary" :width="6"></v-progress-circular> </v-overlay>
    </v-main>

    <v-footer app class="footer-style background"> <alert></alert> </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex"
import TopBar from "@/components/top-bar/TopBar"
import DisplayAlertButton from "@/components/DisplayAlertButton"
import ReloadButton from "@/components/ReloadButton"
import Alert from "@/components/Alert"
export default {
  name: "App",
  components: {
    TopBar,
    DisplayAlertButton,
    ReloadButton,
    Alert,
  },
  data() {
    return {
      active: null
    }
  },
  computed: {
    ...mapState("commonStore", ["isAuth", "isLoading"]),
  },
  methods: {
    ...mapActions("commonStore", ["launchAuthentif"]),
    ...mapActions("webServiceStore", ["resetAllValues"])
  },
  async mounted() {
    await this.launchAuthentif()
  },
}
</script>

<style lang="scss" scoped>
.background {
  background-color: white !important;
}
.footer-style {
  z-index: 300;
  padding: 0px;
}
.menu {

  .menu-el {
    color: black;
    font-weight: bold;
  }
}
</style>
