<template>
  <v-card
   class="mx-auto rounded-0"
   flat
   >
   <v-img
    contain
    src="@/assets/contact_me.svg"
    ></v-img>
<v-container>
   <v-card-title>
    Contact Me
   </v-card-title>

   <v-card-text>
    <v-row
     align="center"
     class="mx-0"
     >
    </v-row>

    <div class="my-4 subtitle-1">
     $ • Self Taught PHP and JS Web Developer
    </div>
   </v-card-text>
   <v-card-text class="font-weight-bold">
    Young and Strong enough to polish your projects.
   </v-card-text>

   <v-divider class="mx-4"></v-divider>

   <v-card-title>
    Available Times
   </v-card-title>

   <v-card-text>
    <v-chip-group
     v-model="selection"
     active-class="deep-purple accent-4 white--text"
     column
     >
     <v-chip v-for="(time,i) in avliableTimes" :key="i">
      {{time}}
     </v-chip>
    </v-chip-group>
   </v-card-text>
   <v-card-text>

    <!-- Contact List -->
    <v-list rounded>
     <v-subheader>
      Via to ME ~
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
</v-container>

  </v-card>
</template>
<script>
 export default {
  data: () => ({
   selection: 4,
   selectedItem:0,
   /* Times that i am free */
   avliableTimes: [
    "8:00 AM",
    "12:00 PM",
    "3:00 PM",
    "5:00 PM",
    "Full Time",
   ],
   contactList: [{
    text: '+959670141939', icon: 'phone'
   },
    {
     text: 'augmyatmoe834@gmail.com', icon: 'email'
    },
    {
     text: 'Freelancer,Part Time,Full Time', icon: 'mdi-clock'
    },
   ],

  }),
 }
 </script>