<template>
  <div id="app">
    <router-view/>
    <FootGuide/>
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

</style>
