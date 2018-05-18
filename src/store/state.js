const getState = ()=>{
    return localStorage.getItem('curCount')
} 
const getCarGoods = ()=>{
    var goods = localStorage.getItem('carGoods');
    if(!goods){
        return new Array();
    }else{
        return JSON.parse(goods)
    }
   
}
export const state = {
    loginCount: getState(),//当前登录状态
    carGoods: getCarGoods() 
}

