<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
    
    <FootGuide v-if="this.$route.meta.footTab"/>
  </div>
</template>
<script>
import FootGuide from "@/common/footGuide"
export default {
  components : {
    FootGuide
  }
}
</script>
<style lang="scss">
#app{
  height: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: #f2f2f2
}
</style>
