<template>
  <v-container>
    <v-layout row wrap align-center justify-center>
      <v-flex xs6>
        <table
          :id="ticket.id + 'ticket_final'"
          class="table table-light table-sm table-borderless text-center"
        >
          <thead>
            <tr>
              <th colspan="3">
                <h3>Ciber X-Gamer</h3>
              </th>
            </tr>
            <tr>
              <th colspan="3">
                <img src="/images/xg-icon.png" alt="icon" class="icon-ticket mx-auto" />
              </th>
            </tr>
            <tr>
              <th class="text-muted" colspan="3">Av. Mac Lean 333, Las Breñas, Chaco</th>
            </tr>
            <tr>
              <th class="text-muted" colspan="3">
                {{ new Date() | date }}
              </th>
            </tr>
            <tr class="border-bottom text-muted">
              <th colspan="3">Ticket: TF-{{ ticket.id }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="details.repuestos.length > 0">
              <td class="text-muted">
                <b>Repuestos</b>
              </td>
              <td class="text-muted">
                <b>Cantidad</b>
              </td>
              <td class="text-muted">
                <b>Precio unitario</b>
              </td>
            </tr>
            <tr v-for="repuesto in details.repuestos" :key="repuesto.repuesto">
              <td>{{ repuesto.repuesto }}</td>
              <td>{{ repuesto.cantidad }}</td>
              <td>{{ repuesto.precio_unitario | price }}</td>
            </tr>
            <tr v-if="details.servicios.length > 0">
              <td class="text-muted">
                <b>Servicios</b>
              </td>
              <td></td>
              <td class="text-muted">
                <b>Costo</b>
              </td>
            </tr>
            <tr v-for="servicio in details.servicios" :key="servicio.titulo">
              <td>{{ servicio.servicio }}</td>
              <td></td>
              <td>{{ servicio.precio | price }}</td>
            </tr>
            <tr class="border-top">
              <td colspan="3" class="text-center h5">
                <b>Total {{ ticket.total | price }}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex :disabled="success">
        <v-btn block to="/">
          <v-icon>arrow_back</v-icon>
          Volver a la página principal</v-btn
        >
      </v-flex>
      <v-flex :disabled="!success">
        <v-btn color="primary" block @click="imprimir(ticket.id + 'ticket_final')"
          >Generar Ticket</v-btn
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { mapActions } from 'vuex'

export default {
  name: 'TicketFinal',
  props: {
    ticket: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      success: false
    }
  },
  computed: {
    ...mapActions({
      cambiarEstado: 'equipo/estadoEquipo'
    }),
    details() {
      return this.$store.state.ticket.details
    }
  },
  methods: {
    async imprimir(id) {
      const filename = `ticket_final${this.ticket.id}`

      await html2canvas(document.getElementById(id)).then(canvas => {
        // eslint-disable-next-line new-cap
        const pdf = new jsPDF('p', 'mm', 'a4')
        pdf.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 5, 5)
        pdf.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 5, 148)
        pdf.save(filename)
      })

      this.despachar(this.ticket.equipo_id)
    },
    async despachar(id) {
      const url = `/api/v1/equipos/estado/${id}`
      const nuevoEstado = {
        estado: 'Despachado'
      }
      const params = Object.assign({}, nuevoEstado)

      const response = await axios.put(url, params)

      const msg = `${response.data.equipo} ${response.data.modelo} fue despachado`

      this.$swal.fire({
        title: msg,
        type: 'success'
      })

      this.success = true
    }
  }
}
</script>

<style lang="css" scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');

.table th {
  text-align: center
}
.table td {
  text-align: center
}
.icon-ticket {
  width: 10%;
  top:0;
}
</style>
