import http from "@/utils/http.js"

export const getData = ()=>http("get","/api/fashion/video_list")