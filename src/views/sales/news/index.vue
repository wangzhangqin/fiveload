<template>
    <div style="height:100%">
        <BrandTip title="news" top="upnews" isBrand="false">
        <div class="text" slot="new">
            aaa
        </div>
        </BrandTip>
        
        <div class="upnew">
            <BScroll ref="list" @handle="handleFlag">
            <div class="con-wrapper">
                <div class="bond-list" v-for="(item,index) in list" :key="index">
                    <div class="list-top">
                        <div class="logowrapper">
                            <img :src="item.thumb" alt="">
                        </div>
                        <div class="logoname">{{item.title}}</div>
                        <a href="javascript:;" class="more"></a>
                    </div>
                    <div class="wp">
                        <div class="goodswrapp">
                            <div>
                                
                                <ul class="uplist">
                                    <li class="uplist-son" v-for="(it,idx) in item.goods_list" :key="idx" @click="handleClick(it.product_id)">
                                        <a href="javasript:;" class="link">
                                            <img :src="it.p_thumb">
                                            <p class="detail">{{it.p_title}}</p>
                                            <p class="price">￥{{it.product_price}}</p>
                                        </a>
                                    </li>
                                   
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loading v-if="loading"/>
            </BScroll>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
import BrandTip from "@/common/header/brandtip"
export default {
    data() {
        return {
            loading:true
        }
    },
    created() {
        this.getData(1);
    },
    components : {
        BrandTip
    },
    computed: {
        ...Vuex.mapState({
            list : state=>state.sales.list
        })
    },
    watch: {
        list(){
            this.loading = false;
            this.$refs.list.update()
        }
    },
    methods: {
        ...Vuex.mapActions({
            getData : "sales/handleActionsNew"
        }),
        handleFlag(val){
            this.loading = val;
            console.log(this.loading)
        },
        handleClick(id){
            this.$store.dispatch("brand/handleToId",id);
            this.$router.push("/good/gooddetail")
        }
    },
    mounted() {
        this.$refs.list.getMoreData(false);
    },
    updated() {
        this.$refs.list.getih()
    },
}
</script>
<style lang="scss" scoped>
.upnew{
    width: 100%;
    background: #f2f2f2;
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    z-index: 1;
    height: 100%;
    .con-wrapper{
        text-align: left;
        padding-top: 0.88rem;
        .bond-list{
            margin-bottom: 0.2rem;
            background: #fff;
            position: relative;
            .list-top{
                height: 1.4rem;
                padding: 0.2rem 0;
                overflow: hidden;
                .logowrapper{
                    margin: 0 0.2rem;
                    border: 1px solid #e7e7e7;
                    display: inline-block;
                    text-align: center;
                    width: 1rem;
                    height: 1rem;
                    img{
                        margin-top: 0.28rem;
                        width: 0.88rem;
                        height: 0.44rem;
                    }
                };
                .logoname{
                    height: 1rem;
                    display: inline-block;
                    line-height: 1rem;
                    color: #666;
                    font-size: 28px;
                    vertical-align: top
                };
                .more{
                    width: 0.14rem;
                    height: 0.26rem;
                }
            };
            .wp{
                .goodswrapper{
                    position: relative;
                    padding: 0 0.2rem;
                }
            }
        }
    }
}
.uplist{
    display: flex;
    position: relative;
    overflow-x: scroll;
    .uplist-son{
        width: 2.76rem;
        padding: 0 0.2rem;
        flex: 0 0 2.76;
        .link{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                height: 2.76rem;
                width: auto;
                padding-bottom: 0.2rem;
            };
            .detail{
                color: #333;
                font-size: 26px;
                line-height: 0.28rem;
                width: 2.36rem;
                margin-bottom: 0.2rem;
                -webkit-line-clamp : 2;
                overflow: hidden;
            };
            .price{
                color : #9b885f;
                font-size: 26px;
                padding-bottom: 0.4rem;
            }
        }
    }
}
.fadescroll{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 0.4rem solid #fff;
}
</style>
