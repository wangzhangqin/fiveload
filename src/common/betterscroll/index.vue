<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            scrollX :true,
            scrollY : true,
            probeType :3,
            taps :true,
            click : true,
            pullUpLoad :true
        }); 
        this.scroll.on("scroll",(pos)=>{
            this.$store.dispatch("home/handleScroll",pos.y);
            if(pos.y<-732){
                this.$emit("handleTo",false);
            }else{
                this.$emit("handleTo",true);
            }
        })
    },
    methods: {
        handleTo(t){
            this.scroll.scrollTo(0,-t)
        },
        getMoreData(){
            
            this.scroll.on("pullingUp",()=>{
                this.$emit("handle",true)
                this.$store.dispatch("sales/handleActionsNew",this.$store.state.sales.page)
            })
        },
        getMoreArticle(){
            this.scroll.on("pullingUp",()=>{
                this.$store.dispatch("home/getActionsMoreArticle",this.$store.state.home.page)
            })
        },
        update(){
            this.scroll.finishPullUp();
        },
        getih(){
            this.scroll.refresh();
        }
    },
}
</script>
<style lang="scss" scoped>
.wrapper{
    position: absolute;
    height: 100%;
    top: 0;
    width: 100%;
}
</style>

