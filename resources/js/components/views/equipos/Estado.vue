<template>
  <div>
    <v-btn v-if="estado === 'En Reparación'" color="primary" @click="marcarComo(estado, id)">
      Marcar como Reparado
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
      cambiarEstado: 'equipo/estadoEquipo',
      fetch: 'equipo/fetchAll'
    }),
    // PENDIENTE OPTIMIZAR Y MIGRAR EL CÓDIGO A VUEX
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
            this.fetch()
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
