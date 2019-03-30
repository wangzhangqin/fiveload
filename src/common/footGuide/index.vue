<template>
    <div class="foot">
        <ul>
            <routerLink 
            v-for="(item,index) in list" 
            :key="index" 
            tag="li"
            :to="item.to">
                <i class="iconfont" v-html="item.iconfont"></i>
                <span>{{item.text}}</span>
            </routerLink>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list : [
                {
                    text : "首页",
                    iconfont : "&#xe60a",
                    to : "/",
                    meta : {
                        flag : true
                    }
                },
                {
                    text : "商城",
                    iconfont : "&#xe899",
                    to : "/mall",
                    meta : {
                        flag : true
                    }
                },
                {
                    text : "海外服务",
                    iconfont : "&#xe71a",
                    to : "/overseaservice",
                    meta : {
                        flag : true
                    }
                },
                {
                    text : "到店",
                    iconfont : "&#xe611",
                    to : "/store",
                    
                },
                {
                    text : "我的",
                    iconfont : "&#xe658",
                    to : "/user"
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.foot{
    width: 100%;
    height: 0.96rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #000;
    z-index: 999
}
.foot>ul{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.foot>ul>li{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around; 
     color: #7e8c8d
}
.foot>ul>li>i,.foot>ul>li>span{
    font-weight: 400;
}
.foot>ul>li>i{
    font-size: .44rem;
}
.foot>ul>.router-link-exact-active{
    color: #fff;
}
</style>
