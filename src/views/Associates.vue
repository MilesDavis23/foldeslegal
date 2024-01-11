<template>
  <div ref="associates">
    <v-container fluid ma-0 pa-0 @scroll.passive="passiveScroll" id="associates">
      <div :class="$vuetify.breakpoint.width > 1000 ? 'parallaxxx building2' : ''"></div>
      <v-container class="px-md-5" :style="`max-width: ${dynamicWidth}px`">
        <h3 class="text-h5 text-md-h4 text-xl-h3 mb-5 mb-md-0 pa-md-2 px-md-0 text-justify" style="color: #BEAF67"><span class="bottomLine">{{ englishOn ? 'Our Team' : 'Munkatársaink'}}</span></h3>
        <div class="d-flex flex-column flex-md-row flex-wrap justify-md-center my-3 mb-lg-7">
          <div style="color: #BEAF67;" v-for="lawyer in lawyersList.firstLine" :key="lawyer.name" class="mx-auto mx-md-5 mt-lg-5">
            <AssociateCard :lawyer="lawyer" :englishOn="englishOn" />
          </div>

        </div>
        <div class="d-flex flex-column flex-md-row flex-wrap justify-md-center my-3 mb-lg-7" v-for="lawyer in lawyersList.secondLine" :key="lawyer.name">
          <AssociateCard :lawyer="lawyer" :englishOn="englishOn"/>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import AssociateCard from '@/components/AssociateCard.vue'

export default {
  name: 'Associates',
  props: ['dynamicWidth', 'englishOn'],
  components: {
    AssociateCard
  },

  data: ()=>{
    return {
      lawyersList: 
        {
          firstLine: [
            {name: "Dr. Földesné dr. Sipos Judit", title: ['Ügyvéd','Attorney-at-law'], pic: "./portraitSnipp2.JPG", href1: 'mailto:foldest@t-online.hu', target: '_blank', href2: 'tel:+36309283242'},
            {name: "Dr. Földes Péter Tamás", title: ['Ügyvédjelölt', 'Associate'], pic: "./portraitSnipp3.JPG", href1: 'mailto:foldespeter@foldeslegal.hu', target: '_blank', href2: 'tel:+36305889985'},

          ],
          secondLine: [
            {name: "Molnár Erika", title: ['Jogi Asszisztens', 'Legal Secretary'], pic: "./portraitSnipp1.jpg", href1: 'mailto:iroda@foldeslegal.hu', target: '_blank', href2: 'tel:+3652342821'},
          ]
        }
    }
  }
}
</script>

<style>
  .button{
    font-family: Arial, Helvetica, sans-serif !important;
  }

  .button .spaced {
    letter-spacing: .1666666667em;
  }

  .customFrame{
    padding: 10px; width: 415px; 
  }



</style>