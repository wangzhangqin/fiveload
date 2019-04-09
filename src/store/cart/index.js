import {getStore} from "@/utils/storage"
import { setStore } from "../../utils/storage";
export default{
    namespaced :true,
    state :{
        allSecleted : true,
        data : [],
        totalNum : 0
    },
    mutations : {
        handleMuSelect(state){
            state.allSecleted = !state.allSecleted;
            state.data.map((item)=>{
                item.flag = state.allSecleted;
            })
        },
        handleData(state){
            var arr =  getStore("shopCartInfo");
            arr.map((item)=>{
                item.flag = true; 
                item.isEdit = false;              
            })
            state.data = arr;
        },
        handleMuItem(state,params){
            state.data[params].flag = !state.data[params].flag;
            var bStop = true;
            for(var i=0;i<state.data.length;i++){
                if(!state.data[i].flag){
                    bStop = false;
                    break;
                }
            }
            state.allSecleted = bStop;
        },
        handleMuEdit(state,index){
            state.data[index].isEdit = !state.data[index].isEdit;
        },
        handleMuAllEdit(state){
            state.data.map((item)=>{
                item.isEdit = !item.isEdit;
            })
        },
        handleMuReduce(state,index){
            if(state.data[index].status<=1){
                state.data[index].status = 1;
            }else{
                state.data[index].status--;
            }
        },
        handleMuAdd(state,index){
            state.data[index].status++;
        },
        handleMuDel(state,index){
            var arr = getStore("shopCartInfo");
            arr.splice(index,1);
            setStore("shopCartInfo",arr);
            state.data.splice(index,1);
        }
    },
    getters : {
        goodsCount(state){
            let totalNum = 0;
            let totalPrice = 0;
            state.data.filter((item)=>{
                if(item.flag){
                    totalNum += Number(item.status);
                    totalPrice += item.status * (item.show_price*10)/10;
                }
            })
            state.totalNum = totalNum;
            return{
                totalNum,
                totalPrice
            }
        }
    }
}