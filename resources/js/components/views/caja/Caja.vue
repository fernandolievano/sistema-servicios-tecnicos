<template>
  <div>
    <v-tabs v-model="active" color="blue-grey darken-3" dark centered flat icons-and-text>
      <v-tabs-slider color="light-green darken-1"></v-tabs-slider>
      <v-tab>
        Ingresos y Retiros
        <v-icon>attach_money</v-icon>
      </v-tab>
      <v-tab disabled>
        Nuevo ingreso/retiro
        <v-icon>add</v-icon>
      </v-tab>
    </v-tabs>
    <div class="bottom-shadow">
      <v-toolbar color="blue-grey darken-3" dense dark flat>
        <v-toolbar-title class="display-1">
          Caja:
          <span v-if="totalCaja > 0" class="light-green--text text--lighten-2">{{
            formatoDinero(totalCaja)
          }}</span>
          <span v-else-if="totalCaja < 0" class="red--text text--lighten-1">{{
            formatoDinero(totalCaja)
          }}</span>
          <span v-else-if="totalCaja === 0" class="gray--text">{{ formatoDinero(totalCaja) }}</span>
        </v-toolbar-title>
      </v-toolbar>
    </div>
    <v-tabs-items v-model="active">
      <v-tab-item>
        <IngresosRetiros />
      </v-tab-item>
      <v-tab-item>
        <NuevoIngresoRetiro />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Caja',
  components: {
    IngresosRetiros: () => import('./IngresosRetiros.vue'),
    NuevoIngresoRetiro: () => import('./IngresarRetirar.vue')
  },
  data() {
    return {
      active: 0
    }
  },
  computed: {
    ...mapState(['caja']),
    totalCaja() {
      return this.caja.caja.total
    }
  },
  created() {
    this.fetchCaja()
    this.fetchIngresosYRetiros()
  },
  methods: {
    ...mapActions({
      fetchCaja: 'caja/fetchCaja',
      fetchIngresosYRetiros: 'caja/fetchIngresosYRetiros'
    }),
    formatoDinero(precio) {
      let formato = precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      formato = `${formato} ARS`
      return formato
    }
  }
}
</script>

<style lang="css" scoped></style>
