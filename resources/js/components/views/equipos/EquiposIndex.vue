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
            @input="show = true"
          ></v-text-field>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-container align-center>
      <v-layout v-if="show" row wrap>
        <EquipoCard v-for="item in equipos" :key="item.equipo + item.id + section" :item="item" />
      </v-layout>
      <v-layout v-else>
        <v-flex class="text-xs-center" xs12>
          <v-icon style="font-size: 20em; cursor: pointer;" @click="show = true"
            >devices_other</v-icon
          >
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable react/no-this-in-sfc */
import { mapGetters } from 'vuex'
import EquipoCard from './EquipoCard.vue'

export default {
  name: 'IndexEquipos',
  components: {
    EquipoCard
  },
  props: {
    section: {
      type: String,
      default: 'Index'
    }
  },
  data() {
    return {
      keyword: '',
      show: false
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
