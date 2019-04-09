<template>
    <div class="detailwarppers">

        <div class="fixed" v-show="flag" @click="flag = false"></div>
        <div class="fenlei" v-show="fenlei" @click="fenlei = false"></div>
        <div class="con" v-show="fenlei">
            <div style="height:100%">
                <div class="typewrapper">
                    <BScroll>
                    <ul class="typecon">
                        <li class="typelist" v-for="(item,index) in cate" :key="index">
                            <div class="list_title">
                                <span class="text">{{item.pname}}</span>
                                <i class="iconfont" @click="hide=!hide">&#xe695;</i>
                            </div>
                            <ul class="list_con">
                                <li class="list_item" v-for="(it,idx) in item.children_name" :key="idx">{{it}}</li>
                            </ul>
                        </li>
                    </ul>
                     </BScroll>
                </div>
            </div>
        </div>
        <Brandtip title="news" top="upnews" isBrand="false">
        <div class="text" slot="new">
            {{name}}
        </div>
        </Brandtip>
        <div class="srccontent">
            <ul class="tabtop">
                <li class="item" @click="flag = !flag">
                    <span class="text">综合</span>
                    <span class="down"></span>
                </li>
                <li class="item">
                    <span class="text" @click="fenlei=true">分类</span>
                </li>
                <li class="item">
                    <span class="text">筛选</span>
                    <span class="down"></span>
                </li>
                
                    <div class="zonewrapper" :class="flag?'move':''">
                        <ul class="zone">
                            <li class="zonelist">
                                <span class="text">综合</span>
                            </li>
                            <li class="zonelist">
                                <span class="text" @click="getDataBy({sort:'salesnum'})">销量优先</span>
                            </li>
                            <li class="zonelist">
                                <span class="text" @click="getDataBy({sort:'product_price',order:'DESC'})">价格从高到低</span>
                            </li>
                            <li class="zonelist">
                                <span class="text"  @click="getDataBy({sort:'product_price',order:'ASC'})">价格从低到高</span>
                            </li>
                            <li class="zonelist">
                                <span class="text" @click="getDataBy({sort:'inputtime'})">新品优先</span>
                            </li>
                             <li class="zonelist">
                                <span class="text" @click="getDataBy({sort:'super_number'})">人气优先</span>
                            </li>
                        </ul>
                    </div>
                
            </ul>
            
        </div>
        <div class="good-list">
            <BScroll>
            <ul class="goodlist-wrapper">
                <li class="item" v-for="(item,index) in goodsList" :key="index" @click="handleClick(item.product_id)">
                    <div class="img">
                        <img :src="item.big_thumb" alt="">
                    </div>
                    <div class="content">
                        <p class="content-name">
								{{item.brand_enname}}
						</p>
                        <p class="name">{{item.brand_cnname}}</p>
                        <div class="price-wrap">
                            <span class="price">{{item.product_price | toPrice}}</span>
                            <span class="old-price">{{item.market_price | toPrice}}</span>
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
    data() {
        return {
            flag : false,
            fenlei : false,
            hide : true
        }
    },
    created() {
        console.log(111)
        this.$emit("detail",false);
        this.getDetail(this.$route.params.id)
    },
    beforeRouteUpdate(to, from, next) {
        // ...
        console.log(this)
    },
    computed: {
        ...Vuex.mapState({
            goodsList : state=>state.brand.detailGoods,
            name : state => state.brand.goodName,
            cate : state=>state.brand.cate
        })
    },
    components : {
        Brandtip
    },
    filters : {
        toPrice(val){
            return "￥"+val;
        }
    },
    methods: {
        ...Vuex.mapActions({
            getDetail : "brand/getActionsDetail",
            handleClick : "brand/handleGoodId",
        }),
        handleClick(id){
            this.$store.dispatch("brand/handleToId",id);
            this.$router.push("/good/gooddetail")
        },
        getDataBy(obj){
            if(obj.order){
                this.$store.dispatch("brand/handleActionBySuper",{id:this.$route.params.id,sort:obj.sort,order:obj.order});
            }else{
                this.$store.dispatch("brand/handleActionBySuper",{id:this.$route.params.id,sort:obj.sort});
            }
            
            this.flag = false;
        }
    },
}
</script>
<style lang="scss" scoped>
.move{
    transform: translateY(5.25rem);
}
.detailwarppers{
    height: 100%;
    padding-top: 1.66rem;
    padding-bottom:1rem; 
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
    .fenlei{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        transition: all .3s linear;
        background-color:rgba(0,0,0,.6);
        z-index: 4; 
    }
    .con{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: 90%;
        background: #fff;
        overflow: hidden;
        z-index: 20;
        .typewrapper{
            padding-top: .88rem;
            overflow-y: scroll;
            .list_title{
                padding-left: .2rem;
                height: .78rem;
                background-color:#f2f2f2;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: .26rem;
                color:#333; 
                i{
                    margin-right: .2rem;
                    font-size: .4rem;
                }
            }
            .list_con{
                overflow: hidden;
                text-align: left;
                padding-left: .2rem;
                .list_item{
                    width: 33.333%;
                    height: .88rem;
                    font-size: .24rem;
                    color: #333;
                    display: inline-block;
                    text-align: left;
                    line-height: .88rem;
                }
            }
        }
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
                top: -4.5rem;
                left: 0;
                background: #fff;
                width: 100%;
                transition: all .3s linear;
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
        
        position: relative;
        height: 100%;
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
                        .old-price{
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
