<template>
  
            <div :class="search" :style="{backgroundColor:'rgba(0,0,0,'+this.$store.state.home.color+')'}">
                <routerLink class="search-text" to="/search/door" tag="div" placeholder="pl" v-if="isDoor">
                    <i class="iconfont">&#xe6fe;</i>
                </routerLink>
               <div class="text" placeholder="pl" v-else>
                    <i class="iconfont">&#xe6fe;</i>
                    <!-- <input type="text" :placeholder="pl"> -->
                    <slot></slot>
                </div>
                <div class="shop-cart" v-if="isDoor" @click="handleToCart">
                    <i class="iconfont">&#xe899;</i>
                    <div class="totalNum_home">{{num}}</div>
                </div>
                <span v-else class="cancel" @click="handleBack">
                  取消
                </span>
                
            </div>
   
</template>
<script>
export default {
  props: ["search","isDoor","num"],
  methods: {
    handleBack(){
      console.log(111)
    },
    handleToCart(){
      this.$router.push("/cart")
    }
  },
};
</script>
<style lang="scss" scoped>
.search_sh {
  height: 0.88rem;
  width: 100%;
  background-color:#fff!important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid #ccc;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  .text {
    flex: 1;
    height: 0.6rem;
    background: #f2f2f2;
    border-radius: 0.08rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 0.34rem;
    margin-right: 0.32rem;
    input{
      height: 100%;
      border:none;
      background: #f2f2f2;
      width: 100%;
      font-size: 0.3rem;
      outline: none
    }
    i {
      font-size: 0.32rem;
      margin: 0 0.16rem;
      font-weight: 900;
      color: #ccc
    }
  }
  i {
    color: #fff;
    font-size: 0.48rem;
  }
}
.cancel{
  display: block;
  color: #000;
  font-size: .32rem;
  margin-right: .34rem
}
.shop-cart{
    position: relative;
    margin-right: 0.34rem;
}
.totalNum_home{
    position: absolute;
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    border: 1px solid #fff;
    border-radius: 50%;
    background: #f33;
    color: #fff;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.3rem;
    left: 0.24rem;
    top: -0.06rem;
}
.search {
  height: 0.88rem;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0); */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .search-text {
    flex: 1;
    height: 0.6rem;
    background: #fff;
    background-color: hsla(0, 0%, 100%, 0.25);
    border-radius: 0.08rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 0.34rem;
    margin-right: 0.32rem;
    i {
      font-size: 0.3rem;
      margin: 0 0.16rem;
    }
  }
  i {
    color: #fff;
    font-size: 0.48rem;
  }
}
.shop-cart{
    position: relative;
    margin-right: 0.34rem;
}
.totalNum_home{
    position: absolute;
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    border: 1px solid #fff;
    border-radius: 50%;
    background: #f33;
    color: #fff;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.3rem;
    left: 0.24rem;
    top: -0.06rem;
}
</style>

