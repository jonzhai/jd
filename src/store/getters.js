
export const curCount = state => state.loginCount;
export const getCarGoods = state => state.carGoods;
export const getTotal = state => {
    var obj = {
        money:0,
        num:0,
        checkAll: true
    };
    state.carGoods.map((item,index) =>{
        if(item.checked){
            obj.num += item.num;
            obj.money += item.num * item.price;
        }else{
            obj.checkAll = false; 
        }

    })
    return obj;
}
