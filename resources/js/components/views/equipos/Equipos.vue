<template>
  <div>
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
export default {
  name: 'Equipos',
  components: {
    IndexEquipos: () => import('./EquiposIndex.vue')
  },
  data: () => ({
    active: 0
  })
}
</script>

<style></style>
