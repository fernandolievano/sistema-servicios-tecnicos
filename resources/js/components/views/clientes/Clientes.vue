<template>
  <div class="border-cliente">
    <v-tabs v-model="activeBtn" color="blue darken-1" dark centered flat icons-and-text>
      <v-tabs-slider color="blue lighten-4"></v-tabs-slider>
      <v-tab>
        Lista de clientes
        <v-icon>people</v-icon>
      </v-tab>
      <v-tab>
        Nuevo
        <v-icon>add</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="activeBtn">
      <v-tab-item>
        <index-clientes></index-clientes>
      </v-tab-item>
      <v-tab-item>
        <nuevo-cliente></nuevo-cliente>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  components: {
    nuevoCliente: () => import('./ClienteNuevo.vue'),
    indexClientes: () => import('./ClientesIndex.vue')
  },
  data: () => ({
    activeBtn: 0
  })
}
</script>

<style media="screen" scoped>
.border-cliente {
  border-top: 2px solid #1e88e5;
}
</style>
