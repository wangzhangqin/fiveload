
module.exports = {
    devServer:{
        proxy:{
           "/api":{
               target:"https://apim.restful.5lux.com.cn",
               changeOrigin:true,
               pathRewrite:{
                   "^/api":""
               }
           }
        }
    }
}