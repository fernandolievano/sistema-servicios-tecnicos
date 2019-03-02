<template>
  <div>
    <v-toolbar dense flat>
      <v-toolbar-title> {{ counter }} servicios disponibles </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-text-field append-icon="search" label="Búsqueda de servicios"></v-text-field>
      </v-toolbar-items>
    </v-toolbar>
    <v-tabs
      v-model="active"
      color="transparent"
      centered
      icons-and-text
      light
      slider-color="yellow darken-2"
    >
      <v-tab>Lista de servicios <v-icon>build</v-icon> </v-tab>
      <v-tab>Nuevo Servicio <v-icon>add</v-icon> </v-tab>
    </v-tabs>
    <v-tabs-items v-model="active">
      <v-tab-item>
        <index-servicios></index-servicios>
      </v-tab-item>
      <v-tab-item>
        <nuevo-servicio></nuevo-servicio>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    IndexServicios: () => import('./ServiciosIndex.vue'),
    NuevoServicio: () => import('./ServicioNuevo.vue')
  },
  data: () => ({
    active: 0
  }),
  computed: {
    ...mapGetters({
      counter: 'servicio/serviciosCount'
    })
  }
}
</script>

<style></style>
