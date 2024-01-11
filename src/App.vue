<template>
  <v-app v-resize="onResize">
    <v-main>
      <v-container fluid class="ma-0 pa-0" id="home">
          <v-carousel cycle hide-delimiters :height="dynamicCarouselHeight()" :show-arrows="false" id="homeScrollTarget">
            <v-carousel-item v-for="(item,i) in items" :key="i" eager>
              <v-img :src="item.src" height="100%" eager/>
            </v-carousel-item>
          </v-carousel>

          <Banner
          @langSwitch='langSwitch' @childAlert="flashAlert($event)" :contactMethods="contactMethods" @openNavInChild="openNavInChild" :menus="menus" :title="title" :englishOn="englishOn" :dynamicSubtitle="dynamicSubtitle" :langSwitch="langSwitch" :copyIcon="copyIcon" ref="banner" />

        <Nav @scroll2map="scroll2map($event)" @childAlert="flashAlert($event)" :contactMethods="contactMethods" :title="title" :menus="menus" :englishOn="englishOn" :dynamicSubtitle="dynamicSubtitle" :dynamicAddress="dynamicAddress" :copyIcon="copyIcon" ref="nav"/>

        <v-snackbar v-model="snackbar" :timeout="timeout" color="#0e5c60">
          <div class="text-center button font-weight-bold" style="color: #F4E8D2; letter-spacing: 0.05em;">
            {{ dynamicSnackText }}
          </div>
        </v-snackbar>


        <div>
          <Home :dynamicWidth="dynamicWidth" :englishOn="englishOn"/>
          <About :dynamicWidth="dynamicWidth" :englishOn="englishOn"/>
          <Practices :dynamicWidth="dynamicWidth" :englishOn="englishOn"/>
          <Associates :dynamicWidth="dynamicWidth" :englishOn="englishOn"/>
          <Contact ref="contact" :englishOn="englishOn" :contactMethods="contactMethods" :dynamicWidth="dynamicWidth" :copyIcon="copyIcon" @childAlert="flashAlert($event)"/>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Practices from '@/views/Practices.vue'
import Associates from '@/views/Associates.vue'
import Nav from '@/components/Nav.vue'
import Banner from '@/components/Banner.vue'



