import http from "@/utils/http.js";
export const getColumn = ()=>http("get","/api/index/columu_recommend");
export const getSlider = ()=>http("get","/api/index/index_slider");
export const getButton = ()=>http("get","/api/index/index_button");
export const getOtherAdvert = ()=>http("get","/api/index/other_advert");