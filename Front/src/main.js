import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/font-awesome.css"
import VueRouter from 'vue-router'
import {routes} from './router/router'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.use(VueRouter);
Vue.use(Buefy);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes,
    mode: "hash",
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
