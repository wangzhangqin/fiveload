import http from "@/utils/http.js"

export const getData = (obj)=>http("get","/api/fashion/video_list",obj)