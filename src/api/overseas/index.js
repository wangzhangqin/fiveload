import http from "@/utils/http.js"
export const getData = ()=>http("get","/api/oversea/home_allinfo")
