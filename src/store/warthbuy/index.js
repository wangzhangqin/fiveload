import {getData} from "@/api/warthbuy"
export default{
    namespaced : true,
    state : {
        list : []
    },
    mutations : {
        handleMuData(state,params){
            state.list = params;
        }
    },
    actions : {
        async handleActionsData({commit}){
            let data = await getData();
            console.log(data)
            commit("handleMuData",data.data.list)
        }
    }
}