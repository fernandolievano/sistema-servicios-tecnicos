<template>
  <v-form ref="formservicio" v-model="valid" lazy-validation @submit.prevent="store">
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex sm10 offset-sm1 offset-md2 md8>
          <v-card>
            <v-card-title primary-title>
              <v-layout row wrap>
                <v-flex xs12>
                  <h2 class="display-3">Nuevo Servicio</h2>
                </v-flex>
                <v-flex xs12>
                  <v-alert
                    v-model="success"
                    type="success"
                    dismissable
                    transition="scale-transition"
                  >
                    Nuevo servicio añadido exitosamente
                  </v-alert>
                  <v-alert v-model="invalid" type="error" transition="scale-transition" dismissible
                    >Por favor corrija los errores para continuar</v-alert
                  >
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-responsive>
              <v-container grid-list-xs>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.titulo"
                      label="Título del servicio"
                      required
                      :error-messages="erroresTitulo"
                      @input="$v.formulario.titulo.$touch()"
                      @blur="$v.formulario.titulo.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.descripcion"
                      label="Descripción del servicio"
                      required
                      :error-messages="erroresDescripcion"
                      @input="$v.formulario.descripcion.$touch()"
                      @blur="$v.formulario.descripcion.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model.number="formulario.valor"
                      label="Valor que tendrá el servicio"
                      required
                      :error-messages="erroresValor"
                      @input="$v.formulario.valor.$touch()"
                      @blur="$v.formulario.valor.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn type="submit" large block color="success">Añadir</v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn large block flat color="primary" @click.prevent="another">
                      Añadir otro
                    </v-btn>
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
import { required, minLength, numeric } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data: () => ({
    valid: false,
    invalid: false,
    success: false,
    formulario: {
      titulo: '',
      descripcion: '',
      valor: ''
    }
  }),
  computed: {
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
    ...mapActions({
      create: 'servicio/createServicio'
    }),
    async store() {
      this.$v.$touch()
      if (this.$v.$invalid) this.invalid = true
      else {
        const params = Object.assign({}, this.formulario)
        await this.create(params)
        this.invalid = false
        this.success = true
      }
    },
    another() {
      this.$refs.formservicio.reset()
      this.$v.$reset()
      this.success = false
    }
  }
}
</script>

<style></style>
