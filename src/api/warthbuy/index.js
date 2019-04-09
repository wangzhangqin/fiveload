import http from "@/utils/http.js"
export const getData = ()=>http("get","/api/fashion/worthbuy_list")
