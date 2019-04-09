<template>
<div style="height:100%;position:relative">
    <div>
        <div class="ios">
            <div class="sticky">
                <Header search="search" isDoor="true"></Header>
                <ul class="nav_title" v-if="this.$store.state.home.flag">
                  <routerLink tag="li" to="/sales">
                    <a href="javascript:;">上新</a>
                  </routerLink>
                  <routerLink tag="li" to="/overseas">
                    <a href="javascript:;">还外馆</a>
                  </routerLink>
                  <routerLink tag="li" to="/warthbuy">
                    <a href="javascript:;">闪购</a>
                  </routerLink>
                  <routerLink tag="li" to="/brand">
                    <a href="javascript:;">品牌</a>
                  </routerLink>
                  <routerLink tag="li" to="/video">
                    <a href="javascript:;">专柜自提</a>
                  </routerLink>
                </ul>
            </div>
        </div>
    </div>
    <BScroll ref="bscroll">
    <div class="home">   
        <div class="home-wrap">  
            
            <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="http://img550.5lux.com.cn/2019/04/03/ij/155425675933_750x825.jpg" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="http://img550.5lux.com.cn/2019/03/18/de/155287819131_750x825.jpg" alt="">
                  </div>
                  <div class="swiper-slide">
                    <img src="http://img550.5lux.com.cn/2019/03/19/qr/155298262546_750x825.jpg" alt="">
                  </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
            <div class="fun-nav" ref="funnav">
                <ul>
                    <li 
                    v-for="(item,index) in buttonArr" 
                    :key="index"
                    :style="[{backgroundImage:'url('+item.ad_code+')'},{width:'20%'}]">
                    <a href="javascript:;">{{item.ad_name}}</a>
                    </li>
                </ul>
            </div>
            <div class="adv1">
                <ul class="adv1-wrapper">
                    <li class="adv1-item mar1" v-for="(item,index) in cloumnArr" :key="index">
                        <a :href="item.ad_link">
                            <img :src="item.ad_code" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="new-register">
                    <a href="javascript:;">
                        <!-- <img src="http://img550.5lux.com.cn/2019/04/01/mn/155408398327_750x586.jpg" alt=""> -->
                        <img :src="newRigster.ad_code" alt="">
                        
                    </a>
                </div>
                <div class="new-register">
                    <a href="javascript:;">
                        <img :src="vipOne.ad_code" alt="">
                    </a>
                    <div class="register-new">
                        <ul class="register-wrapper">
                            <li class="register-item" v-for="(item,index) in vipOther" :key="index">
                                <a href="">
                                    <img :src="item.ad_code" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="new-register">
                    <a href="javascript:;">
                        <img :src="newSeason.ad_code" alt="">
                    </a>
                </div>
               <div class="new-register">
                    <a href="javascript:;">
                        <img :src="buyList.ad_code" alt="">
                    </a>
                </div>


                 <div class="new-register new-register-hook" v-for="(item,index) in articleList" :key="index">
                    <a href="javascript:;" class="article-link">
                        <div class="img-wrapp">
                            <img :src="item.data.ad_code" alt="">
                        </div>
                        <div class="article-wrapper">
                            <strong class="name">
                                {{item.data.ad_name}}
                            </strong>
                            <p class="detail">{{item.data.ad_title}}</p>
                        </div>
                    </a>
                    <div class="clearscroll" v-if="item.isPro">
                     
                        <div class="ul-wrapper">
                           <BScroll isHor="true">
                            <ul class="ul-item">
                                <li class="item" v-for="(it,idx) in item.data.product_info" :key="idx" @click="handleClick(it.product_id)">
                                    <a href="javascript:;" class="jump-wrap">
                                        <div class="img">
                                            <img :src="it.product_thumb" style="width:100%;height:100%">
                                        </div>
                                        <p class="name">{{it.ad_title}}</p>
                                        <p class="pric">{{it.ad_subtitle}}</p>
                                    </a>
                                </li>
                                
                            </ul>
                            </BScroll>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </BScroll>
    </div>
