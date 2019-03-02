<template>
  <div>
    <v-toolbar dense flat>
      <v-toolbar-title> {{ counter }} clientes registrados </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-text-field append-icon="search" label="Búsqueda de clientes"></v-text-field>
      </v-toolbar-items>
    </v-toolbar>
    <v-tabs v-model="activeBtn" centered color="transparent" light icons-and-text>
      <v-tabs-slider color="primary"></v-tabs-slider>
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
import { mapGetters } from 'vuex'

export default {
  components: {
    nuevoCliente: () => import('./ClienteNuevo.vue'),
    indexClientes: () => import('./ClientesIndex.vue')
  },
  data: () => ({
    activeBtn: 0
  }),
  computed: {
    ...mapGetters({
      counter: 'cliente/clientesCount'
    })
  }
}
</script>

<style></style>
