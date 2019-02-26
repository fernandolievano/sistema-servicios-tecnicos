<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex v-for="item in equipos" :key="item.id" xs12 sm6 md4>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>
              {{ item.equipo }}
              <small class="grey--text text--darken-2">
                {{ item.modelo }}
              </small>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn flat small fab color="error">
                <v-icon>
                  clear
                </v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-responsive min-height="220">
            <v-card-title>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-list three-line subheader>
                    <v-subheader>
                      Información del equipo
                    </v-subheader>

                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Propietario</v-list-tile-title>
                        <v-list-tile-sub-title></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Estado</v-list-tile-title>
                        <v-list-tile-sub-title></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Diagnóstico</v-list-tile-title>
                        <v-list-tile-sub-title></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Descripción</v-list-tile-title>
                        <v-list-tile-sub-title></v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-card-title>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexEquipos',
  computed: {
    ...mapState(['equipos'])
  },
  mounted() {
    this.$store.dispatch('indexEquipos')
  }
}
</script>

<style></style>
