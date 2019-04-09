export default{
    path : "/good",
    component : ()=>import("@/views/good"),
    name : "good",
    children : [
        {
            path : "gooddetail",
            name : "gooddetail",
            component : ()=>import("@/views/good/goodDetail/index.vue"),
            meta : {
                footTab : false
            }
        },
        
    ]
}