export default {

  components: { Contact, About, Home, Practices, Associates, Nav, Banner },

  data: function () {
      return {
        contactMethods: [
          {name: "address", href: '', target: '', meta: ["4025 Debrecen 43 Piac street", "4025 Debrecen Piac utca 43"], icon: "map-marker-outline", customClass: '', color: '#F4E8D2', class4Banner: '', align: '', contactStyle: 'd-md-flex'},
          {name: "phone", href: 'tel:+52342821', target: '_blank', meta: ["+52 342 821", "+52 342 821"], icon: 'phone-outline', customClass: 'custom-border button', color: '#BEAF67', class4Banner: 'mr-3 mr-md-10 mr-lg-15 px-0', align: 'custom-border button mx-md-15', contactStyle: 'd-flex custom-border button ml-0 mr-15'},
          {name: "email", href: 'mailto:foldest@t-online.hu', target: '_blank', meta: ["foldest@t-online.hu", "foldest@t-online.hu"], icon: "email-outline", customClass: '', color: '#F4E8D2', class4Banner: 'mx-0 px-0', align: '', contactStyle: 'd-md-flex'},
        ],
        dynamicSubtitle : ['Law Office','Ügyvédi Iroda'],
        dynamicAddress : ['5 Piac street 4024 Debrecen', '4024 Debrecen Piac utca 5'],
        dynamicSnackText: '',
        timeout: 1500,
        snackbar : false,
        copyIcon: 'far fa-copy',
        englishOn: false,
        title: 'Földes',
        picRef: "./csapatSnip2.jpg",
        iconActive: false,
        offset: -123,

        menus: [
          {dynamicName: ['Home','Kezdőoldal'], hasSubMenu: false, id: 0, url: '/home', goto: { el: '#home', offset: this.getOffset("main"), duration: 1500 } },
          {dynamicName: ['About','Rólunk'], hasSubMenu: false, id: 1, url: '/about', goto: { el: '#about', offset: this.getOffset("main"), duration: 1500 }},
          {
            dynamicName: ['Our Focus','Szakterületeink'], 
            hasSubMenu: true, 
            subMenus: [
              {dynamicName: ['Cégjog','Company Law'], goto: { el: '#cegjog', offset: this.getOffset("sub"), duration: 1500 }}, 
              {dynamicName: ['Gazdasági ügyek', 'Business Law'], goto: { el: '#gazdjog', offset: this.getOffset("sub"), duration: 1500 }}, 
              {dynamicName: ['Ingatlan ügyek', 'Real Estate'], goto: { el: '#ingatlanjog', offset: this.getOffset("sub"), duration: 1500 }}, 
              {dynamicName: ['Civil szervezetek', 'Estabilishment of Civil Organisations'], goto: { el: '#civiljog', offset: this.getOffset("sub"), duration: 1500 }}, 
              {dynamicName: ['Védjegy ügyek', 'Trademark Law'], goto: { el: '#vedjog', offset: this.getOffset("sub"), duration: 1500 }} 
            ],
            id: 2, 
            url: '/practices', 
            goto: { el: '#practices', offset: this.getOffset("main"), duration: 1500 }
          },
          {dynamicName: ['Our Team','Munkatársaink'], hasSubMenu: false, id: 3, url: '/associates', goto: { el: '#associates', offset: this.getOffset("main"), duration: 1500 }},
          {dynamicName: ['Contact','Kapcsolat'], hasSubMenu: false, id: 4, url: '/contact', goto: { el: '#contact', offset: this.getOffset("main"), duration: 1500 }}
          ],
        drawer: false,
        group: null,
        menuTranslations: ['Home','About','Practices','Associates','Contact'],
        items: [
          {
            src: './csapatSnip2.jpg',
          },
          {
            src: './csapatSnip1.jpg',
          },
          {
            src: './random2Snip.jpg',
          }
        ],
      }
    },
    computed:{
      dynamicWidth(){
        return 1000
      }
    },

  watch: {
    group () {
      this.drawer = false
    },
  },

  methods: {
    getOffset(subOrMain){
      let theOffset = this.$vuetify.breakpoint.width > 959 ? -83 : -123
      if (subOrMain == "sub") theOffset -= 20
      return theOffset;
    },
    onResize () {
      this.offset = this.$vuetify.breakpoint.width > 959 ? -123 : -83;
      },
    openNavInChild(){
          this.$refs.nav.openNav()
        },
    dynamicCarouselHeight(){
      var dHeight = "0"
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          dHeight = '30vh';
          break;
        case "sm":
          dHeight = '45vh';
          break;
        case "md":
          dHeight = '90vh';
          break;
        case "lg":
          dHeight = '90vh';
          break;
        case "xl":
          dHeight = '92vh';
          break;
      }

      if ((this.$vuetify.breakpoint.name == "xs" || this.$vuetify.breakpoint.name == "sm") && this.$vuetify.breakpoint.width > 500 && this.$vuetify.breakpoint.height < 425 ) dHeight = '100vh'

      if (this.$vuetify.breakpoint.width > 1300 && this.$vuetify.breakpoint.height < 400) dHeight = '0vh';

      return dHeight
    },
    scroll2map(contactMethodName){
      if(contactMethodName == "address"){
          this.$scrollTo('#contact', 1500, { el: '#contact', offset: this.getOffset("main")+150, onDone: this.$refs.contact.$refs.gmap.relocate(), duration: 1500 })
          this.$refs.nav.openNav()
      }
    },

    flashAlert(content){
      if (content == 'email'){
        this.dynamicSnackText = this.englishOn ? "EMAIL ADDRESS COPIED TO CLIPBOARD" : "EMAIL CÍM VÁGÓLAPRA MÁSOLVA"
        navigator.clipboard.writeText('foldespeter@foldeslegal.hu')
      } else if (content == 'phone'){
        this.dynamicSnackText = this.englishOn ? "PHONE NUMBER COPIED TO CLIPBOARD" : "TELEFONSZÁM VÁGÓLAPRA MÁSOLVA"
        navigator.clipboard.writeText('+52 554 442')
      } else {
        this.dynamicSnackText = this.englishOn ? "ADDRESS COPIED TO CLIPBOARD" : "CÍM VÁGÓLAPRA MÁSOLVA"
        if (this.englishOn){
          navigator.clipboard.writeText(this.dynamicAddress[0])
        } else {
          navigator.clipboard.writeText(this.dynamicAddress[1])
        }
      }
      event.target.classList.toggle('fas')
      this.snackbar = true


      setTimeout(() => {
        document.querySelectorAll('.copy').forEach(copyElement => {
          copyElement.classList.remove('fas')
        })
      }, this.timeout);
    },
    langSwitch(){
      this.englishOn = !this.englishOn
    }
  }
}
</script>

<style lang="scss">

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
html {
  height: -webkit-fill-available;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


.custom-border{
  border: 2px solid #BEAF67; color: #BEAF67; font-size: 14px;
}

.fixedNavButtonWidth{
  width: 140px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F4E8D2;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #0e5c60;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #F4E8D2;
}

input:focus + .slider {
  box-shadow: 0 0 1px #0e5c60;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
  display: flex;
}

.slider.round:before {
  border-radius: 50%;
}

.switchText{
  text-align: end;
  padding: 12.5%;
  height: 100%;
  color:#115874;
  padding-left: 5px !important;

}

.switchHU{
  text-align: start !important;;
  padding: 12.5% !important;
  height: 100% !important;
  color:#115874 !important;
  padding-right: 0 !important;
}

.contained{
  object-fit: contain;
}

.bottomLine{
  padding-bottom: .5%;
  border-bottom: 1px solid #09393d;
}
.theme--light.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped) .v-banner__wrapper{
    border-bottom: none;
}

#homeScrollTarget > div > div > div > div > div > div.v-image__image.v-image__image--cover {
  background-position: top !important;
}

.v-banner--is-mobile.v-banner--sticky{
  top: -0.5px !important;
}

.v-list-item__title, .v-list-item__subtitle{
  white-space: normal;
}
</style>
