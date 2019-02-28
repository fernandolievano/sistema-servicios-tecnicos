<template>
  <v-container align-center>
    <v-layout row wrap>
      <!-- <v-flex v-if="clientesCount < 1" xs12>
        <v-alert type="warning" :value="true">
          No hay clientes para mostrar
        </v-alert>
      </v-flex> -->
      <v-flex v-for="(cliente, index) in cliente.clientes" :key="index" xs12 sm6>
        <v-card class="ma-2 pa-2 elevation-24">
          <v-toolbar color="transparent" dense flat>
            <v-toolbar-title> {{ cliente.nombre }} {{ cliente.apellido }} </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn color="error" flat fab small @click.prevent="eliminar(cliente)">
                <v-icon>clear</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-responsive min-height="220">
            <v-card-title primary-title>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-list three-line subheader>
                    <v-subheader>Información de contacto</v-subheader>

                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Teléfono</v-list-tile-title>
                        <v-list-tile-sub-title v-text="cliente.telefono"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Dirección</v-list-tile-title>
                        <v-list-tile-sub-title v-text="cliente.direccion"></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-card-title>
          </v-responsive>
          <v-card-actions>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex xs12>
                  <editar-cliente :id="cliente.id"></editar-cliente>
                </v-flex>
                <v-flex xs12>
                  <nuevo-equipo-cliente
                    :id-cliente="cliente.id"
                    :cliente="cliente.nombre"
                  ></nuevo-equipo-cliente>
                </v-flex>
                <v-flex xs12>
                  <equipos-cliente
                    :cliente="cliente.nombre"
                    :id-cliente="cliente.id"
                  ></equipos-cliente>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    EditarCliente: () => import('./ClienteEditar.vue'),
    EquiposCliente: () => import('./ClienteEquipos.vue'),
    NuevoEquipoCliente: () => import('./ClienteEquipoNuevo.vue')
  },
  computed: {
    ...mapState(['cliente']),
    ...mapGetters({
      clientesCount: 'cliente/clientesCount'
    })
  },
  mounted() {
    this.index()
  },
  methods: {
    ...mapActions({
      index: 'cliente/fetchAll',
      delete: 'cliente/deleteCliente'
    }),
    eliminar(cliente) {
      this.$swal
        .fire({
          title: `¿Estás seguro de eliminar a ${cliente.nombre} ${
            cliente.apellido
          } de la lista de clientes?`,
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, estoy seguro',
          cancelButtonText: 'Cancelar'
        })
        .then(result => {
          if (result.value) {
            this.delete(cliente.id).then(() => {
              this.$swal.fire({
                title: 'Cliente eliminado con éxito',
                type: 'success'
              })
            })
          }
        })
    }
  }
}
</script>
