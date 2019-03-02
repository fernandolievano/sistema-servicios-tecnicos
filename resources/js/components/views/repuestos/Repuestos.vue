<template>
  <div>
    <v-toolbar dense flat>
      <v-toolbar-title> {{ counter }} repuestos diferentes disponibles</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-text-field append-icon="search" label="Búsqueda de repuestos"></v-text-field>
      </v-toolbar-items>
    </v-toolbar>
    <v-tabs
      v-model="active"
      color="transparent"
      centered
      icons-and-text
      light
      slider-color="green darken-2"
    >
      <v-tab>Lista de Repuestos <v-icon>memory</v-icon></v-tab>
      <v-tab>Nuevo <v-icon>add</v-icon></v-tab>
    </v-tabs>
    <v-tabs-items v-model="active">
      <v-tab-item>
        <index-repuestos></index-repuestos>
      </v-tab-item>
      <v-tab-item>
        <nuevo-repuesto></nuevo-repuesto>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Repuestos',
  components: {
    IndexRepuestos: () => import('./RepuestosIndex.vue'),
    NuevoRepuesto: () => import('./RepuestoNuevo.vue')
  },
  data: () => ({
    active: 0
  }),
  computed: {
    ...mapGetters({
      counter: 'repuesto/repuestosCount'
    })
  }
}
</script>

<style></style>
