<template>
  <v-container>
    <v-layout row wrap align-center justify-center>
      <v-flex xs6>
        <table
          :id="'ticketInicial' + ticket.id"
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
            <tr class="border-bottom text-muted">
              <th colspan="3">Ticket: T-{{ ticket.id }}</th>
            </tr>
          </thead>
          <tbody class="text-left body-table">
            <tr>
              <td class="center-td">
                <h4>Cliente</h4>
              </td>
            </tr>
            <tr>
              <td>
                <b> {{ ticket.cliente.nombre }} {{ ticket.cliente.apellido }}</b>
              </td>
            </tr>
            <tr>
              <td><b class="text-muted">Dirección:</b> {{ ticket.cliente.direccion }}</td>
            </tr>
            <tr>
              <td><b class="text-muted">Teléfono:</b> {{ ticket.cliente.telefono }}</td>
            </tr>
            <br />
            <tr>
              <td class="center-td">
                <h4>Equipo</h4>
              </td>
            </tr>
            <tr>
              <td>
                <b>{{ ticket.equipo.equipo }} {{ ticket.equipo.modelo }} </b>
              </td>
            </tr>
            <tr>
              <td>
                <b class="text-muted">Descripción del equipo:</b> {{ ticket.equipo.descripcion }}
              </td>
            </tr>
            <tr class="border-bottom">
              <td>
                <b class="text-muted">Diagnóstico del equipo:</b> {{ ticket.equipo.diagnostico }}
              </td>
            </tr>
            <tr>
              <td class="text-muted center-td">
                Equipo recibido el {{ ticket.created_at | date }}
              </td>
            </tr>
          </tbody>
        </table>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-center justify-center>
      <v-flex xs6>
        <v-btn color="primary" block @click="imprimir">Descargar ticket</v-btn>
      </v-flex>
      <v-flex xs6>
        <v-btn :disabled="!success" color="success" block to="/"
          >Volver a la página principal</v-btn
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default {
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
  methods: {
    async imprimir() {
      const filename = `ticket_inicial${this.ticket.id}`

      await html2canvas(document.querySelector(`#ticketInicial${this.ticket.id}`)).then(canvas => {
        // eslint-disable-next-line new-cap
        const pdf = new jsPDF('p', 'mm', 'a4')
        pdf.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 5, 5)
        pdf.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 5, 148)
        pdf.save(filename)
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
table td {
  text-align: justify
}
.center-td {
  text-align: center
}
.icon-ticket {
  width: 10%;
  top:0;
}
</style>
