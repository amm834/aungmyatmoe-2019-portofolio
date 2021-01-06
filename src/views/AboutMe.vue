<template>
 <v-container>
  <v-row>
   <v-col
    cols="12"
    md="8"
    offset-md="2"
    >
    <v-card
     class="mx-auto"
     flat
     >
     <!-- Cenyer The Image -->
     <v-row
      justify="center"
      >
      <v-avatar
       size="200"
       class="mt-3"
       >
       <img
       src="@/assets/amm.jpg"
       alt="Aung Myat Moe"
       >
      </v-avatar>
     </v-row>
     <v-row
      justify="center"
      class="mt-3"
      >
      <v-card-title class="font-weight-black">
       Aung Myat Moe
      </v-card-title>

     </v-row>
     <v-card-subtitle class="text-center">
      {{shortBio}}
     </v-card-subtitle>

     <v-card-subtitle class="font-weight-black">
      I am very experience in building web applications.
     </v-card-subtitle>

     <v-card-actions>
      <v-btn
       color="deep-purple darken-3"
       text
       @click="show = !show"
       >
       Hire Me
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
       icon
       color="deep-purple"
       @click="show = !show"
       >
       <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
     </v-card-actions>

     <v-expand-transition>
      <div v-show="show">
       <v-divider></v-divider>

       <v-card-text>
        <!-- Contact List -->
        <v-list shaped>
         <v-subheader>
          How To Reach Me?
         </v-subheader>
         <v-list-item-group
          v-model="selectedItem"
          color="deep-purple"
          >
          <v-list-item
           v-for="(item, i) in contactList"
           :key="i"
           >
           <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
           </v-list-item-icon>
           <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
           </v-list-item-content>
          </v-list-item>
         </v-list-item-group>
        </v-list>
       </v-card-text>
      </div>
     </v-expand-transition>
    </v-card>
   </v-col>
  </v-row>
  <!-- Education -->
  <v-row justify="center" class="my-5">
       <v-card width="500" outlined v-ripple>
    <v-card-text>
     <div class="font-weight-bold ml-8 mb-2">
      Education
     </div>
     <v-timeline
      align-top
      dense
      >
      <v-timeline-item
       v-for="(school,i) in schools"
       :key="i"
       :color="school.color"
       small
       >
       <div>
        <div class="font-weight-normal">
         <strong>{{ school.time}}</strong> {{school.status}}
        </div>
        <div>
         {{ school.name }}
        </div>
       </div>
      </v-timeline-item>
     </v-timeline>
    </v-card-text>
   </v-card>

   
  </v-row>

 </v-container>
</template>
<script>
 export default {
  data: () => ({
   show: true,
   selectedItem: 0,
   shortBio: `Here is ´Aung Myat Moe´ and I am 17 years old university student and self taught developer.
   I have many experience in my self projects.`,
   contactList: [{
    text: '+959670141939', icon: 'phone'
   },
    {
     text: 'augmyatmoe834@gmail.com', icon: 'email'
    },
    {
     text: 'Freelancer,Part Time', icon: 'mdi-clock'
    },
   ],
   schools: [{
    time: '2019',
    name: `No(3).B.E.H.S,Myoma,Letpadan,Bago,Myanmar`,
    color: 'deep-purple lighten-1',
    status: 'Present'
   },
    {
     time: '2020',
     name: `W3 Computer Basic School`,
     color: 'purple lighten-1',
     status: 'Present'
    },
    {
     time: '2020',
     name: `University Of Pyay`,
     color: 'success lighten-1',
     status: 'Studying'
    },
   ],

  }),
 }
 </script>