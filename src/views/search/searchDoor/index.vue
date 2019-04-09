<template>
    <div class="door">
        <div style="height:100%">
       <!--  <SearchTab/> -->
       <Header search="search_sh" :isDoor="false">
           <input type="text" :placeholder="keyWorld" @input="getSearchMsg($event.target.value)" v-model="message">
       </Header>
       <BScroll >
        <div class="search-con">
            <div class="hotsearch">
                <div class="hot-title">热门搜索</div>
                <ul class="hot-con">
                    <li class="hotlist" v-for="(item,index) in hotSearch" :key="index">
                        <a :href="item.uri">{{item.keyword}}</a>
                    </li>
                </ul>
            </div>
            <div class="searchRec">
                <div class="rectitle">
                    <div class="text" @click="flag = !flag">为您推荐</div>
                </div>
                <ul class="searchrec-con">
                    <li class="search-item" v-for="(item,index) in products" :key="index" @touchstart="handleClick(item.product_id)">
                        <a href="javascript:;">
                            <div class="rec-img">
                                <img :src="item.product_thumb" alt="">
                            </div>
                            <p class="rec-name">{{item.product_name}}</p>
                            <p class="rec-price">{{item.product_price | toPrice}}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <SearchResult v-show="message"/>
        </div>
       </BScroll>
    </div>
         
    </div>
</template>
<script>
import SearchResult from "../searchResult";
import Vuex from "vuex"
export default {
    data(){
        return{
            message : ""
        }
    },
    created() {
        this.getSearchInfo();
    },
    beforeRouteEnter (to, from, next) {
        // ...
        
        next((vm)=>{
            vm.message = ""
        })
    },
    computed: {
        ...Vuex.mapState({
            hotSearch : state=>state.search.hotSearch,
            keyWorld : state=>state.search.keyWorld,
            products : state=>state.search.products,
        })
    },
    filters : {
        toPrice(val){
            return "￥"+val;
        }
    },
  components: {
    SearchResult
  },
  methods: {
      ...Vuex.mapActions({
          getSearchInfo : "search/getActionsSearchInfo",
          getSearchMsg : "search/getActionsSearchList"
      }),
      handleClick(id){
          this.$store.dispatch("brand/handleToId",id);
            this.$router.push("/good/gooddetail")
      }
  },
};
</script>
<style lang="scss" scoped>
.door {
  width: 100%;
  height: 100%;
  background: #fff;
  color: #fff;
  position: relative;
  
}
.search-con{
    position: relative;
    padding-top:0.88rem 
}
.hotsearch{
    
}
.hotsearch .hot-title {
  background: #f2f2f2;
  padding: 0 0.3rem;
  height: 0.8rem;
  font-size: 0.26rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.hotsearch .hot-con {
  padding: 0.2rem 0.3rem;
  color: #666;
  font-size: 0.24rem;
  overflow: hidden;
  .hotlist {
    float: left;
    height: 0.6rem;
    line-height: 0.6rem;
    padding: 0 0.2rem;
    border: 1px solid #e5e5e5;
    border-radius: 0.05rem;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
    a {
      color: #7e8c8d;
    }
  }
}
.searchRec .rectitle {
  height: 0.92rem;
  background: #f2f2f2;
  color: #999;
  font-size: 0.28rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.searchRec .searchrec-con {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0.3rem;
  widows: 6.9rem;
  .search-item {
    width: 42%;
    margin: 0.3rem 0;
    .rec-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .rec-name {
      padding: 0.22rem 0 0.2rem;
      font-size: 0.24rem;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .rec-price {
      color: #999;
      text-align: center;
    }
  }
}
</style>
