<template>
  
            <div :class="search">
                <div class="search-text" >
                    <i class="iconfont">&#xe6fe;</i>
                </div>
                <div class="shop-cart">
                    <i class="iconfont">&#xe899;</i>
                    <div class="totalNum_home">2</div>
                </div>
                
            </div>
   
</template>
<script>
export default {
  props: {
    search: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  height: 0.88rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
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

