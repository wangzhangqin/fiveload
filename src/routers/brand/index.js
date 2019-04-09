export default{
    path : "/brand",
    component : ()=>import("@/views/brand"),
    name : "brand",
    redirect : "/brand/brandindex",
    children : [
        {
            path : "brandindex",
            name : "brandindex",
            component : ()=>import("@/views/brand/brandIndex/index.vue"),
            meta : {
                footTab : false
            }
        },
        {
            path : "brandtype",
            name : "brandtype",
            component : ()=>import("@/views/brand/brandType"),
            meta : {
                footTab : false
            }
        },
        {
            path : "brandflagship",
            name : "brandflagship",
            component : ()=>import("@/views/brand/brandflagship"),
            meta : {
                footTab : false
            }
        },
        {
            path : "detail/:id",
            name : "detail",
            component : ()=>import("@/views/brand/branddetail"),
            meta : {
                footTab : false
            }
        }
    ]
}