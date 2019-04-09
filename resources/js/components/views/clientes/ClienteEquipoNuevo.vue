<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay lazy transition="dialog-bottom-transition">
    <v-btn slot="activator" block small color="success"
      >Añadir nuevo equipo
      <v-icon right>add</v-icon>
    </v-btn>
    <v-card>
      <v-toolbar dark color="success" dense>
        <v-btn icon dark @click="closeThis">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Nuevo equipo</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click.prevent="store">Registrar</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-form ref="nuevoequipo" v-model="valid" lazy-validation>
        <v-responsive>
          <v-card-title primary-title>
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex xs12>
                  <h2 class="display-3">Nuevo equipo de {{ cliente }}</h2>
                </v-flex>
                <v-flex xs12>
                  <v-alert v-model="invalid" type="error" transition="scale-transition" dismissible>
                    Por favor corrija los errores para continuar
                  </v-alert>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-container grid-list-xs>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="formulario.equipo"
                  name="equipo"
                  label="Equipo"
                  required
                  :error-messages="erroresEquipo"
                  @input="$v.formulario.equipo.$touch()"
                  @blur="$v.formulario.equipo.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="formulario.modelo"
                  name="modelo"
                  label="Modelo del equipo"
                  required
                  :error-messages="erroresModelo"
                  @input="$v.formulario.modelo.$touch()"
                  @blur="$v.formulario.modelo.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  v-model="formulario.descripcion"
                  name="descripcion"
                  label="Breve descripción del equipo"
                  required
                  :error-messages="erroresDescripcion"
                  @input="$v.formulario.descripcion.$touch()"
                  @blur="$v.formulario.descripcion.$touch()"
                ></v-textarea>
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  v-model="formulario.diagnostico"
                  name="diagnostico"
                  label="Diagnóstico del equipo"
                  required
                  :error-messages="erroresDiagnostico"
                  @input="$v.formulario.diagnostico.$touch()"
                  @blur="$v.formulario.diagnostico.$touch()"
                ></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
        </v-responsive>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
/* eslint-disable no-unused-expressions */

import axios from 'axios'
import { mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'NuevoEquipoCliente',
  mixins: [validationMixin],
  props: {
    cliente: {
      type: String,
      default: 'Cliente'
    },
    idCliente: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    dialog: false,
    valid: false,
    invalid: false,
    formulario: {
      equipo: '',
      modelo: '',
      descripcion: '',
      diagnostico: '',
      estado: 'En Reparación',
      cliente_id: ''
    },
    ticketId: null
  }),
  computed: {
    erroresEquipo() {
      const errors = []
      if (!this.$v.formulario.equipo.$dirty) return errors
      !this.$v.formulario.equipo.required &&
        errors.push('Este campo es requerido para continuar con el registro')
      !this.$v.formulario.equipo.minLength &&
        errors.push('Este campo debe contener más de 5 caracteres')
      return errors
    },
    erroresModelo() {
      const errors = []
      if (!this.$v.formulario.modelo.$dirty) return errors
      !this.$v.formulario.modelo.required &&
        errors.push('Este campo es requerido para continuar con el registro')
      !this.$v.formulario.modelo.minLength &&
        errors.push('Este campo debe contener más de 2 caracteres')
      return errors
    },
    erroresDescripcion() {
      const errors = []
      if (!this.$v.formulario.descripcion.$dirty) return errors
      !this.$v.formulario.descripcion.required &&
        errors.push('Este campo es requerido para continuar con el registro')
      !this.$v.formulario.descripcion.minLength &&
        errors.push('Este campo debe contener más de 5 caracteres')
      return errors
    },
    erroresDiagnostico() {
      const errors = []
      if (!this.$v.formulario.diagnostico.$dirty) return errors
      !this.$v.formulario.diagnostico.required &&
        errors.push('Este campo es requerido para continuar con el registro')
      !this.$v.formulario.diagnostico.minLength &&
        errors.push('Este campo debe contener más de 10 caracteres')
      return errors
    }
  },
  validations: {
    formulario: {
      equipo: {
        required,
        minLength: minLength(5)
      },
      modelo: {
        required,
        minLength: minLength(2)
      },
      descripcion: {
        required,
        minLength: minLength(5)
      },
      diagnostico: {
        required,
        minLength: minLength(10)
      }
    }
  },
  methods: {
    ...mapActions({
      clear: 'ticket/clearInicial'
    }),
    closeThis() {
      this.dialog = false
      this.$refs.nuevoequipo.reset()
      this.$v.$reset()
      this.success = false
      this.clear()
    },
    async store() {
      this.$v.$touch()
      if (this.$v.$invalid) this.invalid = true
      else {
        const url = '/api/v1/equipos/store'
        this.formulario.cliente_id = this.idCliente
        const params = Object.assign({}, this.formulario)

        const response = await axios.post(url, params)
        this.ticketId = response.data
        this.$refs.nuevoequipo.reset()
        this.$v.$reset()

        await this.successMessage()
        this.$router.push({ name: 'ticket_inicial', params: { id: this.ticketId } })
      }
    },
    successMessage() {
      this.$swal.fire({
        title: 'Equipo registrado con éxito',
        text: 'Ahora continúe con el registro del equipo',
        type: 'success'
      })
    }
  }
}
</script>

<style></style>
