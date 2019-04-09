<template>
    <div class="shopcart">
        <div class="toptab">
            <i class="iconfont" @click="handeleBack">&#xe62c;</i>
            <span>购物袋（{{this.$store.state.cart.totalNum}}）</span>
            <span class="edit" @click="handleAllEdit"></span>
        </div>
        <div>
            <div class="notnull">
                <div class="not_good_wrap" v-for="(item,index) in data" :key="index">
                    <div class="not_title">
                        <div class="title_con left">{{item.mbpage_title?item.mbpage_title:'第五大道自营'}}</div>
                        <div class="title_con right" @click="handleEditItem(index)">{{item.isEdit?'完成':"编辑"}}</div>
                    </div>
                    <div class="not_good_list">
                        <div class="not_con">
                            <input type="checkbox" class="not_con_left_c" :checked="item.flag" @change="handleitem(index)">
                            <div class="not_con_right">
                                <div class="right_img">
                                    <img :src="item.thumb" alt="">
                                </div>
                                <div class="right_con">
                                    <p class="name" v-show="!item.isEdit">{{item.brand_name}}</p>
                                    <p class="detai" v-show="!item.isEdit">{{item.good_name}}</p>
                                    <p class="type" v-show="!item.isEdit">Vivant 活力-144</p>
                                    <p class="price" v-show="!item.isEdit">￥{{item.show_price}}</p>
                                    <div class="numbtn" :class="item.isEdit?'editNumbtn':''">
                                        <span class="action" @click="handleReduce(index)">-</span>
                                        <span class="action num">{{item.status}}</span>
                                        <span class="action" @click="handleAdd(index)">+</span>
                                    </div>
                                </div>
                            </div>
                            <div class="slidedel" v-show="item.isEdit" @click="handleDel(index)">
                                删除
                            </div>
                        </div>
                    </div>
                    <div class="item_price">
                        本店总计（不含税）：￥{{item.status*item.show_price}}
                    </div>
                </div>
            </div>
        </div>
        <div class="btmtab">
            <div class="btm_left">
                <div class="selec">
                    <label>
                        <input type="checkbox" :checked="this.$store.state.cart.allSecleted" @change="handleSelect">
                        全选
                    </label>
                </div>
                <div class="sel_number">
                    <p class="sel_price">合计￥ {{goodsCount.totalPrice}}</p>
                    <p class="sel_num">共计{{goodsCount.totalNum}}件商品</p>
                </div>
            </div>
            <div class="btm_right">
				去结算({{goodsCount.totalNum}})
			</div>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    created() {
        this.getInfo();
    },
    computed: {
        ...Vuex.mapState({
            data : state=>state.cart.data
        }),
        ...Vuex.mapGetters({
            goodsCount : "cart/goodsCount"
        })
    },
    methods: {
        ...Vuex.mapMutations({
            handleSelect : "cart/handleMuSelect",
            getInfo : "cart/handleData",
            handleitem : "cart/handleMuItem",
            handleEditItem : "cart/handleMuEdit",
            handleAllEdit : "cart/handleMuAllEdit",
            handleReduce : "cart/handleMuReduce",
            handleAdd :"cart/handleMuAdd",
            handleDel : "cart/handleMuDel"
        }),
        handeleBack(){
            this.$router.back();
        }
    },
}
</script>
<style lang="scss" scoped>
.toptab{
    height: 0.88rem;
    display:flex;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: .3rem;
    color: #333;
    i{
        font-size: .54rem;
        margin-left: .2rem;
    };
    .edit{
        margin-right: .2rem;
    }

}
.shopcart{
    position: fixed;
    top: 0;
    left:0;
    bottom:0;
    background: #f2f2f2;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    z-index: 2;
    .notnull{
        padding-bottom: 1.2rem;
        .not_good_wrap{
            margin-top: .2rem;
            background: #fff;
            text-align: left;
            position: relative;
            .not_title{
                height: .84rem;
                font-size: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                .title_con{
                    height: 0.84rem;
                    font-size: .24rem;
                    color:#666;
                    line-height: 0.84rem;
                };
                .left{
                    margin-left: .3rem;
                };
                .right{
                    margin-right: .3rem;
                }
            };
            .not_good_list{
                position: relative;
                .not_con{
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    padding: .2rem 0;
                    position: relative;
                    .not_con_left_c{
                        display: inline-block;
                        width: .44rem;
                        height: .44rem;
                        margin: 0 .3rem;
                        margin-right: 0.08rem;
                    };
                    .not_con_right{
                        display: flex;
                        width: 6.5rem;
                        .right_img{
                            width: 1.8rem;
                            height: 1.8rem;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        };
                        .right_con{
                            padding-left: .3rem;
                            padding-right: .2rem;
                            width: 4.7rem;
                            position: relative;
                            .name,.type,.detail{
                                font-size: .24rem;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                width: 100%;
                                color:#333;
                                padding-bottom: .13rem;
                            };
                            .type{
                                font-size: .24rem;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                width: 100%;
                                color:#999;
                                margin-bottom: 21px;
                            }
                            .detai{
                                font-size: .24rem;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                width: 100%;
                                color:#333;
                                padding-bottom: .13rem;
                            }
                            .price{
                                font-size: .26rem;
                                color:#9b885f;
                                font-family: Arial-Regular;
                            };
                            .numbtn{
                                position: absolute;
                                bottom:0;
                                right:.3rem;
                                display: flex;
                                .action{
                                    width: .48rem;
                                    height:.48rem;
                                    border: 1px solid #ccc;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                };
                                .num{
                                    width: .6rem;
                                }
                            };
                            .editNumbtn{
                                top: 0;
                                left: .64rem;
                            }
                        }
                    }
                    .slidedel{
                        position: absolute;
                        right: 0;
                        height: 100%;
                        line-height: 2.2rem;
                        width: 1.2rem;
                        color:#fff;
                        background: #f33;
                        font-size: .28rem;
                        text-align: center;
            }
                }
            };
            .item_price{
                font-size:.26rem;
                height: .88rem;
                line-height: .88rem;
                color:#333;
                text-align: right;
                padding-right: .3rem;
            };
            
        }
    }
}
.btmtab{
    height: 1.2rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .btm_left{
        margin-left: .26rem;
        display: flex;
        align-items: center;
        font-size: 0;
        input{
            width: .44rem;
            height: .44rem;
        };
        .sel_number{
            text-align: left;
            .sel_price{
                font-size: .26rem;
                color:#9b885f;
                margin-bottom: 0.09rem;
            };
            .sel_num{
                color:#00000f;
                font-size: .24rem;
            }
        }
    };
    .btm_right{
        width: 2.3rem;
        height: 1.2rem;
        color:#fff;
        font-size: .3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #9b885f;
    }
}
</style>
