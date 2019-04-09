<template>
    <div class="goodsdetailwrapper">
        <div class="tab-bore">
            <div class="goodsdetail-top">
                <div class="back" @click="back">
                    <i class="iconfont">&#xe62c;</i>
                </div>
            </div>
        </div>
        <div class="redcardbg" v-if="flag" @click="flag=false"></div>
       <!--  <transition name="fade">
            <div class="huodong" v-if="flag">
            <div class="cowp">
                <ul>
                    <li v-for="(item,index) in para" :key="index">{{item}}</li>
                    
                </ul>
            </div>
            <div class="title">
                <span>商品参数</span>
                <i class="iconfont close">&#xe62c;</i>
            </div>
            <div class="ok">确定</div>
        </div>
        </transition> -->
       
            <div :class="flag?'productParm move':'productParm'">
                <div class="ptcon">
                    <div>
                        <ul>
                            <li class="pt_list" v-for="(item,index) in sku" :key="index">
                                <div class="pt_list_tt">{{item.attr_name}}</div>
                                <ul class="pt_list_con">
                                    <li class="pt_list_item" v-for="(it,idx) in item.attr_val" :key="idx" :class="!it.is?'ptsel':''">
                                        {{it.attr_value}}
                                    </li>
                                </ul>
                            </li>
                            <!-- <li class="pt_list">
                                <div class="pt_list_tt">颜色</div>
                                <ul class="pt_list_con">
                                    <li class="pt_list_item ptsel">
                                        146
                                    </li>
                                </ul>
                            </li> -->
                        </ul>
                        <div class="pt_list_num">
                            <div class="title">数量</div>
                            <div class="numbtn">
                                <span class="action" @click="handleReduce">-</span>
                                <span class="detail_num action">{{goodInfo.status}}</span>
                                <span class="action" @click="handleAdd">+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pttitle">
                    <div class="ptimg">
                        <img :src="goodInfo.thumb" alt="">
                    </div>
                    <div class="titleright">
                        <div class="name">{{goodInfo.sku_title}}</div>
                        <div class="price">￥{{goodInfo.show_price}} x {{goodInfo.status}}</div>
                        <div class="regular">
                            <span v-for="(item,index) in cSku" :key="index">{{item.attr_name}}:{{item.attr_val}}</span>
                        </div>
                    </div>
                </div>
                <div class="ptbtn" @click="handleToCart({id:pid,num:goodInfo.status})">加入购物袋</div>
            </div>
        
        <div class="banner-wrapper">
            <div class="banner">
                    <div style="width:100%;height:100%">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                                    <img :src="item.filepath">
                                </div>
                                <!-- <div class="swiper-slide" >
                                    <img src="http://img550.5lux.com.cn/2018/04/30/tu/152506212838_387x490.JPG">
                                </div>
                                <div class="swiper-slide" >
                                    <img src="http://img550.5lux.com.cn/2018/04/30/np/152506212932_387x490.JPG">
                                </div> -->
                            </div>
                            <!-- 如果需要分页器 -->
                            <div class="swiper-pagination"></div>
                            
                            <!-- 如果需要导航按钮 -->
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                            
                            <!-- 如果需要滚动条 -->
                            <div class="swiper-scrollbar"></div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="extra-wrapper">
            <div class="extra" >
                <div class="conl">
                    <div class="price">
                        <span style="font-size:0.24rem">￥</span>
                        {{info.product_price}}
                    </div>
                    <div class="oldPrice">{{info.market_price}}</div>
                    <div class="note">
                        <span>红卡价</span>
                    </div>
                </div>
            </div>
            <div class="tax">税费说明？</div>
        </div>
        <div class="title-wrapper">
            <div class="detail">
                
			{{info.sku_title}}
		
            </div>
            <div class="pre">
                <i class="iconfont">&#xe71a;</i>
                <span class="cont">{{info.send_time_name}}</span>
                <span class="underline"></span>
            </div>
        </div>
        <div class="premote">
            <div class="cost">
                <div class="cost_con">
                    <div class="low">
                        <span class="left">分期支付</span>
                        <span class="center">{{installment}}</span>
                    </div>
                </div>
            </div>
            <div class="cost"></div>
            <div class="cost">
                <div class="cost_con">
                    <div class="moreboder">

                    </div>
                    <div class="spourt">
                        <ul class="spourt_wrapper">
                            <li class="spourt_list" v-for="(item,index) in service" :key="index">
                                <span class="logo"></span>
                                <span class="title">{{item.name}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="arg">
            <div class="argborder">
                <div class="list" @click="flag=true">
                    <span class="list_left">产品参数</span>
                    <i class="iconfont list_right">&#xe621;</i>
                </div>
                <div class="list">
                    <span class="list_left">选择：颜色/尺码</span>
                    <i class="iconfont list_right">&#xe621;</i>
                </div>
            </div>
        </div>
        <div class="btm">
            <a href="" class="kefy span">
                <span class="lg">
                    <i class="iconfont">&#xe629;</i>
                    <span class="text1">客服</span>
                </span>
            </a>
            <a href="#/cart" class="gouwu span">
                <span class="lg">
                    <i class="iconfont">&#xe899;</i>
                    <span class="text1">购物袋</span>
                </span>
            </a>
            <span class="wudai span" @touchstart="handleInfo">加入购物袋</span>
            <span class="goum span">立即购买</span>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Vuex from "vuex"
import { stat } from 'fs';
export default {
    data() {
        return {
            flag : false
        }
    },
    activated() {
        this.getData(this.$store.state.brand.goodId);
    },
    computed: {
        ...Vuex.mapState({
            banner : state=>state.good.banner,
            info : state=>state.good.info,
            service : state=>state.good.service,
            installment : state=>state.good.install,
            para :state=>state.good.para,
            proNum : state=>state.good.productNum,
            sku : state=>state.good.allSku,
            goodInfo : state=>state.good.goodInfo,
            cSku : state=>state.good.curSku,
            pid : state=>state.good.pid
        })
    },
    methods: {
        ...Vuex.mapActions({
            getData : "good/handleActionsData",
            handleToCart : "good/handleActionToCart"
        }),
        ...Vuex.mapMutations({
            handleAdd : "good/handleMuAdd",
            handleReduce : "good/handleMuReduce"
        }),
        handleInfo(){
            console.log(111)
            this.$store.dispatch("good/handleActionGoodInfo",this.$store.state.brand.goodId);
            this.flag = true;
        },
        back(){
            this.$router.back();
        }
    },
    mounted() {
    this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
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
}
</script>
<style lang="scss" scoped>
.swiper-container{
    height: 100%;
    img{
        vertical-align: top
    }
}
.box{
    width: 100%;
    height: 8rem;
    background: pink;
    img{
        display: flex;
       
    }
}
.huodong{
    transition: all .3s linear;
}
.productParm{
    position: fixed;
    height: 9.6rem;
    bottom: -11rem;
    left: 0;
    width: 100%;
    z-index: 3;
    transition: all .3s linear;
    background: #fafafa;
    .ptcon{
        position: absolute;
        top: 1.8rem;
        bottom: 1rem;
        left: .3rem;
        background: #fafafa;
        width: 100%;
        overflow: hidden;
        opacity: .95;
        .pt_list{
            min-height:1.7rem;
            text-align: left;
            position: relative;
            .pt_list_tt{
                font-size:.28rem;
                color:#333;
                padding: .32rem 0 .2rem;
            }
            .pt_list_con{
                display: flex;
                width: calc(100% - 15px);
                flex-wrap: wrap;
                justify-content: left;
                .ptsel{
                    background: #fff;
                    border: 2px solid #9b885f;
                    color:#9b885f;
                    position: relative;
                };
                .pt_list_item{
                    font-size: .24rem;
                    width: 1.24rem;
                    margin-right: .2rem;
                    height: .6rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 8px;
                    margin-bottom: .3rem;
                };
                .ptsel:after{
                    position: absolute;
                    right: -0.2rem;
                    top:-0.2rem;
                    content:"";
                    border:20px solid transparent;
                    display: inline-block;
                    border-bottom-color: #9b885f;
                    transform: rotate(45deg);
                }
            }
        };
        .pt_list_num{
            .title{
                font-size:.28rem;
                color:#333;
                padding-top:.32rem;
                padding-bottom:.2rem;
                text-align: left;
            };
            .numbtn{
                text-align: left;
                display: flex;
                .action{
                    display: inline-block;
                    width: .6rem;
                    height: .6rem;
                    display: flex;
                    justify-content: center;
                    align-items:center;
                    border: 2px solid #ccc;
                    font-size:.3rem; 
                };
                .detail_num{
                    width: 1rem;
                }
            }
        }
    }
    .pttitle{
        height: 1.8rem;
        color:#ccc;
        background: #fff;
        position: absolute;
        top: 0;
        left:0;
        width:100%;
        .ptimg{
            width: 2rem;
            height: 2rem;
            position: absolute;
            border: 2px solid #ccc;
            left: .3rem;
            bottom: .3rem;
            display: flex;
            justify-content: center;
            background: #fff;
            img{
                width: 100%;
                height:100%;
            }
        }
        .titleright{
            position: absolute;
            text-align: left;
            left: 2.5rem;
            right:.9rem;
            height: 100;
            .name{
                font-size: .24rem;
                color:#333;
                padding: .3rem 0 .13rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            };
            .price{
                font-size:.26rem;
                color:#9b885f;
                padding-bottom: .26rem;
            };
            .regular{
                color:#999;
                font-size:.24rem;
            }
        }
    }
    .ptbtn{
        position: absolute;
        bottom:0;
        left:0;
        background: #9b885f;
        height: 1rem;
        line-height: 1rem;
        width: 100%;
        color:#fff;
        font-size: .32rem;
    }
}
.move{
    transform: translateY(-11rem)
}
.goodsdetailwrapper{
    position: relative;
    background: #f2f2f2;
    height: 100%;
    border-bottom: 1px solid #fff;
    z-index: 2;
    overflow: auto;
    padding-bottom: 0.88rem;
    .tab-bore{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2;
        .goodsdetail-top{
            height: 0.88reml;
            position: relative;
            .back{
                position: fixed;
                top: .2rem;
                left : .2rem;
                width: .6rem;
                height: .6rem;
                border-radius: 100%;
                background: #999;
                display: flex;
                align-items: center;
                justify-content: center;
                i{
                    font-size:.4rem;
                    color : #fff;
                }
            }
        }
    };
    .redcardbg{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width:100%;
        background: #000;
        opacity: .5;
        z-index: 3;
    };
    .huodong{
        position: fixed;
        z-index : 5;
        width: 100%;
        background: #fff;
        margin-top: 88.2%;
        left: 0;
        top: 0;
        bottom: 0;
        .title{
            position: absolute;
            top: 0;
            left: 0;
            width:100%;
            height: 1rem;
            font-size:.32rem;
            color:#333;
            display: flex;
            justify-content: center;
            align-items: center;
            i{
                font-size: .4rem;
                position: absolute;
                right:.2rem;
                top: .35rem;
            }
        };
        .ok{
            position: absolute;
            bottom:0;
            left:0;
            background: #9b885f;
            height: 1rem;
            line-height: 1rem;
            width: 100%;
            color:#fff;
            font-size: .32rem;
        };
        .cowp{
            position: absolute;
            overflow: hidden;
            top: 1rem;
            bottom: 1rem;
            left: .3rem;
            right: 0;
            li{
                height: .88rem;
            }
        }
    };
    .banner-wrapper{
        position: relative;
        height: 0;
        width: 100%;
        padding-bottom: 100%;
        background: #fff;
        .banner{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            img{
                height: 100%;
                vertical-align: top;
            }
        }
    };
    .extra-wrapper{
        background: #fff;
        .extra{
            height: 0.98rem;
            padding: 0.4rem 0 0.1rem;
            margin: 0 0.3rem;
            background: #fff;
            font-size: 0;
            .conl{
                text-align: left;
                .price{
                    display: inline-block;
                    font-size: 0.48rem;
                    color: #9b885f;
                    margin-right: 0.1rem;
                };
                .oldPrice{
                    font-size: 0.26rem;
                    display: inline-block;
                    text-decoration: line-through;
                    color: #999;
                    margin-right: 0.1rem;
                };
                .note{
                    font-size: 0.22rem;
                    color: #9b885f;
                    display: inline-block;
                    border: 1px solid #9b885f;
                    margin: 0 0.1rem;
                    padding: 0 0.1rem;
                    height: 0.32rem;
                    line-height: 0.32rem;
                    vertical-align: bottom;
                    span{
                        vertical-align: top;
                    }
                }
            }
        };
        .tax{
            height: 0.6rem;
            font-size: 0.28rem;
            text-align: left;
            line-height: 0.6rem;
            margin: 0 0.3rem;
            width: 92%;
            color: #999;
            position: relative;
        }
    };
    .title-wrapper{
        background: #fff;
        padding: 0.3rem 0.3rem 0.2rem;
        margin-bottom: 0.2rem;
        .detail{
            line-height: 0.42rem;
            font-size: 0.3rem;
            text-align: left
        };
        .pre{
            font-size: 0.2rem;
            height: 0.42rem;
            line-height: 0.42rem;
            color: #999;
            text-align: left;
            i{
                font-size: 0.26rem;
                margin-right: .16rem;
            }
            .cont{
                vertical-align: middle
            };
            .underline{
                text-decoration: underline;
                color: #c8a985;
            }
        }
    };
    .premote{
        background: #fff;
        margin-bottom: 0.2rem;
        .cost{
            margin-left: .3rem;
            position: relative;
            text-align: left;
            padding: 0.15rem 0;
            .cost_con{
                position: relative;
                .low{
                    display: flex;
                    padding: 0.15rem 0;
                    overflow: hidden;
                    line-height: 0.28rem;
                    align-items: center;
                    .left{
                        height: 0.28rem;
                        border-radius: 4px;
                        font-size: 0.22rem;
                        color: #fff;
                        border: 2px solid #9b885f;
                        background-color: #9b885f;
                        vertical-align: middle;
                        padding: 0 0.1rem;
                        margin-right: 0.2rem;
                        display: flex;
                        align-items: center;
                    };
                    .center{
                        font-size: 0.26rem;
                        height: 0.28rem;
                        color: #333;
                        display: inline-block;
                        width: 70%;
                        vertical-align: middle;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            };
            .spourt{
                width: 85%;
                padding-top: 0.2rem;
                .spourt_wrapper{
                    overflow: hidden;
                    max-height: 0.92rem;
                    .spourt_list{
                        float: left;
                        padding-bottom: 0.2rem;
                        padding-right: 0.2rem;
                    }
                }
            }
        }
    };
    .arg{
        background: #fff;
        margin-bottom: 0.2rem;
        .argborder{
            margin-left: 0.3rem;
            .list{
                display: flex;
                height: 0.88rem;
                font-size: 0.28rem;
                color:#333;
                position: relative;
                justify-content: space-between;
                align-items: center;
            };
            i{
                font-size: .4rem;
            }
        }
    };
    .btm{
        height: 1rem;
        background: #fff;
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        .kefy,.gouwu{
            width: 1.12rem;
            border: 2px solid #ccc;
            border-right: none;
            
        };
        .span{
                display: flex;
                height: 100%;
                position: relative;
                justify-content: center;
                align-items: center;
                .lg{
                    text-align: center;
                    width: 100%;
                    height: 100%;
                    i{
                        font-size: .5rem;
                    };
                    .text1{
                        display: block;
                        margin-top: 0.1rem;
                        color: #666;
                        font-size: 0.22rem;
                        width: 100%;
                        height: auto;
                    }
                    
                }
            }
    }
}
.btm .wudai{
    background: #ccb27f
}
.btm .goum{
    background: #9b885f
}
.btm .wudai,.btm .goum{
    flex: 1;
    font-size: 0.32rem;
    color :#fff
}
</style>

