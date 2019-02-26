<template>
  <v-container>
    <v-layout row wrap align-center justify-center>
      <v-flex :id="'ticketInicial' + ticket.id" xs6>
        <v-card>
          <v-toolbar flat dense>
            <v-toolbar-title>
              <img src="/images/xg-icon.png" alt="icon" class="icon-ticket" />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn flat> N° {{ ticket.id }} </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-title primary-title>
            <v-container>
              <v-layout row wrap>
                <v-flex xs4>
                  <div class="display-1 grey--text text--darken--2">Cliente</div>
                </v-flex>
                <v-flex xs8>
                  <v-card-text>
                    <h1 class="title">{{ cliente.nombre }} {{ cliente.apellido }}</h1>
                  </v-card-text>
                  <v-card-text>{{ cliente.direccion }}</v-card-text>
                  <v-card-text>{{ cliente.telefono }}</v-card-text>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs4>
                  <div class="display-1 grey--text text--darken--2">
                    Equipo
                  </div>
                </v-flex>
                <v-flex xs8>
                  <v-card-text>
                    <h1 class="title">{{ equipo.equipo }}</h1>
                    <p>{{ equipo.modelo }}</p>
                  </v-card-text>
                  <v-card-text>{{ equipo.descripcion }}</v-card-text>
                  <v-card-text>{{ equipo.diagnostico }}</v-card-text>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions class="pa-3">
            <b>Equipo recibido el {{ ticket.created_at }}</b>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap align-center justify-center>
      <v-flex xs6>
        <v-btn color="primary" block @click="imprimir">
          Imprimir ticket
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default {
  name: 'TicketInicial',
  props: {
    ticket: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    cliente() {
      return this.ticket.cliente
    },
    equipo() {
      return this.ticket.equipo
    }
  },
  methods: {
    imprimir() {
      const filename = `ticket_inicial${this.ticket.id}`

      html2canvas(document.querySelector(`#ticketInicial${this.ticket.id}`)).then(canvas => {
        // eslint-disable-next-line new-cap
        const pdf = new jsPDF('p', 'mm', 'a4')
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298)
        pdf.save(filename)
      })
    }
  }
}
</script>

<style scoped>
.icon-ticket {
  width: 10%;
}
</style>
