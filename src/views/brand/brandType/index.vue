<template>
    <div class="brandtype">
        <div class="menuWrapper">
            <BScroll>
            <ul class="menu">
                <li class="menu-list" v-for="(item,index) in catList" :key="index" :class="cur==index?'bgfff':''" @touchstart="getDetail(item.id,index)">{{item.cata_name}}</li>
            </ul>
            </BScroll>
        </div>
        <div class="typeWrapper">
            <BScroll>
            <ul class="type">
                <li class="typelist" v-for="(item,index) in detail" :key="index">
                    <div class="title">
                        <span class="line"></span>
                        <span class="name">{{item.cata_name}}</span>
                        <span class="line"></span>
                    </div>
                    <ul class="contentwrapper">
                        <li class="conlist" v-for="(it,idx) in item.child_list" :key="idx">
                            <a href="javascript:;" class="conlink">
                                <img v-lazy="it.cata_thumb" alt="">
                                <p class="name">{{it.cata_name}}</p>
                            </a>
                        </li>
                    </ul>
                </li>
                
            </ul>
            </BScroll>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
import { stat } from 'fs';
export default {
    
    created() {
        this.getList();
        this.getDetail(107)
    },
    data() {
        return {
            cur : 0
        }
    },
    computed: {
        ...Vuex.mapState({
            catList : state=>state.brand.catList,
            detail : state=>state.brand.detail
        })
    },
    methods: {
        ...Vuex.mapActions({
            getList : "brand/getActionsCatList"
        }),
        getDetail(id,index){
            this.cur = index;
            this.$store.dispatch("brand/getActionsList",id)
        }
    },
}
</script>
<style lang="scss" scoped>
.bgfff{
    background: #fff!important;
}
.brandtype{
    display: flex;
    position: fixed;
    left: 0;
    top: 0.88rem;
    bottom: 0;
    background: #ccc;
    width: 100%;
    overflow: hidden;
    z-index: 10;
    .menuWrapper{
        position: absolute;
        left: 0;
        height: 100%;
        width: 24%;
        background: #f2f2f2;
        .menu{
            .menu-list{
                height: 1.12rem;
                line-height: 1.12rem;
                background: #f2f2f2;
                font-size: 26px;
                color: #333;
                position: relative;
            };
            .menu-list:after{
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                border : 1px solid #ccc;
                content: "";
            }
        }
    };
    .typeWrapper{
        width: 76%;
        background: #fff;
        position: absolute;
        left: 24%;
        height: 100%;
        .type{
            margin: 0 5.6%;
            border-top: 1px solid transparent;
            .typelist{
                margin-top: 0.2rem;
                .title{
                    display: flex;
                    padding: 0.3rem 0.2rem 0.2rem;
                    justify-content: center;
                    align-items: center;
                    height: 0.26rem;
                    .line{
                        flex: 1;
                        height: 0;
                        position: relative;
                    };
                    .line:after{
                        display: block;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        border-top: 1px solid #ccc;
                        content: "";
                    };
                    .name{
                        margin: 0 0.2rem;
                        color: #999;
                        height: 0.26rem;
                        font-size: 0.26rem;
                    }
                };
                .contentwrapper{
                    overflow: hidden;
                    .conlist{
                        width: 33.3333%;
                        margin: 0.12rem 0;
                        float: left;
                        .conlink{
                            img{
                                width: 100%;
                                vertical-align: top;
                            };
                            .name{
                                font-size: 0.22rem;
                                display: flex;
                                justify-content: center;
                                color: #999;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
