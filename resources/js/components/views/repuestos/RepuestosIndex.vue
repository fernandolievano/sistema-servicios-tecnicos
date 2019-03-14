<template>
  <div>
    <div class="bottom-shadow">
      <v-toolbar color="green darken-2" dark dense flat>
        <v-toolbar-title> {{ counter }} repuestos diferentes disponibles</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-text-field
            v-model.lazy="keyword"
            append-icon="search"
            flat
            dark
            background-color="transparent"
            solo
            placeholder="Búsqueda de repuestos"
          ></v-text-field>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <RepuestoCard v-for="item in repuestos" :key="item.id + item.repuesto" :item="item" />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IndexRepuestos',
  components: {
    RepuestoCard: () => import('./RepuestoCard.vue')
  },
  data() {
    return {
      keyword: ''
    }
  },
  computed: {
    ...mapGetters({
      counter: 'repuesto/repuestosCount',
      filteredRepuestos: 'repuesto/filteredRepuestos'
    }),
    repuestos() {
      return this.filteredRepuestos(this.keyword)
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'repuesto/fetchAll'
    })
  }
}
</script>

<style></style>
