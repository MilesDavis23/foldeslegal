<template>
    <v-container fluid ma-0 pa-0 id="contact">
        <v-card flat tile class="white--text text-center ma-0 pa-0"
            style="height: 100%; background-image: url('./mosaicGreen.jpg'); background-size: contain; background-repeat:repeat">



                <div class="mx-auto" :style="`max-width: ${dynamicWidth}px`">
                    <div class="d-flex flex-column flex-md-row justify-space-between font-weight-bold body-2 py-5 mb-lg-10">
                        <div v-for="contactMethod in contact" :key="contactMethod.name" class="mb-3 my-md-auto mx-auto ma-0"
                            :class="contactMethod.contactStyle"
                            :style="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'letter-spacing: 0.1em; padding: 5px' : 'letter-spacing: 0; '">
                            <div class="pa-2 mx-0">{{ contactMethod.meta[0] }} </div>
                            <div>
                                <v-btn icon :color="contactMethod.color" @click="handleAddress(contactMethod.name)"
                                    :href="contactMethod.href" :target="contactMethod.target">
                                    <v-icon> {{ "mdi-" + contactMethod.icon }} </v-icon>
                                </v-btn>
                                <v-btn icon :color="contactMethod.color" @click="$emit('childAlert', contactMethod.name)">
                                    <v-icon class="copy">{{ copyIcon }}</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>




            <v-card-text class="subtitle-2 font-weight-bold text-uppercase overline" style="color: #F4E8D2">
                {{ new Date().getFullYear() }} — <strong v-scroll-to="{ el: '#home', offset: 0, duration: 1500 }"
                    style="cursor: pointer">{{ englishOn ? 'Földes Law Office' : 'Földes ügyvédi iroda' }}</strong>
            </v-card-text>

            <v-card-text style="color: #F4E8D2; max-width: 60%; margin: auto; padding: 0 10px;">
                <div v-if="englishOn">
                    <b>
                        <!-- English text structure here -->
                        This website is maintained by the FÖLDES Law Office in accordance with the laws and internal
                        regulations applicable to attorneys, which, together with information on client rights, can be found
                        on the website of the
                        <a href="https://www.mük.hu" style="color: inherit; text-decoration: underline;"
                            target="_blank">Hungarian Bar Association.</a>
                    </b>
                    <div>
                        <a href="https://shdw-drive.genesysgo.net/FnEUmKjEByGpAb89cU9QbnkyYx7wKCaji2GXnc27PGdY/doc.pdf"
                            target="_blank">Privacy Policy (HU)</a>
                    </div>
                </div>
                <div v-else>
                    <b>
                        <!-- Hungarian text structure here -->
                        Ezt a honlapot a FÖLDES Ügyvédi Iroda az ügyvédekre vonatkozó jogszabályok és belső szabályzatok
                        szerint tartja fent, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a
                        <a href="https://www.mük.hu" style="color: inherit; text-decoration: underline;"
                            target="_blank">Magyar Ügyvédi Kamara honlapján</a>
                        megtalálhatóak.
                    </b>
                    <div>
                        <a href="https://shdw-drive.genesysgo.net/FnEUmKjEByGpAb89cU9QbnkyYx7wKCaji2GXnc27PGdY/doc.pdf"
                            target="_blank">Adatkezelési Szabályzat</a>
                    </div>
                </div>
            </v-card-text>


            <v-card-text class="body-2" style="color: #F4E8D2">
                <strong>{{ englishOn ? 'All rights reserved' : 'Minden jog fenntartva' }}</strong>
            </v-card-text>
        </v-card>

    </v-container>
</template>

<script>
export default {
    name: 'ContactDetails',
    props: ['contact', 'address', 'copyIcon', 'dynamicWidth', 'englishOn'],

    data: () => ({
        timeout: 1500,
        snackbar: false,
        icons: [
            'mdi-facebook',
            'mdi-linkedin',
        ],
        mail: 'mdi-email'
    }),

    methods: {
        handleAddress(contactMethodName) {
            if (contactMethodName == "address") this.$parent.$refs.gmap.relocate()
        }
    }
}
</script>
