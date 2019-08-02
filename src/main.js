import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import VModal from "vue-js-modal";
import api from "./api";
import VueSkeletonLoading from "vue-skeleton-loading";
Object.defineProperty(Vue.prototype, "$api", { value: api });
Vue.use(VueSkeletonLoading);
Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount("#app");