</template>
<script>
import Vuex from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { setTimeout } from "timers";
export default {
  created() {
    this.getColumn();
    this.getSlider();
    this.getButton();
    this.getOtherAdvert();
  },

  computed: {
    ...Vuex.mapState({
      cloumnArr: state => state.home.columnArr,
      sliderArr: state => state.home.sliderArr,
      buttonArr: state => state.home.buttonArr,
      newRigster: state => state.home.newRigster,
      vipOne: state => state.home.vipOne,
      vipOther: state => state.home.vipOther,
      newSeason: state => state.home.newSeason,
      buyList: state => state.home.buyList,
      articleList: state => state.home.articleList
    })
  },
  methods: {
    ...Vuex.mapActions({
      getColumn: "home/getActionsColumn",
      getSlider: "home/getActionsSlider",
      getButton: "home/getActionsButton",
      getOtherAdvert: "home/getActionsAdvert"
    }),
    handleClick(id){
      console.log(id)
            this.$store.dispatch("brand/handleToId",id);
            this.$router.push("/good/gooddetail")
        },
  },
  mounted() {
    this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
        
        loop: true, // 循环模式选项
        autoplay: {
          disableOnInteraction: false,
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
      });
    });
  }
};
</script>
<style lang="scss" scoped>
.ios {
  height: 0.88rem;
  position: sticky;
  top: 0;
  z-index: 999;
  .sticky {
    position: relative;
    z-index: 999;
    .nav_title {
      height: 0.78rem;
      background: #fff;
      display: flex;
      li {
        flex: 1;
        height: 100%;
        display: flex;
        color: #999;
        font-size: 0.3rem;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
.home {
  background: #f2f2f2;
  padding-top: -0.88rem;
  width: 100%;
  padding-bottom: 0.96rem;
  .home-wrapper {
    height: 100%;
  }
  .swiper-container {
    background: #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.swiper-container{
  width: 100%;
  height: 8.25rem;
}
.fun-nav {
  position: relative;
  height: 1.5rem;
  ul {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    li {
      float: left;
      height: 100%;
      font-size: 0.24rem;
      background-size: 30% 30%;
      background-repeat: no-repeat;
      background-position: center 32%;
      a {
        width: 100%;
        height: 100%;
        padding-top: 63%;
        display: block;
        text-align: center;
      }
    }
  }
}
.adv1 {
  width: 100%;
  margin-bottom: 0.06rem;
  overflow: hidden;
}
.adv1 .adv1-wrapper .adv1-item {
  float: left;
  margin-bottom: 0.14rem;
  width: 3.68rem;
}
.adv1 .adv1-wrapper .mar1 {
  margin-right: 0.07rem;
}
.adv1 .adv1-wrapper .mar2 {
  margin-left: 0.07rem;
}
.adv1 .adv1-wrapper .adv1-item img {
  width: 100%;
  vertical-align: top;
}
.content .new-register {
  margin-bottom: 0.2rem;
  position: relative;
  .register-new {
    padding: 0.2rem 0.07rem;
    background: #fff;
    .register-wrapper {
      overflow: hidden;
      .register-item {
        padding: 0 0.07rem;
        float: left;
        widows: 1.7rem;
        a {
          display: block;
          img {
            width: 100%;
            vertical-align: top;
          }
        }
      }
    }
  }
  .article-link .article-wrapper {
    text-align: left;
    padding: 0.36rem 0.4rem 0.4rem;
    background: #fff;
    .name {
      font-weight: 700;
      display: block;
      font-size: 0.28rem;
      color: #333;
      height: 0.36rem;
      line-height: 0.36rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 0.36rem;
    }
    .detail {
      font-size: 0.24rem;
      line-height: 0.36rem;
      color: #999;
      height: 0.68rem;
      overflow: hidden;
    }
  }
  .clearscroll {
    position: relative;
    height: 3.56rem;
    background: #fff;
    .ul-wrapper {
      padding: 0.4rem 0.2rem;
      background: #fff;
      .ul-item {
        display: flex;
        width: max-content;
        .item {
          width: 3rem;
          padding: 0 0.2rem;
          .jump-wrap {
            display: flex;
            align-items: center;
            flex-direction: column;
            .img {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 2.6rem;
              width: 2.6rem;
            }
            .name {
              font-size: 0.26rem;
              padding: 0.2rem 0 0.1rem;
              color: #333;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .price {
              font-size: 0.24rem;
              color: #999;
            }
          }
        }
      }
    }
  }
}
.content .new-register a {
  display: block;
  img {
    width: 100%;
    vertical-align: top;
  }
}
</style>
