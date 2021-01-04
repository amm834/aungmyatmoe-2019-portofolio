<template>
 <div>
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
 </div>
</template>

<script>
 export default {
  name: 'GoToTop',
  data: ()=> {
   return {
    fab: false
   }
  },
  methods: {
   onScroll (e) {
    const top = window.pageYOffset || e.target.scrollTop || 0;
    this.fab = top > 20;
   },
   toTop () {
    this.$vuetify.goTo(0);
   }
  }
 }
 </script>