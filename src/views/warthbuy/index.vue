<template>
    <div class="fashion">
        <nav class="fashion_head">
            <a href="">值得买</a>
            <a href="">直播</a>
            <a href="">视频</a>
            <a href="">活动</a>
        </nav>
        <div style="padding: 80px 16px 114px; height:100%">
            <BScroll>
            <ul class="warthbuy">
                <li class="warthbuy-list" v-for="(item,index) in list" :key="index">
                    <div class="w-title">
                        <div class="w-logo">
                            <img src="/static/img/5luxpc.png" alt="">
                        </div>
                        <div class="w-text">
                            <p>{{item.publiser.nickname}}</p>
                        </div>
                        <div class="w-islike">
                            <span>关注</span>
                        </div>
                    </div>
                    <a href="javascript:;" class="w-body">
                        <img :src="item.thumb_info.thumb" alt="">
                    </a>
                    <div class="w-ca">
                        <strong class="w-ca-name">
                            {{item.title}}
                        </strong>
                        <div class="w-ca-con">
                            
	          {{item.describe}}
			
                        </div>
                    </div>
                    <div class="w-bottom">
                        <div class="logo-list">
                            <i></i>
                            <span>32</span>
                        </div>
                    </div>
                </li>
            </ul>
            </BScroll>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    created() {
        this.getData();
        console.log(111)
    },
    computed: {
        ...Vuex.mapState({
            list : state=>state.warthbuy.list
        })
    },
    methods: {
        ...Vuex.mapActions({
            getData : "warthbuy/handleActionsData"
        })
    },
}
</script>
<style lang="scss" scoped>
.fashion{
    background: #f2f2f2;
    height: 100%;
    .fashion_head{
        height: .8rem;
        background: #333;
        position: fixed;
        top: 0;
        left:0;
        right: 0;
        display: flex;
        z-index: 50;
        a{
            flex:1;
            display: flex;
            align-items: center;
            justify-content: center;
            color:#fff;
            font-size: .3rem;
        }
    }
}
.warthbuy{
    padding-top: .88rem;
    .warthbuy-list{
        margin-top: .16rem;
        background: #fff;
        border-radius: 0.1rem;
        .w-title{
            height: 1.1rem;
            display: flex;
            padding: .2rem 0;
            align-items: center;
            .w-logo{
                width: .7rem;
                height: .7rem;
                margin:  0 .2rem;
                display: flex;
                align-items: center;
                border-radius: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                    vertical-align: top;
                }
            }
            .w-text{
                flex: 1;
                p{
                    text-align: left;
                }
            }
            .w-islike{
                width: 1.4rem;
                height: .48rem;
                border: 2px solid #333;
                border-radius: .2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: .2rem;
                color: #333;
                margin: 0 .2rem;
            }
        }
        .w-body{
            display: inline-block;
            width: 100%;
            position: relative;
            img{
                width: 100%;
                vertical-align: top;
            }
        }
        .w-ca{
            position: relative;
            border-bottom: 1px solid transparent;
            .w-ca-name{
                padding: .4rem .2rem;
                font-size: .4rem;
                line-height: .5rem;
                display: block;
                color:#333;
                text-align: left;
            }
            .w-ca-con{
                font-size: .28rem;
                color:#999;
                text-align: left;
                line-height: .35rem;
                margin: 0 .2rem .3rem;
            }
        }
        .w-bottom{
            height: 1rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0 .2rem;
        }
    }
}
</style>
