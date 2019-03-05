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
                  >
                    Nuevo repuesto añadido exitosamente
                  </v-alert>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-responsive>
              <v-container grid-list-xs>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.repuesto"
                      name="repuesto"
                      label="Repuesto"
                      :rules="generales"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="formulario.descripcion"
                      name="descripcion"
                      label="Descripción"
                      :rules="generales"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model.number="formulario.cantidad"
                      name="cantidad"
                      label="Stock Inicial"
                      :rules="generales"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model.number="formulario.precio_unitario_compra"
                      name="precio_unitario"
                      label="Precio unitario de compra"
                      :rules="generales"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model.number="formulario.precio_unitario_venta"
                      name="precio_unitario"
                      label="Precio unitario de venta"
                      :rules="generales"
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
import { mapActions } from 'vuex'

export default {
  name: 'NuevoRepuesto',
  data: () => ({
    valid: false,
    success: false,
    formulario: {
      repuesto: null,
      descripcion: null,
      cantidad: null,
      precio_unitario_compra: null,
      precio_unitario_venta: null
    },
    generales: [v => !!v || 'Este campo es requerido']
  }),
  methods: {
    ...mapActions({
      create: 'repuesto/createRepuesto'
    }),
    store() {
      const params = Object.assign({}, this.formulario)
      this.create(params).then(() => {
        this.success = true
      })
    },
    another() {
      this.$refs.formrepuesto.reset()
      this.success = false
    }
  }
}
</script>

<style></style>
