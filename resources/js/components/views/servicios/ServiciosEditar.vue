<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 md10>
        <v-card>
          <v-form
            ref="editservicio"
            v-model="valid"
            lazy-validation
            @submit.prevent="actualizar(formulario.id)"
          >
            <v-responsive>
              <v-container grid-list-xs>
                <v-layout row wrap justify-center align-center>
                  <v-flex xs12 md3 lg4 xl5>
                    <v-btn :to="{ name: 'servicios' }" fab flat color="primary" small>
                      <v-icon>
                        arrow_back
                      </v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 md9 lg8 xs7>
                    <h1 class="display-3 text-xs-center text-md-left">Editar Servicio</h1>
                  </v-flex>
                  <v-divider></v-divider>
                  <v-flex xs8>
                    <v-alert
                      v-model="success"
                      transition="scale-transition"
                      dismissible
                      type="success"
                    >
                      Datos actualizados exitosamente
                    </v-alert>
                    <v-alert
                      v-model="invalid"
                      type="error"
                      transition="scale-transition"
                      dismissible
                    >
                      Por favor corrija los errores para continuar</v-alert
                    >
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.titulo"
                      name="titulo"
                      label="Título del servicio"
                      :error-messages="erroresTitulo"
                      @input="$v.formulario.titulo.$touch()"
                      @blur="$v.formulario.titulo.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.descripcion"
                      name="descripcion"
                      label="Descripción del servicio"
                      :error-messages="erroresDescripcion"
                      @input="$v.formulario.descripcion.$touch()"
                      @blur="$v.formulario.descripcion.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model.number="formulario.valor"
                      name="valor"
                      label="Valor o Costo del servicio"
                      :error-messages="erroresValor"
                      @input="$v.formulario.valor.$touch()"
                      @blur="$v.formulario.valor.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 justify-end class="text-xs-right">
                    <v-btn type="submit" color="success">Actualizar información</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-responsive>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable no-unused-expressions */

import { validationMixin } from 'vuelidate'
import { required, minLength, numeric } from 'vuelidate/lib/validators'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'ServicioEditar',
  mixins: [validationMixin],
  data: () => ({
    valid: false,
    invalid: false,
    success: false
  }),
  computed: {
    ...mapState(['servicio']),
    formulario() {
      return this.servicio.servicio
    },
    erroresTitulo() {
      const errors = []
      if (!this.$v.formulario.titulo.$dirty) return errors
      !this.$v.formulario.titulo.minLength &&
        errors.push('El título debe contener más de 5 caracteres')
      !this.$v.formulario.titulo.required && errors.push('Especifique el título del nuevo servicio')
      return errors
    },
    erroresDescripcion() {
      const errors = []
      if (!this.$v.formulario.descripcion.$dirty) return errors
      !this.$v.formulario.descripcion.minLength &&
        errors.push('El descripcion debe contener más de 8 caracteres')
      !this.$v.formulario.descripcion.required &&
        errors.push('Especifique una descripción para identificar el nuevo servicio')
      return errors
    },
    erroresValor() {
      const errors = []
      if (!this.$v.formulario.valor.$dirty) return errors
      !this.$v.formulario.valor.required &&
        errors.push('Especifique un el valor que tendrá el nuevo servicio')
      !this.$v.formulario.valor.numeric && errors.push('Este campo debe tener un valor numérico')
      return errors
    }
  },
  validations: {
    formulario: {
      titulo: {
        required,
        minLength: minLength(5)
      },
      descripcion: {
        required,
        minLength: minLength(8)
      },
      valor: {
        required,
        numeric
      }
    }
  },
  methods: {
    async actualizar(id) {
      if (this.$v.$invalid) this.invalid = true
      else {
        const url = `/api/v1/servicios/update/${id}`
        const params = Object.assign({}, this.formulario)

        await axios.put(url, params)
        this.$router.push('/servicios', () => {
          this.$swal.fire({
            title: 'Información actualizada con éxito',
            type: 'success'
          })
        })
      }
    }
  }
}
</script>

<style></style>
