<template>
    <div style="height:100%">
        <BrandTip top="brandtip" v-if="flag">
            <div slot="brand">
                <div class="top-text" >
                <routerLink to="/brand">品牌</routerLink>
                <router-link to="/brand/brandflagship">旗舰店</router-link>
                <!-- <a href="">旗舰店</a> -->
                <routerLink to="/brand/brandtype">分类</routerLink>
            </div>
            </div>
        </BrandTip>
        <router-view @detail="handle"></router-view>
    </div>
</template>
<script>
import BrandTip from "../../common/header/brandtip";
export default {
    data(){
        return{
            flag : true
        }
    },
  components: {
    BrandTip
  },
  methods: {
      handle(val){
          this.flag = val;
      }
  },
};
</script>
<style lang="scss" scoped>
</style>
