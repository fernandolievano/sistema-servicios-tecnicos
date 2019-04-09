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
          Editar información de repuesto
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click="actualizar(id)">Guardar cambios</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-form ref="editrepuesto" v-model="valid" lazy-validation>
        <v-responsive>
          <v-alert v-model="success" transition="scale-transition" dismissible type="success">
            Datos actualizados exitosamente
          </v-alert>
          <v-alert v-model="invalid" type="error" transition="scale-transition" dismissible
            >Por favor corrija los errores para continuar</v-alert
          >
          <v-container grid-list-xs>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="formulario.repuesto"
                  name="repuesto"
                  label="Repuesto"
                  :error-messages="erroresRepuesto"
                  @input="$v.formulario.repuesto.$touch()"
                  @blur="$v.formulario.repuesto.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="formulario.descripcion"
                  name="descripcion"
                  label="Descripción del repuesto"
                  :error-messages="erroresDescripcion"
                  @input="$v.formulario.descripcion.$touch()"
                  @blur="$v.formulario.descripcion.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model.number="formulario.precio_unitario_compra"
                  name="valor"
                  label="Precio unitario de compra"
                  :error-messages="erroresPrecioCompra"
                  @input="$v.formulario.precio_unitario_compra.$touch()"
                  @blur="$v.formulario.precio_unitario_compra.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model.number="formulario.precio_unitario_venta"
                  name="valor"
                  label="Precio unitario de venta"
                  :error-messages="erroresPrecioVenta"
                  @input="$v.formulario.precio_unitario_venta.$touch()"
                  @blur="$v.formulario.precio_unitario_venta.$touch()"
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

import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, minLength, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'EditarRepuesto',
  mixins: [validationMixin],
  props: {
    id: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: () => ({
    dialog: false,
    valid: false,
    invalid: false,
    success: false,
    generales: [v => !!v || 'Este campo es requerido']
  }),
  computed: {
    formulario() {
      return this.$store.getters['repuesto/getRepuestoById'](this.id)
    },
    erroresRepuesto() {
      const errors = []
      if (!this.$v.formulario.repuesto.$dirty) return errors
      !this.$v.formulario.repuesto.minLength && errors.push('Debe contener más de 5 caracteres')
      !this.$v.formulario.repuesto.required &&
        errors.push('Este campo es requerido para continuar con el registro')
      return errors
    },
    erroresDescripcion() {
      const errors = []
      if (!this.$v.formulario.descripcion.$dirty) return errors
      !this.$v.formulario.descripcion.minLength && errors.push('Debe contener más de 5 caracteres')
      !this.$v.formulario.descripcion.required &&
        errors.push('Este campo es requerido para continuar con el registro')
      return errors
    },
    erroresPrecioCompra() {
      const errors = []
      if (!this.$v.formulario.precio_unitario_compra.$dirty) return errors
      !this.$v.formulario.precio_unitario_compra.required &&
        errors.push('Este campo es requerido para continuar con el registro')
      !this.$v.formulario.precio_unitario_compra.numeric &&
        errors.push('Este campo debe tener un valor númerico')
      return errors
    },
    erroresPrecioVenta() {
      const errors = []
      if (!this.$v.formulario.precio_unitario_venta.$dirty) return errors
      !this.$v.formulario.precio_unitario_venta.required &&
        errors.push('Este campo es requerido para continuar con el registro')
      !this.$v.formulario.precio_unitario_venta.numeric &&
        errors.push('Este campo debe tener un valor númerico')
      return errors
    }
  },
  validations: {
    formulario: {
      repuesto: {
        required,
        minLength: minLength(5)
      },
      descripcion: {
        required,
        minLength: minLength(5)
      },
      precio_unitario_compra: {
        required,
        numeric
      },
      precio_unitario_venta: {
        required,
        numeric
      }
    }
  },
  methods: {
    closeThis() {
      this.dialog = false
      this.$refs.editrepuesto.reset()
      this.$v.$reset()
    },
    async actualizar(id) {
      this.$v.$touch()
      if (this.$v.$invalid) this.invalid = true
      else {
        const url = `/api/v1/repuestos/update/${id}`
        const params = Object.assign({}, this.formulario)

        await axios.put(url, params)
        this.success = true
      }
    }
  }
}
</script>

<style></style>
