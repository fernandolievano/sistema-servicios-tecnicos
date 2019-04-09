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
              <v-layout row wrap>
                <v-flex xs12>
                  <v-alert
                    v-model="success"
                    type="success"
                    transition="scale-transition"
                    dismissible
                  >
                    Cliente {{ cliente.nombre }} {{ cliente.apellido }} registrado con éxito
                  </v-alert>
                  <v-alert v-model="invalid" type="error" transition="scale-transition" dismissible>
                    Por favor corrija los errores para continuar
                  </v-alert>
                </v-flex>
                <v-divider></v-divider>
                <v-flex v-if="success" xs12>
                  <p class="mb-1 mt-3">
                    <small>Continúe con el proceso de registro</small>
                  </p>
                  <nuevo-equipo-cliente
                    :cliente="cliente.nombre"
                    :id-cliente="cliente.id"
                  ></nuevo-equipo-cliente>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-responsive>
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.nombre"
                      label="Nombre"
                      required
                      :error-messages="erroresNombre"
                      @input="$v.formulario.nombre.$touch()"
                      @blur="$v.formulario.nombre.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.apellido"
                      label="Apellido"
                      required
                      :error-messages="erroresApellido"
                      @input="$v.formulario.apellido.$touch()"
                      @blur="$v.formulario.apellido.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.direccion"
                      label="Dirección"
                      required
                      :error-messages="erroresDireccion"
                      @input="$v.formulario.direccion.$touch()"
                      @blur="$v.formulario.direccion.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.telefono"
                      label="Teléfono"
                      required
                      :error-messages="erroresTelefono"
                      @input="$v.formulario.telefono.$touch()"
                      @blur="$v.formulario.telefono.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.email"
                      label="E-mail"
                      :error-messages="erroresEmail"
                      @input="$v.formulario.email.$touch()"
                      @blur="$v.formulario.email.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn type="submit" block large color="success">Registrar</v-btn>
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
/* eslint-disable no-unused-expressions */

import { mapActions } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import NuevoEquipoCliente from './ClienteEquipoNuevo.vue'

export default {
  components: {
    NuevoEquipoCliente
  },
  mixins: [validationMixin],
  data: () => ({
    valid: false,
    invalid: false,
    success: false,
    formulario: {
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
      email: ''
    },
    cliente: {}
  }),
  computed: {
    erroresNombre() {
      const errors = []
      if (!this.$v.formulario.nombre.$dirty) return errors
      !this.$v.formulario.nombre.minLength &&
        errors.push('El nombre debe contener más de 3 caracteres')
      !this.$v.formulario.nombre.required && errors.push('Este campo es requerido para el registro')
      return errors
    },
    erroresApellido() {
      const errors = []
      if (!this.$v.formulario.apellido.$dirty) return errors
      !this.$v.formulario.apellido.minLength &&
        errors.push('El apellido debe contener más de 3 caracteres')
      !this.$v.formulario.apellido.required &&
        errors.push('Este campo es requerido para el registro')
      return errors
    },
    erroresDireccion() {
      const errors = []
      if (!this.$v.formulario.direccion.$dirty) return errors
      !this.$v.formulario.direccion.required &&
        errors.push('Este campo es requerido para el registro')
      return errors
    },
    erroresTelefono() {
      const errors = []
      if (!this.$v.formulario.telefono.$dirty) return errors
      !this.$v.formulario.telefono.required &&
        errors.push('Este campo es requerido para el registro')
      return errors
    },
    erroresEmail() {
      const errors = []
      if (!this.$v.formulario.email.$dirty) return errors
      !this.$v.formulario.email.email && errors.push('Especifique una dirección de correo válida')
      return errors
    }
  },
  validations: {
    formulario: {
      nombre: {
        required,
        minLength: minLength(3)
      },
      apellido: {
        required,
        minLength: minLength(3)
      },
      direccion: {
        required
      },
      telefono: {
        required
      },
      email: {
        email
      }
    }
  },
  methods: {
    ...mapActions({
      create: 'cliente/createCliente'
    }),
    async store() {
      this.$v.$touch()
      if (this.$v.$invalid) this.invalid = true
      else {
        const params = Object.assign({}, this.formulario)
        const response = await this.create(params)
        this.cliente = response
        this.invalid = false
        this.success = true
        this.$refs.formcliente.reset()
        this.$v.$reset()
      }
    }
  }
}
</script>

<style></style>
