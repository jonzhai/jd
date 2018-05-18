import * as types from './mutationsType'
export const setLoginState = ({commit},preload) =>{
    localStorage.setItem('curCount',preload)
    commit(types.SET_LOGSTATE,preload);
}
export const addCarGoods = ({commit,state},preload) =>{
    var preGoods = state.carGoods,
        index = preGoods.findIndex(function(value){
            return value.product_id === preload.product_id;
        })
    if(index !== -1){
        preGoods[index].num ++; 
    }else{
        preGoods.push(preload);
    }
    localStorage.setItem('carGoods',JSON.stringify(preGoods));
    commit(types.SET_CARGOODS,preGoods);
}
export const changeCarGoods = ({commit},preload) =>{
    localStorage.setItem('carGoods',JSON.stringify(preload));
    commit(types.SET_CARGOODS,preload);
}