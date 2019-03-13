<template>
  <div>
    <div class="bottom-shadow">
      <v-toolbar color="deep-orange darken-1" dark dense flat>
        <v-toolbar-title>
          {{ counter }} equipos registrados
          <span v-if="section !== 'Index'">
            | {{ estadoCounter(section) }} equipos en estado {{ section }}</span
          >
          <!-- REPARAR ESTO -->
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="section === 'Index'">
          <v-text-field
            v-model.lazy="keyword"
            dark
            flat
            solo
            background-color="transparent"
            append-icon="search"
            placeholder="Búsqueda de equipos"
          ></v-text-field>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-container align-center>
      <v-layout row wrap class="my-4">
        <v-flex xs12>
          <h1 v-if="section === 'Index'" class="display-3 text-xs-center">Todos los equipos</h1>
          <h1 v-else-if="section === 'En Reparación'" class="display-3 text-xs-center">
            Equipos en Reparación
          </h1>
          <h1 v-else-if="section === 'Reparado'" class="display-3 text-xs-center">
            Equipos Reparados
          </h1>
          <h1 v-else-if="section === 'Despachado'" class="display-3 text-xs-center">
            Equipos Despachados
          </h1>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <v-layout row wrap>
        <EquipoCard v-for="item in equipos" :key="item.equipo + item.id + section" :item="item" />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable react/no-this-in-sfc */
import { mapGetters } from 'vuex'

export default {
  name: 'IndexEquipos',
  components: {
    EquipoCard: () => import('./EquipoCard.vue')
  },
  props: {
    section: {
      type: String,
      default: 'Index'
    }
  },
  data() {
    return {
      keyword: ''
    }
  },
  computed: {
    ...mapGetters({
      filteredEquipos: 'equipo/filteredEquipos',
      equiposByEstado: 'equipo/equiposByEstado',
      counter: 'equipo/equiposCount',
      estadoCounter: 'equipo/countEquiposByEstado'
    }),
    equipos() {
      if (this.section === 'Index') {
        return this.filteredEquipos(this.keyword)
      }

      return this.equiposByEstado(this.section)
    }
  }
}
</script>

<style></style>
