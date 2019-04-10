<template>
  <div>
    <div class="bottom-shadow">
      <v-toolbar color="indigo" dark dense flat>
        <v-toolbar-title> {{ counter }} servicios disponibles </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-text-field
            v-model.lazy="keyword"
            dark
            flat
            solo
            background-color="transparent"
            append-icon="search"
            placeholder="Búsqueda de servicios"
            @input="show = true"
          ></v-text-field>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-container grid-list-xs>
      <v-layout v-if="show" row wrap>
        <v-flex v-for="item in servicios" :key="item.id + item.titulo" xs12 sm6 md4>
          <v-card class="ma-2 pa-2 elevation-24">
            <v-toolbar color="transparent" dense flat>
              <v-toolbar-title> {{ item.titulo }} </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn fab small flat color="error" @click.prevent="eliminar(item)"
                  ><v-icon>clear</v-icon></v-btn
                >
              </v-toolbar-items>
            </v-toolbar>
            <v-responsive min-height="220">
              <v-card-title primary-title>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-list three-line subheader>
                      <v-subheader>Acerca del servicio</v-subheader>

                      <v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>Descripción</v-list-tile-title>
                          <v-list-tile-sub-title>
                            {{ item.descripcion }}
                          </v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>Valor</v-list-tile-title>
                          <v-list-tile-sub-title>
                            {{ formatoValor(item.valor) }}
                          </v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-flex>
                </v-layout>
              </v-card-title>
            </v-responsive>
            <v-card-actions>
              <v-container grid-list-xs class="text-xs-center">
                <v-layout row wrap>
                  <v-flex>
                    <!-- <editar-servicio :id="item.id"></editar-servicio> -->
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout v-else>
        <v-flex class="text-xs-center" xs12>
          <v-icon style="font-size: 20em; cursor: pointer;" @click="show = true">build</v-icon>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IndexServicios',
  // components: {
  //   EditarServicio: () => import('./ServiciosEditar.vue')
  // },
  data() {
    return {
      keyword: '',
      show: false
    }
  },
  computed: {
    ...mapGetters({
      counter: 'servicio/serviciosCount',
      filteredServicios: 'servicio/filteredServicios'
    }),
    servicios() {
      return this.filteredServicios(this.keyword)
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'servicio/fetchAll',
      eliminarServicio: 'servicio/deleteServicio'
    }),
    formatoValor(valor) {
      let formato = valor.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      formato = `$${formato}`

      return formato
    },
    eliminar(servicio) {
      const message = `¿Estás seguro de dar de baja al servicio ${servicio.titulo}?`

      this.$swal
        .fire({
          title: message,
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, estoy seguro',
          cancelButtonText: 'Cancelar'
        })
        .then(result => {
          if (result.value) {
            this.eliminarServicio(servicio.id)
              .then(() => {
                this.$swal.fire({
                  title: 'Servicio dado de baja con éxito',
                  type: 'success'
                })
              })
              .catch(() => {
                this.$swal.fire({
                  title: 'Error al eliminar servicio',
                  type: 'error'
                })
              })
          }
        })
    }
  }
}
</script>
<style></style>
