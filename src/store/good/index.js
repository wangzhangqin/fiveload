import {getData,getGoodInfo,getCanBuy} from "@/api/good"
import {setStore,getStore} from "@/utils/storage"
export default{
    namespaced : true,
    state : {
        banner : [],
        info : {},
        service : [],
        install : "",
        para : [],
        productNum : 0,
        allSku : [],
        curSku:[],
        goodInfo : {},
        pid : "",
        shopCart : [],
        shopItem : {},
        goodStatus : 1
    },
    mutations : {
        handleMuData(state,params){
            state.banner = params.goods_gallery;
            state.info = params.goods_info;
            state.service = params.service_info;
            state.install = params.installment_str;
            state.para = params.para_arr;
            state.pid = params.goods_info.product_id;
            state.shopItem.brand_name = params.goods_info.brand_name;
            state.shopItem.good_name = params.goods_info.good_name;
            state.shopItem.mbpage_title = params.goods_info.mbpage_title;
            console.log(params.goods_gallery)
        },
        handleMuGoodInfo(state,params){
            state.productNum = params.product_number;
            state.allSku = params.sku.all;
            state.goodInfo = params.good_info;
            state.curSku = params.sku.current;
            console.log(state.goodInfo,222);
            state.shopItem.sku = params.sku.current;
            state.shopItem.thumb = params.good_info.thumb;
            state.shopItem.show_price = params.good_info.show_price;
            /* var arr = params.sku.all;
            var ary = params.sku.current;
            for(var i=0;i<arr.length;i++){
                if(arr[i])
            } */
        },
        handleMuAdd(state){
            state.goodInfo.status++;
            state.goodStatus++;
        },
        handleMuReduce(state){
            if(state.productNum<=1){
                state.goodInfo.status = 1;
            }else{
                state.goodInfo.status--;
                state.goodStatus--;
            }
        },
        handleToCart(state){
            state.shopItem.status = state.goodInfo.status;
            var arr = []
            arr = getStore("shopCartInfo");
            console.log(arr)
            arr.push(state.shopItem)
            setStore("shopCartInfo",arr);
        }
    },
    actions : {
        async handleActionsData({commit},params){
            let data = await getData({id:params});
            console.log(data,111)
            commit("handleMuData",data.data)
        },
        async handleActionGoodInfo({commit},params){
            let data = await getGoodInfo({product_id:params})
            commit("handleMuGoodInfo",data.data)
        },
        async handleActionToCart({commit},params){
            //console.log(params)
            //let data = await getCanBuy({product_id:params.id,number:params.num})
            //console.log(data,111);
            commit("handleToCart");
        }
    }
}