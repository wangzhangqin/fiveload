export default{
    path : "/search",
    component : ()=>import("@/views/search"),
    name : "search",
    children : [
        {
            path : "door",
            name : "door",
            component : ()=>import("@/views/search/searchDoor"),
            meta : {
                footTab : false
            }
        },
        {
            path : "index",
            name : "index",
            component : ()=>import("@/views/search/searchindex"),
            meta : {
                footTab : false
            }
        }
    ]
}