<template>
  <div ref="contact">  
    <v-container fluid ma-0 pa-0 id="contact">
      <div :class="$vuetify.breakpoint.width > 1000 ? 'parallaxxx building3' : ''"></div>
      <v-snackbar v-model="snackbar" :timeout="timeout" color="#115874">
          <div class="text-center button">
              Copied to clipboard
          </div>
      </v-snackbar>
      <v-container class="px-md-5" :style="`max-width: ${dynamicWidth}px`">
          <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-0 text-justify" style="color: #BEAF67">{{englishOn ? 'Contact' : 'Elérhetőségünk'}}</h3>
      </v-container>

      <!-- MARKER eredeti: #0f344f -->
      <v-card flat tile class="white--text text-center ma-0 pa-0" color="#09393d" >
          <v-card-text>
              <v-btn :x-large="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? true : false" v-for="social in socials" :key="social[0]" color="#F4E8D2" class="mx-4" icon :href="social[1]">
                  <v-icon> {{ social[0] }} </v-icon>
              </v-btn>
          </v-card-text>
      </v-card>
      <v-container fluid ma-0 pa-0>
          <v-card max-height="400">
              <AddGoogleMap ref="gmap" />
          </v-card>
      </v-container>
        <ContactDetails :englishOn="englishOn" :dynamicWidth="dynamicWidth" :contact="contactMethods" :copyIcon="copyIcon" @childAlert="$emit('childAlert',$event)" @childCall="$emit('childCall', 'tel:+52554442')"/>
    </v-container>
  </div>

</template>

<script>
// @ is an alias to /src
import ContactDetails from '@/components/ContactDetails.vue'
import AddGoogleMap from "@/components/AddGoogleMap"

export default {
  name: 'Contact',
  components: {
    ContactDetails,
    AddGoogleMap
  },
  props: ['contactMethods','copyIcon', 'dynamicWidth', 'englishOn'],

  data: ()=>{
    return {
      timeout: 1500,
      snackbar : false,
      socials: [
          ['mdi-facebook','https://www.facebook.com/Földes-Ügyvédi-Iroda-101496635999022'],
          ['mdi-linkedin','https://www.linkedin.com/company/f%C3%B6ldes-%C3%BCgyv%C3%A9di-iroda']
      ],
      mail: 'mdi-email'
    }
  }
}
</script>
