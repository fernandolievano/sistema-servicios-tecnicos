<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex md10 xs12>
        <v-card>
          <v-form
            ref="editrepuesto"
            v-model="valid"
            lazy-validation
            @submit.prevent="actualizar(formulario.id)"
          >
            <v-responsive>
              <v-container grid-list-xs>
                <v-layout row wrap justify-center align-center>
                  <v-flex xs12 md3 lg4 xl5>
                    <v-btn :to="{ name: 'repuestos' }" fab flat primary small>
                      <v-icon>
                        arrow_back
                      </v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 md9 lg8 xs7>
                    <h1 class="display-3 text-xs-center text-md-left">Editar Repuesto</h1>
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
                  <v-flex>
                    <v-alert
                      v-model="invalid"
                      type="error"
                      transition="scale-transition"
                      dismissible
                      >Por favor corrija los errores para continuar</v-alert
                    >
                  </v-flex>
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
                  <v-flex xs12 class="text-xs-center">
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

import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, minLength, numeric } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'

export default {
  name: 'EditarRepuesto',
  mixins: [validationMixin],
  data: () => ({
    valid: false,
    invalid: false,
    success: false
  }),
  computed: {
    ...mapState(['repuesto']),
    formulario() {
      return this.repuesto.repuesto
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
    async actualizar(id) {
      this.$v.$touch()
      if (this.$v.$invalid) this.invalid = true
      else {
        const url = `/api/v1/repuestos/update/${id}`
        const params = Object.assign({}, this.formulario)

        await axios.put(url, params)
        this.$router.push('/repuestos', () => {
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
