<template>
  <div class="accueil__background">
    <v-container>
      <zone-societe />
      <zone-site />
      <zone-page />
      <!-- <zone-formulaire/> -->
      <site-form />
    </v-container>
  </div>
</template>
<script>
import ZoneSociete from "@/components/administration/ZoneSociete"
import ZoneSite from "@/components/administration/ZoneSite"
import ZonePage from "@/components/administration/ZonePage"
// import ZoneFormulaire from "@/components/administration/ZoneFormulaire"
import SiteForm from "../components/form/SiteForm.vue"
export default {
  components: {
    ZoneSociete,
    ZoneSite,
    ZonePage,
    // ZoneFormulaire,
    SiteForm,
  },
}
</script>
