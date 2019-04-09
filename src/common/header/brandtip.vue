<template>
    <div :class="top">
        <i class="iconfont return" @click="back">&#xe62c;</i>
        <slot name="brand"></slot>
        <slot name="new"></slot>
    </div>
</template>
<script>
export default {
    methods: {
        back(){
            /* this.$router.go(-1); */
            window.history.back();
        }
    },
    props : ["top","title","isBrand"]
}
</script>
<style lang="scss" scoped>
.upnews{
    height: 0.88rem;
    width: 100%;
    position: fixed;
    background: #fff;
    align-items: center;
    justify-content: center;
    display: flex;
    top: 0;
    left: 0;
    z-index: 10;
    .text{
        font-size: .32rem;
    }
    .return{
        position: absolute;
        display: inline-block;
        height: 0.44rem;
        margin-left: .22rem;
        line-height: 0.44rem;
        left: 0;
        color: #7e8c8d;
        font-size: 0.6rem
    };
    .top-text{
        height: 0.88rem;
        color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            font-size: 0.32rem;
            margin: 0 0.24rem;
        }
    }
}
.brandtip{
    height: 0.88rem;
    width: 100%;
    position: fixed;
    background: #181818;
    text-align: center;
    top: 0;
    left: 0;
    z-index: 10;
    .return{
        position: absolute;
        display: inline-block;
        height: 0.44rem;
        margin: 0.22rem;
        line-height: 0.44rem;
        left: 0;
        color: #7e8c8d;
        font-size: 0.6rem
    };
    .top-text{
        height: 0.88rem;
        color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            font-size: 0.32rem;
            margin: 0 0.24rem;
        }
    }
}
.router-link-active{
    color: #fff;
}
</style>
