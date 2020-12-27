import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/font-awesome.css"
import VueRouter from 'vue-router'
import {routes} from './router/router'

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
