import {getData} from "@/api/overseas"
export default{
    namespaced : true,
    state : {
        proList : [],
        hot : []
    },
    mutations : {
        handleMuData(state,params){
            state.proList = params[1].list;
            state.hot = params[5].list;
        }
    },
    actions : {
        async handleActionGetdata({commit}){
            let data = await getData();
            commit("handleMuData",data.data)
        }
    }
}