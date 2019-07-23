import Vue from "vue";
import Gallery from './components/Gallery';
import SearchResult from './components/SearchResult';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Gallery
        },

        {
            path: '/search',
            name: 'search',
            component: SearchResult
        }
    ],

});