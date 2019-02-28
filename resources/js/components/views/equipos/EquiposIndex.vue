<template>
  <v-container align-center>
    <v-layout row wrap>
      <v-flex v-for="item in equipo.equipos" :key="item.id" xs12 sm6>
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

                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Propietario</v-list-tile-title>
                        <v-list-tile-sub-title>
                          {{ item.cliente.nombre }} {{ item.cliente.apellido }}
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Estado</v-list-tile-title>
                        <v-list-tile-sub-title>
                          {{ item.estado }}
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Diagnóstico</v-list-tile-title>
                        <v-list-tile-sub-title>
                          {{ item.diagnostico }}
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Descripción</v-list-tile-title>
                        <v-list-tile-sub-title>
                          {{ item.descripcion }}
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-card-title>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'IndexEquipos',
  computed: {
    ...mapState(['equipo'])
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
