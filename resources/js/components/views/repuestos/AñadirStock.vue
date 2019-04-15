<template>
  <v-container grid-list-xs>
    <v-layout row wrap justify-center>
      <v-flex xs12 md10>
        <v-card>
          <v-form
            ref="stockrepuesto"
            v-model="valid"
            lazy-validation
            @submit.prevent="actualizar(formulario.id)"
          >
            <v-layout row wrap justify-center align-center>
              <v-flex xs12 md3 lg4 xl5>
                <v-btn :to="{ name: 'repuestos' }" fab flat primary small>
                  <v-icon>
                    arrow_back
                  </v-icon>
                </v-btn>
              </v-flex>
              <v-flex v-if="formulario" xs12 md9 lg8 xs7>
                <h1 class="display-3 text-xs-center text-md-left">
                  Actualizar Stock
                </h1>
              </v-flex>
              <v-divider></v-divider>
            </v-layout>
            <v-layout v-if="formulario.length" row wrap justify-center>
              <v-flex xs12 md10 class="text-xs-center">
                <h2 class="error--text">No es posible mostrar la información</h2>
                <v-btn :to="{ name: 'repuestos' }"> Volver a la página anterior</v-btn>
              </v-flex></v-layout
            >
            <v-layout v-else-if="formulario" row wrap>
              <v-flex xs12> </v-flex>
              <v-flex xs12>
                <v-alert v-model="invalid" type="error" transition="scale-transition" dismissible
                  >Por favor corrija los errores para continuar</v-alert
                >
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model.number="formulario.precio_unitario_compra"
                  name="precio_unitario_compra"
                  label="Si el precio de compra es el mismo de la ultima vez no es necesario cambiar este campo"
                  placeholder="Precio de compra por unidad"
                  :error-messages="erroresPrecioCompra"
                  @input="$v.formulario.precio_unitario_compra.$touch()"
                  @blur="$v.formulario.precio_unitario_compra.$touch()"
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
              <v-flex xs12 class="text-xs-center">
                <v-btn type="submit" color="success">Actualizar stock</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable no-unused-expressions */

import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, numeric } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'

export default {
  name: 'IncrementarStock',
  mixins: [validationMixin],
  data() {
    return {
      valid: false,
      invalid: false,
      nuevaCantidad: 0
    }
  },
  validations: {
    nuevaCantidad: {
      required,
      numeric
    },
    formulario: {
      precio_unitario_compra: {
        required,
        numeric
      }
    }
  },
  computed: {
    ...mapState(['repuesto']),
    formulario() {
      return this.repuesto.repuesto
    },
    erroresPrecioCompra() {
      const errors = []
      if (!this.$v.formulario.precio_unitario_compra.$dirty) return errors
      !this.$v.formulario.precio_unitario_compra.required &&
        errors.push('Debes completar este campo')
      !this.$v.formulario.precio_unitario_compra.numeric &&
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
    async actualizar(id) {
      this.$v.$touch()

      if (this.$v.$invalid) this.invalid = true
      else {
        const url = `/api/v1/repuestos/update/stock/${id}`
        const params = Object.assign({}, this.formulario)
        params.nueva_cantidad = this.nuevaCantidad

        await axios.put(url, params)

        this.$router.push('/repuestos', () => {
          this.$swal.fire({
            title: 'Stock actualizado con éxito',
            type: 'success'
          })
        })
      }
    }
  }
}
</script>

<style></style>
