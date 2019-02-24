<template>
  <v-toolbar dense>
    <v-toolbar-title>
      <img src="/images/xg-icon.png" alt="icon" class="icon-navbar" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
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
    </v-toolbar-items>
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
