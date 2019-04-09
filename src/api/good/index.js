import http from "@/utils/http"
export const getData = (obj)=>http("get","/api/good/goodsdetail",obj)
export const getGoodInfo = (obj)=>http("get","/api/good/goodsdetail_sku",obj)
export const getCanBuy = (obj)=>http("get","/api/cart/checkcanbuy",obj)