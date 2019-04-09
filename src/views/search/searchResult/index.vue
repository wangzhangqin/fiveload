<template>
    <div class="searchResult">
        <ul class="sec-result">
            <li class="result-item">
                <div class="sec-list">
                    <a href="javascript:;" class="link">
                        <span class="sec-logo"></span>
                        <div class="sec-text">搜索“f”相关专柜</div>
                        <div class="jump">
                            约13家店 
                        </div>
                    </a>
                </div>
            </li>
            <ul>
                <routerLink class="sec-list" v-for="(item,index) in list" :key="index" tag="li" :to="{name:'detail',params:{id:item.brand_id}}">
                    <a href="javascript:;" class="link">
                        <div class="sec-text">{{item.brand_name}}</div>
                        <div class="jump">
                            约{{item.brand_id}}家店 
                        </div>
                    </a>
                </routerLink>
            </ul>
        </ul>
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    computed: {
        ...Vuex.mapState({
            list : state=>state.search.searchList
        })
    },
    methods: {
        
    },
}
</script>
<style lang="scss" scoped>
.searchResult{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    overflow: hidden;
    z-index: 1;
    .sec-list{
        height: 0.88rem;
        margin-left: 0.3rem;
        position: relative;
        display: flex;
        .link{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom: 1px solid #f2f2f2;
            .sec-logo{
                display: block;
                width: 0.38rem;
                height: 0.38rem;
                margin-right: 0.3rem;
                background: pink;
            };
            .sec-text{
                color: #333;
                font-size: 30px;
            }
            .jump{
                position: absolute;
                margin-right: 0.34rem;
                right: 0.34rem;
                top: 0.33rem;
                font-size: 0.26rem;
                align-items: center
            }
        }
    }
}
</style>
