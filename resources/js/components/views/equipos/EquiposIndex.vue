<template>
  <div>
    <div class="bottom-shadow">
      <v-toolbar color="deep-orange darken-1" dark dense flat>
        <v-toolbar-title> {{ counter }} equipos registrados </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
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
      <v-layout row wrap>
        <v-flex v-for="item in equipos" :key="item.equipo + item.id" xs12 sm6>
          <v-card class="ma-2 pa-2 elevation-24">
            <v-toolbar dense color="transparent" flat>
              <v-toolbar-title>
                {{ item.equipo }}
                <small class="grey--text text--darken-2">
                  {{ item.modelo }}
                </small>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn flat small fab color="error" @click.prevent="eliminar(item)">
                  <v-icon>
                    clear
                  </v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-responsive min-height="220">
              <v-card-title>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-list three-line subheader>
                      <v-subheader>
                        Información del equipo
                      </v-subheader>

                      <v-container grid-list-xs>
                        <v-layout row wrap>
                          <v-flex xs6>
                            <v-list-tile>
                              <v-list-tile-content>
                                <v-list-tile-title>Propietario</v-list-tile-title>
                                <v-list-tile-sub-title>
                                  {{ item.cliente.nombre }} {{ item.cliente.apellido }}
                                </v-list-tile-sub-title>
                              </v-list-tile-content>
                            </v-list-tile>
                          </v-flex>
                          <v-flex xs6>
                            <v-list-tile>
                              <v-list-tile-content>
                                <v-list-tile-title>Estado</v-list-tile-title>
                                <v-list-tile-sub-title>
                                  {{ item.estado }}
                                </v-list-tile-sub-title>
                              </v-list-tile-content>
                            </v-list-tile>
                          </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                          <v-flex xs6>
                            <v-list-tile>
                              <v-list-tile-content>
                                <v-list-tile-title>Recibido</v-list-tile-title>
                                <v-list-tile-sub-title>
                                  {{ item.created_at | date }}
                                </v-list-tile-sub-title>
                              </v-list-tile-content>
                            </v-list-tile>
                          </v-flex>
                          <v-flex xs12>
                            <v-list-tile>
                              <v-list-tile-content>
                                <v-list-tile-title>Diagnóstico</v-list-tile-title>
                                <v-list-tile-sub-title>
                                  {{ item.diagnostico }}
                                </v-list-tile-sub-title>
                              </v-list-tile-content>
                            </v-list-tile>
                          </v-flex>
                          <v-flex xs12>
                            <v-list-tile>
                              <v-list-tile-content>
                                <v-list-tile-title>Descripción</v-list-tile-title>
                                <v-list-tile-sub-title>
                                  {{ item.descripcion }}
                                </v-list-tile-sub-title>
                              </v-list-tile-content>
                            </v-list-tile>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-list>
                  </v-flex>
                </v-layout>
              </v-card-title>
            </v-responsive>
            <v-card-actions>
              <v-container>
                <v-layout justify-center row wrap>
                  <v-flex xs8>
                    <BotonEstado
                      :id="item.id"
                      :key="item.id + item.estado"
                      :estado="item.estado"
                    ></BotonEstado>
                  </v-flex>
                  <v-flex v-if="item.estado === 'Despachado'" xs8>
                    <RetirarEquipo
                      :key="item.id + item.descripcion"
                      :cliente-id="item.cliente.id"
                      :equipo-id="item.id"
                    ></RetirarEquipo>
                  </v-flex>
                  <v-flex v-else-if="item.ticket_final !== null" xs8>
                    <b class="primary--text">
                      El equipo ya fue despachado y el ticket final fue generado
                    </b>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'IndexEquipos',
  components: {
    BotonEstado: () => import('./Estado.vue'),
    RetirarEquipo: () => import('./EquipoRetirar.vue')
  },
  data() {
    return {
      keyword: ''
    }
  },
  computed: {
    ...mapGetters({
      filteredEquipos: 'equipo/filteredEquipos',
      counter: 'equipo/equiposCount'
    }),
    equipos() {
      return this.filteredEquipos(this.keyword)
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'equipo/fetchAll',
      delete: 'equipo/deleteEquipo'
    }),

    eliminar(item) {
      const message = `¿Estás seguro de eliminar ${item.equipo} ${
        item.modelo
      } de la lista de equipos?`

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
            this.delete(item.id).then(() => {
              this.$swal.fire({
                title: 'Equipo eliminado con éxito',
                type: 'success'
              })
            })
          }
        })
    }
  }
}
</script>

<style></style>
