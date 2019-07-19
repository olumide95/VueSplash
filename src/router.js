import Vue from "vue";
import App from './App';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: App
    }],
});