<template>
 <v-app id="app">
  <!-- Loader -->
  <loader v-if="$root.loading"></loader>
  <div v-else>
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
  </div>
 </v-app>
</template>

<script>
 import AppBar from '@/components/AppBar';
 import Footers from '@/components/Footers';
 import GoToTop from '@/components/GoToTop';
 import Loader from '@/components/Loader';
 export default {
  name: 'App',
  components: {
   AppBar,
   Footers,
   GoToTop,
   Loader
  },
 }
 </script>