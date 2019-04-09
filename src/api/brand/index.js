import http from "@/utils/http"
export const getBrand = ()=>http("get","/api/good/brands")
export const getBrandList = ()=>http("get","/api/good/brandlist")
export const getCatList = ()=>http("get","/api/good/top_catlist")
export const getList = (obj)=>http("get","/api/good/catlist",obj)
export const getImg = ()=>http("get","/api/good/brandstore")
export const getDetail = (obj)=>http("get","/api/good/brand_detail",obj)
