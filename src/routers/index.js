import Vue from 'vue'
import Router from 'vue-router'
import home from "../views/home"
import mall from "./mall"
import overseaservice from "./overseaservice"
import store from "./store"
import user from "./user"
import search from "./search"
import brand from "./brand"
import sales from "./sales"
import overseas from "./overseas"
import good from "./good"
import cart from "./cart"
import warthbuy from "./warthbuy"
import video from "./video"
import videoplay from "./videoplay"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path : "/",
      component : home,
      meta : {
        footTab : true
      }
    },
    mall,
    overseaservice,
    store,
    user,
    search,
    brand,
    sales,
    overseas,
    good,
    cart,
    warthbuy,
    video,
    videoplay,
    {
      path : "**",
      component : home
    }
  ]
})
