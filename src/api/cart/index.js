import http from "@/utils/http";
export const getInfo = ()=>http("get","/api/cart/cartinfo");