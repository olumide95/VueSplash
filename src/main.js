import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import api from './api'
import VueSkeletonLoading from 'vue-skeleton-loading';
Object.defineProperty(Vue.prototype, '$api', { value: api });
Vue.use(VueSkeletonLoading);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')