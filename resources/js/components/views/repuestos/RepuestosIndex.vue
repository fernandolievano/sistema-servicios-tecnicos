<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex v-for="item in repuesto.repuestos" :key="item.id" xs12 sm6 md4>
        <v-card class="ma-2 pa-2 elevation-24">
          <v-toolbar color="transparent" dense flat>
            <v-toolbar-title> {{ item.repuesto }} </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn fab small flat color="error" @click.prevent="eliminar(item)"
                ><v-icon>clear</v-icon></v-btn
              >
            </v-toolbar-items>
          </v-toolbar>
          <v-responsive min-height="150">
            <v-card-title primary-title>
              <v-flex xs12>
                <v-list three-line subheader>
                  <v-subheader v-text="item.descripcion"></v-subheader>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Stock</v-list-tile-title>
                      <v-list-tile-sub-title v-text="item.cantidad"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Precio unitario</v-list-tile-title>
                      <v-list-tile-sub-title>
                        {{ precioUnitario(item.precio_unitario) }}
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
            </v-card-title>
          </v-responsive>
          <v-card-actions>
            <v-container grid-list-xs class="text-xs-center">
              <v-layout row wrap>
                <v-flex>
                  <editar-repuesto :id="item.id"></editar-repuesto>
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
import { mapActions, mapState } from 'vuex'

export default {
  name: 'IndexRepuestos',
  components: {
    EditarRepuesto: () => import('./RepuestoEditar.vue')
  },
  computed: {
    ...mapState(['repuesto'])
  },
  mounted() {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'repuesto/fetchAll',
      eliminarRepuesto: 'repuesto/deleteRepuesto'
    }),
    precioUnitario(precio) {
      let formato = precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
      formato = `$${formato}`

      return formato
    },
    eliminar(repuesto) {
      const message = `¿Estás seguro de quitar el repuesto ${repuesto.repuesto} de la lista?`

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
            this.eliminarRepuesto(repuesto.id)
              .then(() => {
                this.$swal.fire({
                  title: 'Repuesto eliminado con éxito',
                  type: 'success'
                })
              })
              .catch(() => {
                this.$swal.fire({
                  title: 'Error al eliminar repuesto',
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
