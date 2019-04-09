import {getColumn,getSlider,getButton,getOtherAdvert} from "../../api/index"
export default{
    namespaced : true,
    state : {
        columnArr : [],
        sliderArr : [],
        buttonArr : [],
        newRigster : {},
        vipOne :{},
        vipOther : [],
        newSeason : {},
        buyList : {},
        articleList : [],
        top : 0,
        flag : false,
        color : 0
    },
    mutations : {
        getMutationColumn(state,params){
            state.columnArr = params;
            console.log(params[0].ad_link)
        },
        getMutationSlider(state,params){
            state.sliderArr = params;
        },
        getMutationButton(state,params){
            state.buttonArr = params;
        },
        getMutationAdvert(state,params){
            state.newRigster = params.newRigster;
            state.vipOne = params.vipOne;
            state.vipOther = params.vipOther;
            state.newSeason = params.newSeason;
            state.buyList = params.buyList;
            state.articleList = params.articleList;
        },
        handleMuScroll(state,params){
            state.flag = params.isShow;
            //console.log(params)
            if(params.height<0){
                state.color = -params.height/825;
            }else{
                state.color = 0
            }
            

        }
    },
    actions : {
        handleScroll({commit},params){
            var flag = false;
            if(Math.abs(params) >= 825){
                flag = true
            }else{
                flag = false
            }
            var obj = {
                isShow : flag,
                height : params
            }
            commit("handleMuScroll",obj)
            
        },
        async getActionsColumn({commit}){
            let data = await getColumn();
            data.data.map((item)=>{
                item.ad_link = item.ad_link.replace(/www.5lux.com/,"localhost:8081/#")
            })
            commit("getMutationColumn",data.data)
        },
        async getActionsSlider({commit}){
            let data = await getSlider();
            commit("getMutationSlider",data.data)
        },
        async getActionsButton({commit}){
            let data = await getButton();
            commit("getMutationButton",data.data.list)
        },
        async getActionsAdvert({commit}){
            let data = await getOtherAdvert();
            var arr = [];
            var flag = true;
            var ary = data.data.article_list;
            //console.log(data.data.article_list[1].product_info)
            for(var i=0;i<data.data.article_list.length;i++){
                if(data.data.article_list[i].ads_info.product_info.length>0){
                    flag = true;
                }else{
                    flag = false;
                }
                var o = {
                    isPro : flag,
                    data : data.data.article_list[i].ads_info
                }
                arr.push(o);
            }
            
            let obj = {
                newRigster : data.data.new_register[0],
                vipOne :data.data.vip_member.splice(0,1)[0],
                vipOther : data.data.vip_member.splice(0),
                newSeason : data.data.five_example.ads_info,
                buyList : data.data.buy_list[0],
                articleList :arr
            }
            commit("getMutationAdvert",obj)
        }
    }   
}