export default class Order{
    constructor({checked=true,src,product_id,describe,price,num=1}){
        this.product_id =  product_id;
        this.checked = checked; 
        this.src =  src;
        this.describe =  describe;
        this.price =  price;
        this.num =  num;
        
    }
}