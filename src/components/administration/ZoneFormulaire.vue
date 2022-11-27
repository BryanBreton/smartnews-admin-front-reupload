<template>
  <v-row class="formulaire" align="center">
    <v-col class="formulaire__title" cols="1"><h3>{{$t("message.formulaire")}}</h3></v-col>
    <v-col class="formulaire__dropdown" cols="3">
      <v-select>
      </v-select>
    </v-col>
    <v-col cols="1">
      <v-btn class="formulaire__add" outlined color="green">
        <v-icon>add</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="1">
      <v-btn class="formulaire__modify" outlined color="orange">
        <v-icon>edit</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="1">
      <v-btn class="formulaire__delete" outlined color="red">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<style>
.formulaires__dropdown {
  height: 25vh;
}
.formulaire__add:hover {
  border-color: green !important;
  background-color: green !important;
  color: #fff !important;
}
.formulaire__modify:hover {
  border-color: orange !important;
  background-color: orange !important;
  color: #fff !important;
}
.formulaire__delete:hover {
  border-color: red !important;
  background-color: red !important;
  color: #fff !important;
}
</style>
