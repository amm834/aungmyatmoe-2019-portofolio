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
  
  <div class="update-dialog" v-if="prompt">
      <div class="update-dialog__content">
        A new version is found. Refresh to load it?
      </div>
      <div class="update-dialog__actions">
        <button
          class="update-dialog__button update-dialog__button--confirm"
          @click="update"
        >
          Update
        </button>
        <button
          class="update-dialog__button update-dialog__button--cancel"
          @click="prompt = false"
        >
          Cancel
        </button>
      </div>
    </div>
  
  
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
  methods: {
   async update() {
    this.prompt = false;
    await this.$workbox.messageSW({
     type: "SKIP_WAITING"
    });
   }
  },
  data() {
   return {
    prompt: false
   };
  },
  created() {
   if (this.$workbox) {
    this.$workbox.addEventListener("waiting", () => {
     this.showUpdateUI = true;
    });
   }
  }
 }
 </script>