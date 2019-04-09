<template>
    <div class="detailwarppers">
        <!-- <transition name="fade">
            <div class="fixed" v-if="flag"></div>
        </transition> -->
        <Brandtip title="news" top="upnews" isBrand="false">
        <div class="text" slot="new">
            {{name}}
        </div>
        </Brandtip>
        <div class="srccontent">
            <ul class="tabtop">
                <li class="item">
                    <span class="text">综合</span>
                    <span class="down"></span>
                </li>
                <li class="item">
                    <span class="text">分类</span>
                </li>
                <li class="item">
                    <span class="text">筛选</span>
                    <span class="down"></span>
                </li>
                <transition name="showlist">
                    <div class="zonewrapper" v-if="false">
                        <ul class="zone">
                            <li class="zonelist">
                                <span class="text">综合</span>
                            </li>
                            <li class="zonelist">
                                <span class="text">销量优先</span>
                            </li>
                            <li class="zonelist">
                                <span class="text">价格从高到低</span>
                            </li>
                            <li class="zonelist">
                                <span class="text">价格从低到高</span>
                            </li>
                            <li class="zonelist">
                                <span class="text">新品优先</span>
                            </li>
                             <li class="zonelist">
                                <span class="text">人气优先</span>
                            </li>
                        </ul>
                    </div>
                </transition>
            </ul>
            
        </div>
        <div class="good-list">
            <BScroll>
            <ul class="goodlist-wrapper">
                <li class="item" v-for="(item,index) in goodsList" :key="index" @touchstart="handleClick(item.product_id)">
                    <div class="img">
                        <img v-lazy="item.big_thumb" alt="">
                    </div>
                    <div class="content">
                        <p class="content-name">
								{{item.brand_enname}}
						</p>
                        <p class="name">{{item.brand_cnname}}</p>
                        <div class="price-wrap">
                            <span class="price">{{item.product_price}}</span>
                            <span class="old-price">{{item.market_price}}</span>
                        </div>
                    </div>
                </li>
                
            </ul>
            </BScroll>
        </div>
    </div>
    
</template>
<script>
import Brandtip from "@/common/header/brandtip.vue"
import Vuex from "vuex"
import { stat } from 'fs';
export default {
    created() {
        this.$emit("detail",false);
        this.getDetail(this.$route.params.id)
    },
    computed: {
        ...Vuex.mapState({
            goodsList : state=>state.brand.detailGoods,
            name : state => state.brand.goodName
        })
    },
    components : {
        Brandtip
    },
    methods: {
        ...Vuex.mapActions({
            getDetail : "brand/getActionsDetail",
            handleClick : "brand/handleGoodId"
        }),
        handleClick(id){
            this.$store.dispatch("brand/handleToId",id);
            this.$router.push("/good/gooddetail")
        }
    },
}
</script>
<style lang="scss" scoped>
.detailwarppers{
    .fixed{
        background-color: #000;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 2;
        opacity: .6
    }
    .search-head{
        background: #fff;
    };
    .srccontent{
        height: 0.78rem;
        position: fixed;
        left: 0;
        top: 0.88rem;
        z-index: 5;
        .tabtop{
            display: flex;
            position: fixed;
            left: 0;
            width: 100%;
            height: 0.78rem;
            background: #fff;
            z-index: 6;
            border-top: 2px solid #ccc;
            border-bottom: 2px solid #ccc;
            .item{
                height: 100%;
                flex: 1;
                .text{
                    font-size: 28px;
                    height: 100%;
                    line-height: 0.78rem;
                    display: inline-block;
                    margin-right: 0.12rem;
                };
                .down{
                    display: inline-block;
                    width: 0;
                    height: 0;
                    border : 0.08rem solid #333333;
                    border-left-color: transparent; 
                    border-right-color: transparent; 
                    border-bottom-color: transparent; 
                }
            };
            .zonewrapper{
                position: absolute;
                top: 0.68rem;
                left: 0;
                background: #fff;
                width: 100%;
                .zone{
                    padding: 0.12rem 0.54rem;
                    .zonelist{
                        height: 0.72rem;
                        display: flex;
                        align-items: center;
                        font-size: 28px;
                        .text{
                            color: #999;
                            text-align: left;
                        }
                    }
                }
            }
        }
        
    }
    .good-list{
        margin-top: 1.66rem;
        position: relative;
        .goodlist-wrapper{
            margin-top: 1.66rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .item{
                overflow: hidden;
                background: #fff;
                margin: 0 2px 2px;
                width: 49%;
                .img{
                    width: 100%;
                    padding-top: 0.1rem;
                    img{
                        width: 80%;
                        height: auto;
                        margin: 0 auto
                    }
                };
                .content{
                    margin: 0.4rem 0.3rem 0.6rem;
                    text-align: left;
                    font-weight: 400;
                    p{
                        text-align: center
                    };
                    .content-name{
                        font-size: 26px;
                        line-height: 0.3rem;
                        color: #333;
                        margin-bottom: 0.12rem;
                    };
                    .price-wrap{
                        text-align: center;
                        height: 0.24rem;
                        .price{
                            font-size: 0.24rem;
                            color:#9b885f;
                        };
                        .price-old{
                            font-size: 0.24rem;
                            color: #999;
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
    }
}
</style>
