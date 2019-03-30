import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store/index'
import footGuide from "@/common/footGuide"
Vue.component("FootGuide",footGuide)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
