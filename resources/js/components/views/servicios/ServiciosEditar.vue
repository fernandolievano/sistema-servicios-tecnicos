<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-btn slot="activator" small flat color="warning">
      Editar información
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-toolbar color="warning" dense dark>
        <v-btn icon dark @click="closeThis">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>
          Editar información de servicio
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click.prevent="actualizar(id)">Guardar cambios</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-form ref="editservicio" v-model="valid" lazy-validation>
        <v-responsive>
          <v-alert v-model="success" transition="scale-transition" dismissible type="success">
            Datos actualizados exitosamente
          </v-alert>
          <v-container grid-list-xs>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="servicio.titulo"
                  name="titulo"
                  label="Título del servicio"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="servicio.descripcion"
                  name="descripcion"
                  label="Descripción del servicio"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model.number="servicio.valor"
                  name="valor"
                  label="Valor o Costo del servicio"
                ></v-text-field>
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

import { validationMixin } from 'vuelidate'
import { required, minLength, numeric } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  name: 'EditarServicio',
  mixins: [validationMixin],
  props: { id: { type: Number, required: true, default: 0 } },
  data: () => ({
    dialog: false,
    valid: false,
    invalid: false,
    success: false
  }),
  computed: {
    servicio() {
      return this.$store.getters['servicio/getServicioById'](this.id)
    },
    erroresTitulo() {
      const errors = []
      if (!this.$v.servicio.titulo.$dirty) return errors
      !this.$v.servicio.titulo.minLength &&
        errors.push('El título debe contener más de 5 caracteres')
      !this.$v.servicio.titulo.required && errors.push('Especifique el título del nuevo servicio')
      return errors
    },
    erroresDescripcion() {
      const errors = []
      if (!this.$v.servicio.descripcion.$dirty) return errors
      !this.$v.servicio.descripcion.minLength &&
        errors.push('El descripcion debe contener más de 8 caracteres')
      !this.$v.servicio.descripcion.required &&
        errors.push('Especifique una descripción para identificar el nuevo servicio')
      return errors
    },
    erroresValor() {
      const errors = []
      if (!this.$v.servicio.valor.$dirty) return errors
      !this.$v.servicio.valor.required &&
        errors.push('Especifique un el valor que tendrá el nuevo servicio')
      !this.$v.servicio.valor.numeric && errors.push('Este campo debe tener un valor numérico')
      return errors
    }
  },
  validations: {
    servicio: {
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
    closeThis() {
      this.dialog = false
      this.invalid = false
      this.success = true
      this.$v.$reset()
    },
    async actualizar(id) {
      if (this.$v.$invalid) this.invalid = true
      else {
        const url = `/api/v1/servicios/update/${id}`
        const params = Object.assign({}, this.servicio)

        await axios.put(url, params)
        this.invalid = false
        this.success = true
      }
    }
  }
}
</script>

<style></style>
