<template>
  <v-app>
    <toolbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './partials/Toolbar.vue'

export default {
  components: {
    Toolbar
  }
}
</script>

<style>
.v-content {
  background-image: url('~/images/merely_cubed.png') !important;
  background-repeat: repeat;
}
.swal2-popup {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
.bottom-shadow {
  -webkit-box-shadow: 0px 3px 2px 0px rgba(50, 50, 50, 0.5);
  -moz-box-shadow:    0px 3px 2px 0px rgba(50, 50, 50, 0.5);
  box-shadow:         0px 3px 2px 0px rgba(50, 50, 50, 0.5);
}
</style>
