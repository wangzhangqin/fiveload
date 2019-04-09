<template>
    <div class="nav">
        <div style="position:relative;z-index:10;height:100%">
            <div class="brand">
                
                <div class="brandindex">
                    
                    <BScroll ref="bscroll" @handleTo="handleMsg">
                    <div class="aa">
                        <div class="tuijian" v-if="flag">
                            <div class="tjtitle">
                                <span class="line"></span>
                                <span class="name">推荐品牌</span>
                                <span class="line"></span>
                            </div>
                            <ul class="tjwrapper">
                                <routerLink class="tjlist" v-for="(item,index) in brands" :key="index" tag="li" :to="{name:'detail',params:{id:item.brand_id}}">
                                    <a href="javascript:;" class="tjlink">
                                        <img :src="item.brand_logo" alt="" class="tjimg">
                                        <div class="drop"></div>
                                    </a>
                                </routerLink>
                            </ul>
                        </div>
                        <div class="allbrand">
                            <div class="alltitle" v-if="flag">
                                <span class="line"></span>
                                <span class="name">推荐品牌</span>
                                <span class="line"></span>
                            </div>
                            <div class="contentwrapper">
                                <ul class="all" ref="all">
                                    <li class="allList" v-for="(item,index) in brandList" :key="index">
                                        <div class="title title1 nond">{{item.first_name}}</div>
                                        <div class="title" v-if="!flag"></div>
                                        <h2 class="title" ref="title">{{item.first_name}}</h2>
                                        <ul class="brandlist">
                                            <li class="brandname" v-for="(it,idx) in item.child" :key="idx">
                                                <a href="javascript:;" class="brandlink">
                                                    <span>{{it.brand_name}}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </BScroll>
                    <ul class="flag">
                        <li class="flag-list" v-for="(item,index) in brandList" :key="index" @touchstart="handleToBrand(index)">{{item.first_name}}</li>
                    </ul>
                </div>
            </div>
           
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
import {getStore} from "@/utils/storage"
export default {
    data(){
        return{
            flag : true
        }
    },
    created() {
        /* if(!getStore("brands") && !getStore("brandlist")){
            
        } */
        this.getBrands();
             this.getBrandList();
       this.$emit("detail",true)
    },
    computed: {
        ...Vuex.mapState({
            brands : state=>state.brand.brands,
            brandList : state=>state.brand.brandList
        })
    },
    methods: {
        ...Vuex.mapActions({
            getBrands : "brand/getActionsBrand",
            getBrandList : "brand/getActionsBrandList"
        }),
        handleToBrand(index){
            let to = this.$refs.all.getElementsByTagName("h2")[index].offsetTop;
            this.$refs.bscroll.handleTo(to)
        },
        handleMsg(val){
            this.flag = val;
        },
        handle(){
            this.$router.push({name : "detail"})
        }
    },
    mounted() {
        /* console.log(this.$refs.title[0].offsetTop,111) */
    },
}
</script>
<style lang="scss" scoped>
.nav{
    height: 100%;
}
.brand{
    width: 100%;
    background: #f2f2f2;
    z-index: 1;
    position: relative;
    height: 100%;
}
.brandindex{
    position: relative;
    margin-top: 0.88rem;
    bottom: 0;
    background: #f2f2f2;
    width: 100%;
    overflow: hidden;
    height: 100%;
    .aa{
        width: 100%;
        .tuijian{
            margin-bottom: 0.2rem;
            background: #fff;
            .tjtitle{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 0.88rem;
                color: #333;
                font-size: 0.28rem;
                .line{
                    flex: 0 0 10%;
                    height: 0;
                    position: relative;
                };
                .line:after{
                    display: block;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        border: 2px solid #333;
                        content: ""
                };
                .name{
                    margin: 0 0.2rem;
                }
            };
            .tjwrapper{
                overflow: hidden;
                margin-right: 0.4rem;
                .tjlist{
                    width: 25%;
                    float: left;
                    .tjlink{
                        display: block;
                        border: 1px solid #f2f2f2;
                        border-left: none;
                        border-bottom-color : #fff;
                        position: relative;
                        .tjimg{
                            width: 74%;
                            position: absolute;
                            left: 13%;
                            top: 31%;
                        };
                        .drop{
                            margin: 100% 0 0
                        }
                    }
                }
            }
        };
        .allbrand{
            .alltitle{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 0.88rem;
                background: #fff;
                color: #333;
                font-size: 0.28rem;
                .line{
                    flex: 0 0 10%;
                    height: 0;
                    position: relative;
                };
                .line:after{
                    display: block;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        border: 2px solid #333;
                        content: ""
                };
                .name{
                    margin: 0 0.2rem;
                }
            };
            .contentwrapper{
                .all{
                    .allList{
                        .title1{
                            position: fixed;
                            z-index: 20;
                            left: 0;
                            top: 2.88rem;
                            width: 100%;
                            background: #e5e5e5;
                            margin: 0;
                            padding-left: 0.3rem;
                        };
                        .title{
                            display: flex;
                            justify-content: left;
                            align-items: center;
                            height: 0.48rem;
                            margin-left: 0.3rem;
                            font-size: 0.36rem;
                            color: #999;
                        };
                        .brandlist{
                            background: #fff;
                            .brandlink{
                                display: flex;
                                justify-content: left;
                                align-items: center;
                                font-size: 0.26rem;
                                color: #333;
                                height: 0.88rem;
                                margin-left: 0.3rem;
                                position: relative;
                                
                            }
                        }
                    }
                }
            }
        }
    }
}
.nond{
    display: none!important;
}
.flag{
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    margin-right: 0;
    width: 0.4rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    margin: 20% 0;
    font-size: 28px;
    color: #333;
    background: #fff;
    box-sizing: content-box;
    .flag-list{
        padding: 0.04rem;
        padding-right: 0.1rem;
        box-sizing: content-box;
    }
}
</style>
