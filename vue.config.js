
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://apim.restful.5lux.com.cn",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            "/capi": {
                target: "https://mapi.eyee.com",
                changeOrigin: true
            }
        }
    }
}

// 
//https://mapi.eyee.com/capi/product/open/getAssociationalWordListV20
//https://mapi.eyee.com/capi/product/qiuxie/open/homefirstv322