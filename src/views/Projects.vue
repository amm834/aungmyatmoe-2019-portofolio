<template>
 <v-container>
  <h1 class="text-h5">Featured Projects</h1>
  <v-row class="my-3">
   <v-col md="8" sm="8" class="mx-auto">
    <v-card
     v-for="(project,i) in projects" :key="i"
     class="my-5"
     eleviation="20"
     >
     <v-img :src="project.imgPath"
      contain
      ></v-img>
     <v-card-title>
      {{project.name}}
     </v-card-title>
     <v-card-subtitle class="pb-0">
      {{project.description}}
     </v-card-subtitle>
     <v-card-subtitle class="font-weight-bold">
      Used Technologies And Languages
     </v-card-subtitle>
     <div>
      <v-chip
       class="ma-2"
       dark
       color="deep-purple"
       v-for="(language,i) in project.techs" :key="i"
       >
       {{language}}
      </v-chip>
     </div>
     <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
       color="deep-purple"
       text
       :href="project.link"
       :disabled="project.link.length>0 ? false : true"
       >
       {{ project.link.length>0 ? 'Live Preview' : 'Preview Unable' }}
       <v-icon right>mdi-open-in-new</v-icon>
      </v-btn>
     </v-card-actions>
    </v-card>
   </v-col>
  </v-row>
  <!-- All Repos -->
  <h1 class="text-h5 my-4">All Of My Projects And Forks</h1>
  <v-card
   class="mx-auto"
   tile
   >
   <v-list dense>
    <v-subheader>Repos</v-subheader>
    <v-list-item-group
     color="deep-purple"
     >
     <v-list-item
      v-for="(repo,i) in repos"
      :key="i"
      :href="repo.html_url"
      >
      <v-list-item-avatar>
       <v-avatar
        size="40"
        class="deep-purple white--text"
        >
        {{i}}
       </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
       {{repo.name}}
      </v-list-item-content>

     </v-list-item>
    </v-list-item-group>
   </v-list>
  </v-card>
 </v-container>
</template>
<script>
 export default {
  data() {
   return {
    repos: [],
    projects: [{
     name: 'Portofolio Website UI',
     imgPath: require('@/assets/portofolio.jpg'),
     description: `My first portofolio Website.`,
     link: '',
     techs: [
      'HTML-5',
      'CSS-3'
     ]
    },
     {
      name: 'Calculator UI',
      imgPath: require('@/assets/Calculator_UI.jpg'),
      description: `My first portofolio Website.`,
      link: '',
      techs: [
       'HTML-5',
       'CSS-3'
      ]
     },
     {
      name: 'UI For UCAE Page',
      imgPath: require('@/assets/Ucae.jpg'),
      description: `My first portofolio Website.`,
      link: 'https://ucae.netlify.app',
      techs: [
       'HTML-5',
       'CSS-3',
       'JavaScript'
      ]
     },
     {
      name: 'Static Site For MCY',
      imgPath: require('@/assets/Tailwind_CSS.jpg'),
      description: `My first portofolio Website.`,
      link: '',
      techs: [
       'HTML-5',
       'CSS-3',
       'BootStrap-5',
       'JavaScript'
      ]
     }],
   }
  },
  methods: {
   async getRepos() {
    try {
     const res = await this.$http.get(`https://api.github.com/users/amm834/repos?per_page=100`);
     res.data.forEach(data=> {
      this.repos.push(data)
      this.$root.loading = false;
     })
    }catch(err) {
     this.$root.loading = false;
    }
   }
  },
  created() {
   this.getRepos();
  }
 }



 </script>