export const setStore = (name,content) =>{
    if(!name)return;
    if(typeof content != "string"){
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name,content);
}

export const getStore = (name) => {
    if (!name) return;
    if(window.localStorage.getItem(name)){
        return JSON.parse(window.localStorage.getItem(name));
    }else{
        return [];
    }
	
}