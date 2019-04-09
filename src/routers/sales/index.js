export default{
    path : "/sales",
    component : ()=>import("@/views/sales"),
    name : "sales",
    redirect : "/sales/news",
    children : [
        {
            path : "news",
            name : "news",
            component : ()=>import("@/views/sales/news/index.vue"),
            meta : {
                footTab : false
            }
        }
    ]
}