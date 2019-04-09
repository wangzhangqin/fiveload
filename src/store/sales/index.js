import {getNewPro,getLogin} from "@/api/sales"
export default{
    namespaced : true,
    state : {
        list : [],
        page :1
    },
    mutations : {
        handleMuNew(state,params){
            state.list = [...state.list,...params.list];
            state.page = params.page+1;
            console.log(state.page)
        }
    },
    actions : {
        async handleActionsNew({commit},params){
            
            let data = await getNewPro({page:params});
            console.log(data)
            commit("handleMuNew",{list:data.data.list,page:params})
            //let data = await getLogin({username:"aaa",password:12345678,check_code_m:""});

        }
    }
}