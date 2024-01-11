<template>
  <div ref="about">
    <v-container class="px-md-5" id="about" fluid :style="`max-width: ${dynamicWidth}px`">
      <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-2 px-md-0 text-justify  mb-10" style="color: #BEAF67"> <span class="bottomLine">{{ englishOn ? "About us" : "Rólunk"}}</span></h3>
        <v-row class="ma-0 pa-0">
            <v-col cols="12" md="12" class="ma-0 pa-0" >
              <v-img height="100%" eager src="random1Snip.jpg" :max-height="$vuetify.breakpoint.height < 799 && $vuetify.breakpoint.width < 1370 ? 350 : 500"> </v-img>
            </v-col>
            <v-col cols="12" md="12" class="ma-0 pa-0" >
              <div class="body-2 text-lg-body-1 my-3 text-justify" style="color: #09393d;">
              {{ englishOn ? dynamicAbout1[1] : dynamicAbout1[0] }} <span style="color: #BEAF67" class="font-weight-bold" v-text="englishOn ? dynamicAbout2[1] : dynamicAbout2[0]"></span> {{ englishOn ? dynamicAbout3[1] : dynamicAbout3[0] }}
              </div>
            </v-col>
          </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'About',
  props: ['dynamicWidth', 'englishOn'],
  data: function () {
      return {
        dynamicAbout1: [
          'Ügyvédi irodánk 26 éve Debrecenben működő immár két generációs vállalkozás. Ügyfeleink nemcsak Debrecenből és környékéről, hanem szinte az ország egész területéről keresnek bennünket az ügyeik vitele és azok megoldása érdekében. \nBüszkék vagyunk rá, hogy ügyfeleink rendszerint visszatérnek hozzánk és tartósan ránk bízzák ügyeik vitelét. Nem csak az irodánk, hanem az ügyfélkörünk is kétgenerációssá vált az idők során.\nForduljon bizalommal hozzánk, mert a következőket nyújtjuk Önnek: figyelmet, precízitást, diszkréciót, koncentrációt, megoldást találva a jogi problémájára, szakmai felkészültséget és ',
          'Our law office is a two-generation business operating from Debrecen for more then 25 years. Our clients are not only consist from people around Debrecen and it\'s surroundings, but we revice inquires from almost the entire country in order to manage and solve their cases. We are proud of the fact that our clients usually return to us and entrust us with their affairs on a permanent basis. Not only our office, but also our clientele has become two generations over time.  Contact us with confidence, because we offer you the following: attention, precision, discretion, concentration and finding a solution to your legal problem with professional preparation and '
        ],
        dynamicAbout2: [
          'több mint két évtizednyi tapasztalatot',
          'more then two decades of experience'
        ],

        dynamicAbout3: [
          'a jogi problémák kezelésében. Ügyvédi munkadíjainkat rugalmasan az ügy jellegéhez igazítjuk.',
          'in managing legal problems. We adapt our lawyer\'s fees flexibly to the nature of the case.'
        ]
    }
  }
}
</script>