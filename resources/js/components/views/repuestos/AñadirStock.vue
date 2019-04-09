<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-btn slot="activator" color="success">
      Actualizar Stock
      <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-toolbar color="success" dense dark>
        <v-btn icon dark @click="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Actualizar stock de {{ repuesto.repuesto }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click="actualizar">Listo</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-form ref="incstock" v-model="valid" lazy-validation>
        <v-responsive>
          <v-container grid-list-xs>
            <v-layout row wrap>
              <v-flex xs12>
                <h1>Stock {{ repuesto.repuesto }}: {{ repuesto.cantidad + nuevaCantidad }}</h1>
              </v-flex>
              <v-flex xs12>
                <v-alert v-model="invalid" type="error" transition="scale-transition" dismissible
                  >Por favor corrija los errores para continuar</v-alert
                >
                <v-alert v-model="success" type="success" transition="scale-transition" dismissible>
                  Los cambios se efectuaron con éxito
                </v-alert>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model.number="repuesto.precio_unitario_compra"
                  name="precio_unitario_compra"
                  label="Si el precio de compra es el mismo de la ultima vez no es necesario cambiar este campo"
                  placeholder="Precio de compra por unidad"
                  :error-messages="erroresPrecioCompra"
                  @input="$v.repuesto.precio_unitario_compra.$touch()"
                  @blur="$v.repuesto.precio_unitario_compra.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model.number="nuevaCantidad"
                  name="cantidad"
                  label="Cantidad a añadir"
                  :error-messages="erroresCantidad"
                  @input="$v.nuevaCantidad.$touch()"
                  @blur="$v.nuevaCantidad.$touch()"
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
import { required, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'IncrementarStock',
  mixins: [validationMixin],
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      dialog: false,
      valid: false,
      invalid: false,
      success: false,
      nuevaCantidad: 0
    }
  },
  validations: {
    nuevaCantidad: {
      required,
      numeric
    },
    repuesto: {
      precio_unitario_compra: {
        required,
        numeric
      }
    }
  },
  computed: {
    repuesto() {
      return this.$store.getters['repuesto/getRepuestoById'](this.id)
    },
    erroresPrecioCompra() {
      const errors = []
      if (!this.$v.repuesto.precio_unitario_compra.$dirty) return errors
      !this.$v.repuesto.precio_unitario_compra.required && errors.push('Debes completar este campo')
      !this.$v.repuesto.precio_unitario_compra.numeric &&
        errors.push('Este campo debe contener un valor numérico')
      return errors
    },
    erroresCantidad() {
      const errors = []
      if (!this.$v.nuevaCantidad.$dirty) return errors
      !this.$v.nuevaCantidad.required && errors.push('Debes completar este campo')
      !this.$v.nuevaCantidad.numeric && errors.push('Este campo debe contener un valor numérico')
      return errors
    }
  },
  methods: {
    async actualizar() {
      this.$v.$touch()

      if (this.$v.$invalid) this.invalid = true
      else {
        const url = `/api/v1/repuestos/update/stock/${this.id}`
        const params = Object.assign({}, this.repuesto)
        params.nueva_cantidad = this.nuevaCantidad

        await axios.put(url, params)
        this.invalid = false
        this.success = true
      }
    }
  }
}
</script>

<style></style>
