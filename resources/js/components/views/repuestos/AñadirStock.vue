<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-btn slot="activator" color="success">
      Incrementar Stock
      <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-toolbar color="success" dense dark>
        <v-btn icon dark @click="dialog = false">
          <v-icon>
            close
          </v-icon>
        </v-btn>
        <v-toolbar-title> Actualizar stock de {{ repuesto.repuesto }} </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click="actualizar">
            Listo
          </v-btn>
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
                <v-text-field
                  v-model.number="repuesto.precio_unitario_compra"
                  name="precio_unitario_compra"
                  label="Si el precio de compra es el mismo de la ultima vez no es necesario tocar este campo"
                  placeholder="Precio de compra por unidad"
                  :rules="generales"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model.number="nuevaCantidad"
                  name="cantidad"
                  label="Cantidad a añadir"
                  :rules="generales"
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
import axios from 'axios'

export default {
  name: 'IncrementarStock',
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
      generales: [v => !!v || 'Este campo es requerido'],
      nuevaCantidad: 0
    }
  },
  computed: {
    repuesto() {
      return this.$store.getters['repuesto/getRepuestoById'](this.id)
    }
  },
  methods: {
    async actualizar() {
      const url = `/api/v1/repuestos/update/stock/${this.id}`
      const params = Object.assign({}, this.repuesto)
      params.nueva_cantidad = this.nuevaCantidad

      await axios.put(url, params)

      this.$swal.fire({
        title: 'Stock actualizado con éxito',
        type: 'success'
      })
    }
  }
}
</script>

<style></style>
