import http from "@/utils/http.js"

export const getSearchInfo = ()=>http("get","/api/search/recommend_list")
export const getSearchMsg = (obj)=>http("get","/api/rpcsearchnew/getkey",obj)
/* export const getBanner = ()=>http("post","/capi/product/qiuxie/open/homefirstv322",{os: 3}) */
/* export const getIndex = (obj)=>http("get","/api/rpcsearchnew/index_new",obj) */