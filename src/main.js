import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store/index'
import header from "@/common/header"
import BScroll from "@/common/betterscroll"
import VueLazyload from 'vue-lazyload'
import Loading from "@/common/loading"
Vue.component("Header",header)
Vue.component("BScroll",BScroll)
Vue.component("Loading",Loading)
Vue.config.productionTip = false
 
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("./static/lazyload.jpg"),
  loading: require("./static/lazyload.jpg"),
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
