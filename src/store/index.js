import Vue from 'vue'
import Vuex from 'vuex'
import home from "./home"
import search from "./search"
import brand from "./brand"
import sales from "./sales"
import overseas from "./overseas"
import good from "./good"
import cart from "./cart"
import warthbuy from "./warthbuy"
import video from "./video"

Vue.use(Vuex)

export default new Vuex.Store({
  modules : {
    home,
    search,
    brand,
    sales,
    overseas,
    good,
    cart,
    warthbuy,
    video
  }
})
