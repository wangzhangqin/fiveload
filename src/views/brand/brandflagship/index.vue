<template>
    <div class="brand_flagship">
        <div class="detail"></div>
        <div></div>
        <img src="http://img550.5lux.com.cn/2016/11/09/ef/147869459952_750x1000.jpg" class="bg-img">
        <div style="width:100%">
            <!-- <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in img" :key="index">
                        <a href="">
                            <img :src="item.page_thumb" alt="">
                            <div class="content">
                                <div class="name">{{item.title}}</div>
                                <div class="count">{{item.collect_count}}关注者</div>
                            </div>
                            </a>
                        </div>
                    <div class="swiper-pagination"></div>


            </div> -->
    
        <div class="swiper-pagination"></div>
    </div>

        </div>
   <!--  </div> -->
</template>
<script>
import Vuex from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  /* created() {
        this.getData();
    },
    methods: {
        ...Vuex.mapActions({
            getData : "brand/getActionsImg"
        })
    },
    computed: {
        ...Vuex.mapState({
            img : state=>state.brand.img
        })
    },
    mounted() {
        this.swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop : true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      }
    });

    }, */
};
</script>
<style lang="scss" scoped>
.brand_flagship,
.brand_flagship .detail {
  display: flex;
  justify-content: center;
  align-items: center;
}
.brand_flagship {
  position: fixed;
  left: 0;
  bottom: 0;
  background: #ccc;
  width: 100%;
  background-size: 100% 100%;
  overflow: hidden;
  top: 0.88rem;
  .bg-img {
    position: absolute;
    z-index: 1;
    filter: blur(10px);
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
}
.brand_flagship .swiper-wrapper .swiper-slide a {
  margin: 7%;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: block;
  height: 9.8rem;
  border: 2px solid #ccc;
  .content {
    height: 1.2rem;
    background: #fff;
    line-height: 1.2rem;
    overflow: hidden;
    .name {
      display: inline-block;
      font-size: 0.3rem;
      color: #333;
      margin-left: 0.3rem;
      float: left;
    }
    .count {
      display: inline-block;
      height: 0.4rem;
      background: #999;
      line-height: 0.4rem;
      padding: 0 0.1rem;
      color: #fff;
      border-radius: 0.16rem;
      float: right;
      font-size: 0.24rem;
      margin: 0.4rem 0.6rem;
    }
  }
}
.swiper-container {
  background: #fff;
}
.swiper-container .swiper-wrapper .swiper-slide a img {
  vertical-align: top;
  width: 100%;
}
</style>
