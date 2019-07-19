import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import api from './api'
Object.defineProperty(Vue.prototype, '$api', { value: api });

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')