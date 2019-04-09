import http from "@/utils/http.js"
export const getNewPro = (obj)=>http("get","/api/home/new_product",obj)
