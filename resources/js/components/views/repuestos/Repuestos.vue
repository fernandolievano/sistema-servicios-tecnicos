<template>
  <div>
    <v-tabs
      v-model="active"
      color="green darken-2"
      centered
      icons-and-text
      dark
      slider-color="green lighten-2"
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
import IndexRepuestos from './RepuestosIndex.vue'
import NuevoRepuesto from './RepuestoNuevo.vue'

export default {
  name: 'Repuestos',
  components: {
    IndexRepuestos,
    NuevoRepuesto
  },
  data: () => ({
    active: 0
  })
}
</script>

<style></style>
