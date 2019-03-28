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
            @input="show = true"
          ></v-text-field>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-container grid-list-xs>
      <v-layout v-if="show" row wrap>
        <RepuestoCard v-for="item in repuestos" :key="item.id + item.repuesto" :item="item" />
      </v-layout>
      <v-layout v-else>
        <v-flex class="text-xs-center" xs12>
          <v-icon style="font-size: 20em; cursor: pointer;" @click="show = true">memory</v-icon>
        </v-flex>
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
      keyword: '',
      show: false
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
