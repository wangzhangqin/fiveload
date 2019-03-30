import Vue from 'vue'
import Router from 'vue-router'
import home from "../views/home"
import mall from "./mall"
import overseaservice from "./overseaservice"
import store from "./store"
import user from "./user"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path : "/",
      component : home
    },
    mall,
    overseaservice,
    store,
    user,
    {
      path : "**",
      component : home
    }
  ]
})
