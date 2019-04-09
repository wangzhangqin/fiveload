import {getData} from "@/api/video"
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
            commit("handleMuData",data.data.vlist)
        }
    }
}