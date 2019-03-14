<template>
  <v-form ref="ingresoretiro" v-model="valid" lazy-validation @submit.prevent="nuevaOperacion">
    <v-container>
      <v-layout row wrap>
        <v-flex sm10 offset-sm1 offset-md2 md8 xs12>
          <v-card>
            <v-card-title primary-title>
              <v-layout row wrap>
                <v-flex>
                  <h1 class="display-3">Nueva operación</h1>
                </v-flex>
              </v-layout>
              <v-layout v-if="success" row wrap>
                <v-flex>
                  Operación realizada con éxito, la caja ha sido actualizada
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-responsive>
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-radio-group v-model="formulario.ingreso" name="ingreso" required row>
                      <v-radio label="Ingreso" :value="true"></v-radio>
                      <v-radio label="Retiro" :value="false"></v-radio>
                    </v-radio-group>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model.number="formulario.cantidad"
                      name="cantidad"
                      label="Cantidad"
                      required
                      :rules="generales"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea
                      v-model="formulario.descripcion"
                      name="descripcion"
                      label="Detalle"
                      required
                      :rules="generales"
                    ></v-textarea>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn color="success" type="submit">Nueva operación</v-btn>
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
  name: 'NuevoIngresoRetiro',
  data() {
    return {
      valid: false,
      success: false,
      formulario: {
        ingreso: null,
        cantidad: null,
        descripcion: null,
        caja_id: 1
      },
      generales: [v => !!v || 'Este campo es requerido']
    }
  },
  methods: {
    ...mapActions({
      create: 'caja/nuevaOperacion'
    }),
    async nuevaOperacion() {
      if (!this.formulario.ingreso) this.formulario.cantidad *= -1

      const params = Object.assign({}, this.formulario)

      await this.create(params)

      this.$refs.ingresoretiro.reset()

      this.$swal.fire({
        title: 'Operación realizada con éxito',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="css" scoped></style>
