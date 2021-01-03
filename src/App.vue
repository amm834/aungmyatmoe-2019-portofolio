<template>
 <v-app id="app">
  <!-- App Bar Will Goes Here -->
  <app-bar></app-bar>
  <!-- View Router Will Goes Here -->
  <v-main class="mt-16 mb-5">
   <router-view></router-view>
  </v-main>

  <v-btn
   v-scroll="onScroll"
   v-show="fab"
   fab
   dark
   fixed
   bottom
   right
   color="deep-purple"
   @click="toTop"
   class="mb-10"
   >
   <v-icon>keyboard_arrow_up</v-icon>
  </v-btn>

  <!-- Page Footer -->
  <footers></footers>
 </v-app>

</template>

<script>
 import AppBar from '@/components/AppBar'
 import Footers from '@/components/Footers'
 export default {
  name: 'App',
  components: {
   AppBar,
   Footers
  },
  data: ()=> {
   return {
    fab: false
   }
  },
  methods: {
   onScroll (e) {
    if (typeof window === 'undefined') return;
    const top = window.pageYOffset || e.target.scrollTop || 0
    this.fab = top > 20
   },
   toTop () {
    this.$vuetify.goTo(0)
   }
  }
 }
 </script>