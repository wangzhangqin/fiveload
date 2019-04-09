import {getBrand,getBrandList,getCatList,getList,getImg,getDetail} from "@/api/brand"
import {setStore,getStore} from "@/utils/storage"
export default{
    namespaced : true,
    state : {
        brands : getStore("brands") || [],
        brandList : getStore("brandlist") || [],
        catList : [],
        detail : [],
        img : [],
        detailGoods : [],
        goodName : "",
        goodId : 0,
        cate : []
    },
    mutations : {
        getMuBrand(state,params){
            state.brands = params
        },
        getMuBrandList(state,params){
            state.brandList = params
        },
        getMuCatList(state,params){
            state.catList = params
        },
        getDetail(state,params){
            state.detail = params
        },
        getMuImg(state,params){
            state.img = params
        },
        handleMuDetail(state,params){
            console.log(params.goods_list,111)
            state.detailGoods = params.goods_list;
            state.goodName = params.brand_name;
            state.cate = params.all_cate;
        },
        handleMutaId(state,params){
            state.goodId = params;
        }
        
    },
    actions : {
        async getActionsBrand({commit}){
            let data = await getBrand();
            setStore("brands",data.data.list)
            commit("getMuBrand",data.data.list)
        },
        async getActionsBrandList({commit}){
            let data = await getBrandList();
            setStore("brandlist",data.data.list)
            commit("getMuBrandList",data.data.list)
        },
        async getActionsCatList({commit}){
            let data = await getCatList();
            commit("getMuCatList",data.data)
        },
        async getActionsList({commit},params){
            let data = await getList({id:params});
            commit("getDetail",data.data)
        },
        async getActionsImg({commit}){
            let data = await getImg();
            commit("getMuImg",data.data.mbpage_list)
        },
        async getActionsDetail({commit},params){
            let data = await getDetail({id:params})
            commit("handleMuDetail",data.data)
        },
        handleToId({commit},params){
            commit("handleMutaId",params)
        },
        async handleActionBySuper({commit},params){
            console.log(params,111)
            let data = await getDetail(params)
            console.log(data);
            commit("handleMuDetail",data.data)
        }
    },
}