<template>
  <v-form ref="formrepuesto" v-model="valid" lazy-validation @submit.prevent="store">
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex sm10 offset-sm1 offset-md2 md8>
          <v-card>
            <v-card-title>
              <v-layout row wrap>
                <v-flex xs12>
                  <h2 class="display-3">Nuevo Repuesto</h2>
                </v-flex>
                <v-flex xs12>
                  <v-alert
                    v-model="success"
                    type="success"
                    dismissable
                    transition="scale-transition"
                    >Nuevo repuesto añadido exitosamente</v-alert
                  >
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
                      v-model="formulario.repuesto"
                      :error-messages="erroresRepuesto"
                      name="repuesto"
                      label="Repuesto"
                      @input="$v.formulario.repuesto.$touch()"
                      @blur="$v.formulario.repuesto.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.descripcion"
                      :error-messages="erroresDescripcion"
                      name="descripcion"
                      label="Descripción"
                      @input="$v.formulario.descripcion.$touch()"
                      @blur="$v.formulario.descripcion.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model.number="formulario.cantidad"
                      :error-messages="erroresCantidad"
                      name="cantidad"
                      label="Stock Inicial"
                      @input="$v.formulario.cantidad.$touch()"
                      @blur="$v.formulario.cantidad.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model.number="formulario.precio_unitario_compra"
                      :error-messages="erroresPrecioCompra"
                      name="precio_unitario"
                      label="Precio unitario de compra"
                      @input="$v.formulario.precio_unitario_compra.$touch()"
                      @blur="$v.formulario.precio_unitario_compra.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model.number="formulario.precio_unitario_venta"
                      :error-messages="erroresPrecioVenta"
                      name="precio_unitario"
                      label="Precio unitario de venta"
                      @input="$v.formulario.precio_unitario_venta.$touch()"
                      @blur="$v.formulario.precio_unitario_venta.$touch()"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn type="submit" large block color="success">Añadir</v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn large block flat color="primary" @click.prevent="another"
                      >Añadir otro</v-btn
                    >
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
  name: 'NuevoRepuesto',
  mixins: [validationMixin],
  data: () => ({
    valid: false,
    invalid: false,
    success: false,
    formulario: {
      repuesto: null,
      descripcion: null,
      cantidad: null,
      precio_unitario_compra: null,
      precio_unitario_venta: null
    }
  }),
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
      cantidad: {
        required,
        numeric
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
  computed: {
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
    erroresCantidad() {
      const errors = []
      if (!this.$v.formulario.cantidad.$dirty) return errors
      !this.$v.formulario.cantidad.required &&
        errors.push('Este campo es requerido para continuar con el registro')
      !this.$v.formulario.cantidad.numeric && errors.push('Este campo debe tener un valor númerico')
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
  methods: {
    ...mapActions({
      create: 'repuesto/createRepuesto'
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
      this.$refs.formrepuesto.reset()
      this.$v.$reset()
      this.success = false
    }
  }
}
</script>

<style></style>
