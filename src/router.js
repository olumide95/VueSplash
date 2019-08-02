import Vue from "vue";
import Landing from "./components/Landing";
import SearchResult from "./components/SearchResult";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            name: "home",
            component: Landing
        },

        {
            path: "/search",
            name: "search",
            component: SearchResult
        }
    ]
});