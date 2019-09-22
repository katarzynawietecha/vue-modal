import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import './styles/index.scss';

Vue.use(VueRouter)

import Dashboard from "./components/Dashboard.vue"


const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      component: Dashboard
    }
  ]
})


new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
