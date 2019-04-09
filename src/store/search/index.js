import {getSearchInfo,getSearchMsg,getBanner,getIndex} from "@/api/search"
import {getBrand,getDetail} from "@/api/brand"
export default{
    namespaced : true,
    state : {
        hotSearch : [],
        keyWorld : "",
        products : [],
        searchList : []
    },
    mutations : {
        getMutationsSearchInfo(state,params){
            state.hotSearch = params.hotSearch;
            state.keyWorld = params.keyWorld,
            state.products = params.products
        },
        getMuSearchList(state,params){
            state.searchList=params;
        }
    },
    actions : {
        async getActionsSearchInfo({commit}){
            let data = await getSearchInfo();
            let obj = {
                hotSearch : data.data.hot_search,
                keyWorld : data.data.search_keyword[0],
                products : data.data.recommend_products
            };
            commit("getMutationsSearchInfo",obj)
        },
        /* async handleActionsMsg({commit},params){
            let data = await getBanner()
            console.log(data)
        }, */
        async getActionsSearchList({commit}){
            let data = await getBrand()
            commit("getMuSearchList",data.data.list)
            
        }
        /* async handleActionsData(){
            let data = await getData();
            console.log(data.data)
            var arr = []
            var obj = data.data.splice(6,3);
            for(var i=0;i<obj.length;i++){
                var image = obj[i].data.imageUrls[0];
                obj[i].data.image = image;
                obj[i].data.imageUrls.shift();
                arr.push(obj[i].data)
            }
            console.log(arr)
        } */
    }
}