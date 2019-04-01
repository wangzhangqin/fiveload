import http from "@/utils/http.js";
console.log(111)
export const getNowMovie = ()=>http("get","/api/index/index_slider");