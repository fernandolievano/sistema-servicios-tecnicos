<template>
  <v-form ref="formcliente" v-model="valid" lazy-validation @submit.prevent="store">
    <v-container>
      <v-layout row wrap>
        <v-flex sm10 offset-sm1 offset-md2 md8 xs12>
          <v-card>
            <v-card-title primary-title>
              <v-layout row wrap>
                <v-flex>
                  <h2 class="display-3">Registrar nuevo cliente</h2>
                </v-flex>
              </v-layout>
              <v-layout v-if="success" row wrap>
                <v-divider></v-divider>
                <v-flex xs12>
                  <h3 class="success--text display-5">
                    Cliente {{ cliente.nombre }} {{ cliente.apellido }} registrado con éxito
                  </h3>
                  <small>Continúe con el proceso de registro</small>
                </v-flex>
                <v-flex xs12>
                  <nuevo-equipo-cliente
                    :cliente="cliente.nombre"
                    :id-cliente="cliente.id"
                  ></nuevo-equipo-cliente>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-responsive v-if="!success">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.nombre"
                      label="Nombre"
                      required
                      :rules="generales"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.apellido"
                      label="Apellido"
                      required
                      :rules="generales"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.direccion"
                      label="Dirección"
                      required
                      :rules="generales"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.telefono"
                      label="Teléfono"
                      required
                      :rules="generales"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="formulario.email" label="E-mail"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn type="submit" block large color="success">Registar</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-responsive>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {
    NuevoEquipoCliente: () => import('./ClienteEquipoNuevo.vue')
  },
  data: () => ({
    valid: false,
    success: false,
    formulario: {
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
      email: ''
    },
    cliente: {},
    generales: [v => !!v || 'Este campo es requerido']
  }),
  methods: {
    ...mapActions({
      create: 'cliente/createCliente'
    }),
    store() {
      const params = Object.assign({}, this.formulario)

      this.create(params).then(response => {
        this.success = true
        this.$refs.formcliente.reset()
        this.cliente = response
      })
    }
  }
}
</script>

<style></style>
