<template>
  <div>
    <v-dialog v-model="dialog" lazy fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn slot="activator" color="primary" dark>Generar ticket de pago</v-btn>
      <v-card>
        <v-toolbar dark color="brown darken-4">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Retirar equipo</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="generarTicket">Listo</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div v-if="success" class="text-xs-center">
          <h1 class="success--text display-2">
            Creado con éxito
          </h1>
          <v-btn color="primary" block :to="{ name: 'factura', params: { id: ticket.id } }">
            Ver Ticket
          </v-btn>
        </div>
        <v-form v-if="!success" ref="retirarequipo" v-model="valid" lazy-validation>
          <h1 class="display-2">Generar ticket de pago</h1>
          <v-list>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-autocomplete
                    v-model="repuestosUsados"
                    :items="repuesto.repuestos"
                    :disabled="isUpdatingR"
                    chips
                    color="blue-grey lighten-2"
                    label="Repuestos utilizados"
                    item-text="repuesto"
                    return-object
                    multiple
                  >
                    <template slot="selection" slot-scope="data">
                      <v-chip
                        :selected="data.selected"
                        close
                        class="chip--select-multi"
                        @input="data.parent.selectItem(data.item)"
                      >
                        {{ data.item.repuesto }}
                      </v-chip>
                    </template>
                    <template slot="item" slot-scope="data">
                      <template v-if="typeof data.item !== 'object'">
                        <v-list-tile-content v-text="data.item"></v-list-tile-content>
                      </template>
                      <template v-else>
                        <v-list-tile-content>
                          <v-list-tile-title>{{ data.item.repuesto }}</v-list-tile-title>
                          <v-list-tile-sub-title>{{
                            data.item.precio_unitario_venta
                          }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </template>
                    </template>
                  </v-autocomplete>
                </v-flex>
                <v-flex v-if="repuestosUsados.length > 0" xs12>
                  <h4>Repuestos</h4>
                  <v-layout v-for="repuesto in repuestosUsados" :key="repuesto.id" row wrap>
                    <v-flex xs12>
                      <h5 class="primary--text">{{ repuesto.repuesto }}</h5>
                    </v-flex>
                    <v-flex xs12 md6>
                      <v-text-field
                        v-model.number="repuesto.precio_unitario_venta"
                        label="Precio"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                      <v-text-field
                        v-model.number="repuesto.cantidad_utilizada"
                        label="Cantidad requerida"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12>
                  <v-autocomplete
                    v-model="serviciosRequeridos"
                    :items="servicio.servicios"
                    :disabled="isUpdatingS"
                    chips
                    color="blue-grey lighten-2"
                    label="Servicios Requeridos"
                    item-text="titulo"
                    return-object
                    multiple
                  >
                    <template slot="selection" slot-scope="data">
                      <v-chip
                        :selected="data.selected"
                        close
                        class="chip--select-multi"
                        @input="data.parent.selectItem(data.item)"
                      >
                        {{ data.item.titulo }}
                      </v-chip>
                    </template>
                    <template slot="item" slot-scope="data">
                      <template v-if="typeof data.item !== 'object'">
                        <v-list-tile-content v-text="data.item"></v-list-tile-content>
                      </template>
                      <template v-else>
                        <v-list-tile-content>
                          <v-list-tile-title>{{ data.item.titulo }}</v-list-tile-title>
                          <v-list-tile-sub-title>{{ data.item.valor }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </template>
                    </template>
                  </v-autocomplete>
                </v-flex>
                <v-flex v-if="serviciosRequeridos.length > 0" xs12>
                  <h4>Servicios</h4>
                  <v-layout
                    v-for="servicio in serviciosRequeridos"
                    :key="servicio.id + servicio.titulo"
                    row
                    wrap
                  >
                    <v-flex xs12>
                      <h5 class="primary--text">{{ servicio.titulo }}</h5>
                    </v-flex>
                    <v-flex xs12 md6>
                      <v-text-field
                        v-model.number="servicio.valor"
                        label="Costo"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 md6>
                      <v-text-field
                        v-model.number="servicio.cantidad_requerida"
                        label="Cantidad requerida"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-list>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'

export default {
  props: {
    clienteId: {
      type: Number,
      required: true,
      default: 0
    },
    equipoId: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      autoUpdate: true,
      isUpdatingR: false,
      isUpdatingS: false,
      dialog: false,
      valid: false,
      success: false,
      serviciosRequeridos: [],
      repuestosUsados: [],
      detail: {
        servicios: [],
        repuestos: []
      },
      ticket: null
    }
  },
  computed: {
    ...mapState(['repuesto', 'servicio'])
  },
  watch: {
    isUpdatingR(val) {
      if (val) {
        // eslint-disable-next-line no-return-assign
        setTimeout(() => (this.isUpdatingR = false), 1500)
      }
    },
    isUpdatingS(val) {
      if (val) {
        // eslint-disable-next-line no-return-assign
        setTimeout(() => (this.isUpdatingS = false), 1500)
      }
    }
  },
  mounted() {
    this.fetchRepuestos()
    this.fetchServicios()
  },
  methods: {
    ...mapActions({
      fetchRepuestos: 'repuesto/fetchAll',
      fetchServicios: 'servicio/fetchAll',
      createFinal: 'ticket/createFinal',
      setDetails: 'ticket/sendDetails'
    }),
    generarTicket() {
      const self = this
      let pagoTotal = 0

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i <= self.repuestosUsados.length; i++) {
        if (self.repuestosUsados !== null && self.repuestosUsados !== undefined) {
          const precio = self.repuestosUsados[i].precio_unitario_venta
          const cantidad = self.self.repuestosUsados[i].cantidad_utilizada
          pagoTotal += precio * cantidad

          // para detalle en la factura
          const repuestoDetail = {
            repuesto: self.repuestosUsados[i].repuesto,
            cantidad: self.repuestosUsados[i].cantidad_utilizada,
            precio_unitario: self.repuestosUsados[i].precio_unitario_venta
          }

          self.detail.repuestos.push(repuestoDetail)
        }
      }

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i <= self.serviciosRequeridos.length; i++) {
        if (self.serviciosRequeridos[i] !== null && self.serviciosRequeridos[i] !== undefined) {
          const precio = self.serviciosRequeridos[i].valor
          const cantidad = self.serviciosRequeridos[i].cantidad_requerida
          pagoTotal += precio * cantidad

          const servicioDetail = {
            servicio: self.serviciosRequeridos[i].titulo,
            precio: self.serviciosRequeridos[i].valor,
            cantidad: self.serviciosRequeridos[i].cantidad_requerida
          }

          self.detail.servicios.push(servicioDetail)
        }
      }

      self.setDetails(self.detail)

      const servicios = self.serviciosRequeridos
      const joinedServicios = servicios.map(serv => serv.titulo).join(', ')

      const repuestos = self.repuestosUsados
      const joinedRepuestos = repuestos.map(rep => rep.repuesto).join(', ')

      let message = ''

      if (servicios.length < 1) {
        message = `Ingresos por la venta de los siguientes repuestos: ${joinedRepuestos}.`
      } else if (repuestos.length < 1) {
        message = `Ingresos por servicios técnicos: ${joinedServicios}.`
      } else {
        message = `Ingresos por por la venta de los siguientes repuestos: ${joinedRepuestos} y por servicios técnicos: ${joinedServicios}.`
      }

      const formulario = {
        cliente_id: self.clienteId,
        equipo_id: self.equipoId,
        total: pagoTotal,
        mensaje: message
      }

      const request = Object.assign({}, formulario)
      const url = '/api/v1/tickets/store/final'

      axios.post(url, request).then(response => {
        self.success = true
        self.ticket = response.data
      })
    }
  }
}
</script>

<style></style>
