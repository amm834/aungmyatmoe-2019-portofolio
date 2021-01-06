<template>
 <nav>
  <v-app-bar
   dark
   class="deep-purple darken-1"
   dense
   app
   >
   <!-- Left Side -->
   <v-avatar
    size="35px"
    >
    <img
    src="@/assets/amm.jpg"
    alt="Aung Myat Moe"
    >
   </v-avatar>
   <!-- Brand Name -->
   <h1 class="title ma-3">Aung Myat Moe</h1>
   <v-spacer>
   </v-spacer>
   <!-- Right Side -->
   <v-app-bar-nav-icon
    @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>
  <!-- Navigation Drawer -->
  <v-navigation-drawer
   v-model="drawer"
   temporary
   app
   bottom
   >
   <v-list shaped>
    <v-subheader>MENU</v-subheader>
    <v-list-item-group
     v-model="selectedItem"
     color="deep-purple"
     >
     <v-list-item
      v-for="(item, i) in lists"
      :key="i"
      :to="item.route"
      link
      >
      <v-list-item-icon>
       <v-icon v-text="item.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
       <v-list-item-title v-text="item.name"></v-list-item-title>
      </v-list-item-content>
     </v-list-item>
    </v-list-item-group>
   </v-list>

  </v-navigation-drawer>

 </nav>
</template>

<script>
 export default {
  name: 'AppBar',
  data: ()=> {
   return {
    drawer: false,
    selectedItem: 0,
    lists: [{
     name: 'About Me',
     route: '/',
     icon: 'person'
    },
     {
      name: 'Contact Me',
      route: '/contact',
      icon: 'phone'
     },
     {
      name: 'Projects',
      route: '/projects',
      icon: 'folder'
     },
     {
      name: 'Skills',
      route: '/skills',
      icon: 'accessibility'
     },
    ]
   }
  }
 }
 </script>