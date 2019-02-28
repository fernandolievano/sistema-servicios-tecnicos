<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-btn slot="activator" color="warning" small flat>
      Editar información
      <v-icon>
        edit
      </v-icon>
    </v-btn>
    <v-card>
      <v-toolbar dark color="warning" dense>
        <v-btn icon dark @click="closeThis">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Editar información personal </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click.prevent="actualizar(id)">Guardar cambios</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-form ref="editcliente" v-model="valid" lazy-validation>
        <v-responsive>
          <v-alert v-model="success" transition="scale-transition" dismissible type="success">
            Los datos del cliente fueron actualizados con éxito
          </v-alert>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 sm8>
                <v-text-field
                  v-model="formulario.nombre"
                  label="Nombre"
                  required
                  :rules="generales"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm8>
                <v-text-field
                  v-model="formulario.apellido"
                  label="Apellido"
                  required
                  :rules="generales"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm8>
                <v-text-field
                  v-model="formulario.direccion"
                  label="Dirección"
                  required
                  :rules="generales"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm8>
                <v-text-field
                  v-model="formulario.telefono"
                  label="Teléfono"
                  required
                  :rules="generales"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm8>
                <v-text-field v-model="formulario.email" label="E-mail"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-responsive>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditarCliente',
  props: { id: { type: Number, default: 0 } },
  data: () => ({
    dialog: false,
    valid: false,
    success: false,
    generales: [v => !!v || 'Este campo es requerido']
  }),
  computed: {
    formulario() {
      return this.$store.getters['cliente/getClienteById'](this.id)
    }
  },
  methods: {
    actualizar(id) {
      const url = `/api/v1/clientes/update/${id}`
      const params = Object.assign({}, this.formulario)

      axios.put(url, params).then(() => {
        this.success = true
      })
    },
    closeThis() {
      this.dialog = false
    }
  }
}
</script>

<style></style>
