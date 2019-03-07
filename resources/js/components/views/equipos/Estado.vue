<template>
  <div>
    <p v-if="!estado" class="title">
      El estado fue actualizado
    </p>
    <v-btn v-else-if="estado === 'En Reparación'" color="primary" @click="marcarComo(estado, id)">
      Marcar como Reparado
    </v-btn>
    <v-btn v-else-if="estado === 'Reparado'" color="success" @click="marcarComo(estado, id)">
      Marcar como Despachado
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'BotonEstado',
  props: {
    estado: {
      type: String,
      default: null
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions({
      cambiarEstado: 'equipo/estadoEquipo'
    }),
    // PENDIENTE MIGRAR EL CÓDIGO A VUEX
    marcarComo(estado, id) {
      const url = `/api/v1/equipos/estado/${id}`

      if (estado === 'En Reparación') {
        const nuevoEstado = {
          estado: 'Reparado'
        }
        const params = Object.assign({}, nuevoEstado)

        axios.put(url, params).then(response => {
          const msg = `${response.data.equipo} ${response.data.modelo} fue reparado`
          this.cambiarEstado(id, 'Reparado').then(() => {
            this.$swal.fire({
              title: msg,
              type: 'success'
            })
          })
        })
      } else if (estado === 'Reparado') {
        const nuevoEstado = {
          estado: 'Despachado'
        }
        const params = Object.assign({}, nuevoEstado)

        axios.put(url, params).then(response => {
          const msg = `${response.data.equipo} ${response.data.modelo} fue despachado`
          this.cambiarEstado(id, 'Despachado').then(() => {
            this.$swal.fire({
              title: msg,
              type: 'success'
            })
          })
        })
      }
    }
  }
}
</script>

<style lang="css" scoped></style>
