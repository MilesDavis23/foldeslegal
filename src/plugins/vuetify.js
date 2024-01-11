import Vue from 'vue';
import Vuetify from 'vuetify';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vuetify/dist/vuetify.min.css'; 

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                accent: '#f4e8d2'
            }
        }
    },
    icons: {
        iconfont: 'fa',
        },
});
