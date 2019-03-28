<template>
  <v-container class="text-xs-center">
    <v-layout row wrap>
      <v-flex xs12>
        <v-img src="/images/xg-icon.png" aspect-ratio="1" class="logo">
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-flex>
      <v-flex xs12>
        <h1 class="display-4">
          Servicios Técnicos
        </h1>
        <h2 class="display-3">
          Ciber X-Games
        </h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.logo {
  width: 25%;
  margin: auto;
}
</style>
