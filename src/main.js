import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store/index'
import header from "@/common/header"
Vue.component("Header",header)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
