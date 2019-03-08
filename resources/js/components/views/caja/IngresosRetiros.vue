<template>
  <v-container grid-list-xs>
    <v-layout row wrap justify-center>
      <v-flex v-for="tr in transacciones" :key="tr.id" xs8>
        <v-sheet
          dark
          :class="[tr.ingreso ? 'light-green darken-1' : 'red lighten-1']"
          class="ma-2 pa-2 elevation-24"
        >
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <h4 class="display-1">{{ tr.ingreso ? 'Ingreso' : 'Retiro' }}</h4>
              </v-flex>
            </v-layout>
            <br />
            <v-layout row wrap>
              <v-flex xs12>
                <h6 class="title"><b>Monto:</b> {{ formatoDinero(tr.cantidad) }}</h6>
              </v-flex>
              <v-flex xs12>
                <h6 class="title"><b>Fecha:</b> {{ tr.created_at | date }}</h6>
              </v-flex>
              <br />
              <v-flex xs12>
                <h6 class="subheading font-italic">{{ tr.descripcion }}</h6>
              </v-flex>
            </v-layout>
          </v-container>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IngresosRetiros',
  computed: {
    ...mapState(['caja']),
    transacciones() {
      return this.caja.ingresosYRetiros
    }
  },
  methods: {
    formatoDinero(precio) {
      let formato = precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      formato = `${formato} ARS`
      return formato
    }
  }
}
</script>

<style lang="css" scoped></style>
