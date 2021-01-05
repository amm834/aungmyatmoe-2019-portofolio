<template>
 <v-app id="app">
  <!-- App Bar Will Goes Here -->
  <app-bar></app-bar>
  <!-- View Router Will Goes Here -->
  <v-main>
   <router-view></router-view>
  </v-main>
  <!-- Go To Top Fav Button -->
  <go-to-top></go-to-top>
  <!-- Page Footer -->
  <footers></footers>
 </v-app>

</template>

<script>
 import AppBar from '@/components/AppBar';
 import Footers from '@/components/Footers';
 import GoToTop from '@/components/GoToTop';
 export default {
  name: 'App',
  components: {
   AppBar,
   Footers,
   GoToTop,
  },
 }
 </script>