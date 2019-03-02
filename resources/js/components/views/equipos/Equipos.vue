<template>
  <div>
    <v-toolbar dense flat>
      <v-toolbar-title> {{ counter }} equipos registrados </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-text-field append-icon="search" label="Búsqueda de equipos"></v-text-field>
      </v-toolbar-items>
    </v-toolbar>
    <v-tabs
      v-model="active"
      color="transparent"
      centered
      icons-and-text
      light
      slider-color="orange"
    >
      <v-tab>
        Lista de equipos
        <v-icon>devices_other</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="active">
      <v-tab-item>
        <index-equipos></index-equipos>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Equipos',
  components: {
    IndexEquipos: () => import('./EquiposIndex.vue')
  },
  data: () => ({
    active: 0
  }),
  computed: {
    ...mapGetters({
      counter: 'equipo/equiposCount'
    })
  }
}
</script>

<style></style>
