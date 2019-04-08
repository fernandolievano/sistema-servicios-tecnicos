<template>
  <v-toolbar flat dense>
    <v-toolbar-title>
      <router-link to="/">
        <img src="/images/xg-icon.png" alt="icon" class="icon-navbar" />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down mx-5">
      <v-btn :to="{ name: 'servicios' }" flat>
        Servicios
      </v-btn>
      <v-btn :to="{ name: 'repuestos' }" flat>
        Repuestos
      </v-btn>
      <v-btn :to="{ name: 'equipos' }" flat>
        Equipos
      </v-btn>
      <v-btn :to="{ name: 'clientes' }" flat>
        Clientes
      </v-btn>
      <v-btn :to="{ name: 'caja' }" flat>
        Caja
      </v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up mx-5">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-btn :to="{ name: 'servicios' }" flat>
              Servicios
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-btn :to="{ name: 'repuestos' }" flat>
              Repuestos
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-btn :to="{ name: 'equipos' }" flat>
              Equipos
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-btn :to="{ name: 'clientes' }" flat>
              Clientes
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-btn :to="{ name: 'caja' }" flat>
              Caja
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style>
.icon-navbar {
  width: 5%;
}
</style>
