<template>
    <div class="nav">
        <BrandTip title="news" top="upnews" >
        <div class="text" slot="new">
            海外馆
        </div>
        </BrandTip>
        <div>
            <div class="overseas">
                <div class="chaoliu">
                    <a href="javascript:;">
                        <div class="text">
                            <p class="morebrands">MORE BRANDS</p>
                            <p class="title">全球潮流品牌</p>
                        </div>
                        <img src="http://img550.5lux.com.cn/2017/07/07/qr/149940647718_750x320.jpg" alt="">
                    </a>
                </div>
                <div class="kondif">
                    <ul class="kind-wrapper">
                        <li class="kind-list" v-for="(item,index) in data" :key="index">
                            <a href="javascript">
                                <img :src="item.ad_code" alt="">
                                <p style="font-size:32px">{{item.ad_name}}</p>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div class="top100">
                    <a href="javascript:;">
                        <div class="text"></div>
                        <img src="http://img550.5lux.com.cn/2017/07/28/de/150122727058_750x421.jpg" style="width:100%">
                    </a>
                    <ul class="good-list-wrapper">
                        <li class="good-list"></li>
                    </ul>
                </div>
                <div class="fashion">
                    <div class="top">
                        <div class="top-left"></div>
                        <div class="top-text">正在流行</div>
                        <a href="javascript:;" class="top-right"></a>
                    </div>
                </div>
                <div class="fashion top100">
                    <div class="top">
                        <div class="top-left"></div>
                        <div class="top-text">潮流大师</div>
                        <a href="javascript:;" class="top-right"></a>
                    </div>
                    <a href="javascript:;" class="banner">
                        <img src="http://img550.5lux.com.cn/2017/07/07/ij/149940786287_750x370.jpg" alt="">
                    </a>
                    <ul class="good-list-wrapper">
                        <li class="good-list">

                        </li>
                    </ul>
                </div>
                <div class="fashion remai">
                    <div class="top">
                        <div class="top-left"></div>
                        <div class="top-text">大牌热卖</div>
                        <a href="javascript:;" class="top-right"></a>
                    </div>
                    <ul class="list-wrapper">
                        <li class="list" v-for="(item,index) in hot" :key="index">
                            <a href="javascript">
                                <img :src="item.ad_code" alt="">
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BrandTip from "@/common/header/brandtip"
import Vuex from "vuex"
export default {
    created() {
        this.getData();
    },
    components : {
        BrandTip
    },
    computed: {
        ...Vuex.mapState({
            data : state=>state.overseas.proList,
            hot : state=>state.overseas.hot
        })
    },
    methods: {
        ...Vuex.mapActions({
            getData : "overseas/handleActionGetdata"
        })
    },
}
</script>
<style lang="scss" scoped>
.nav{
    height: 100%;
    overflow: auto;
}
.overseas{
    position: relative;
    background: #f2f2f2;
    margin-top: 0.88rem;
    width: 100%;
    bottom: 0;
    z-index: 5;
    .chaoliu{
        a{
            position: relative;
            display: block;
            overflow: hidden;
            img{
                width: 100%;
                vertical-align: top;
            };
            .text{
                position: relative;
                .morebrands{
                    font-size: 0.48rem;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    width: 100%;
                    margin-top: 14%;
                    text-shadow: 0 0 5px #000;
                }
                .title{
                    font-size: 0.36rem;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    width: 100%;
                    margin-top: 24%;
                    text-shadow: 0 0 5px #000;
                    
                }
            }
        }
    };
    .kondif{
        .kind-wrapper{
            overflow: hidden;
            .kind-list{
                width: 25%;
                padding: 0.2rem 0.13rem;
                float: left;
                background: #fff;
                border: 1px solid #e5e5e5;
                border-left: none;
                border-top: none;
                img{
                    height: 1.495rem;
                }
            }
        }
    };
    .top100{
        margin-bottom: 0.2rem;
        .good-list-wrapper{
            overflow: hidden;
            background: #fff;
            .good-list{
                float: left;
                width: 33.33333%;
                padding: 0.2rem 0;
                position: relative;
            }
        }
    };
    .fashion{
        margin-bottom: 0.2rem;
        background: #fff;
        .top{
            height: 0.72rem;
            text-align: left;
            align-items: center;
            .top-left{
                width: 0.06rem;
                height: 0.44rem;
                margin: 0.14rem 0;
                background: #9b885f;
                display: inline-block;
            };
            .top-text{
                color: #333;
                margin-left: 0.3rem;
                font-size: 0.28rem;
                display: inline-block;
                vertical-align: top;
                height: 0.72rem;
                line-height: 0.72rem;
            }
        };
        .banner{
            display: block;
            position: relative;
            img{
                width: 100%;
                vertical-align: top;
            }
        }
    };
    .remai{
        .list-wrapper{
            overflow: hidden;
            .list{
                width: 50%;
                float: left;
                a{
                    img{
                        width: 100%;
                        vertical-align: top;
                        border:2px solid #fff;
                        border-top: none
                    }
                }
            }
        }
    }
}
</style>
