import { resolve } from "path";

function creatOptions(form){
    let isDom = form instanceof HTMLElement;
    if(!isDom){ return; }
    let inputs = form.querySelectorAll('input'),
        len = inputs.length;
    if(len < 1) { return }
    let temp = {};
    [...inputs].forEach((item,index) => {
        let obj = {};
        obj.patten = item.dataset.patten;
        temp[item.getAttribute('name')] = obj;
    }) 
    return temp;
}


export default class Validator{
    constructor(id,option){//传入id和配置项
        this.form = document.querySelector('#'+id);
        let opt  =   creatOptions( this.form )
        this.config = Object.assign(opt,option);
    }
    run(){
        let inputs = this.form.querySelectorAll('input'),
            len = inputs.length;
        if(len<=0){return};
        return   [...inputs].map((item,index) =>{
                    return new Promise((resolve,reject) => {
                        var result = this.validate(item);
                        if(!result.isValidate){
                            reject(result)
                        }else{
                            resolve(result);
                        }
                    })
                })
    }
    validate(ele){
        // debugger;
        
        let name = ele.getAttribute('name'),
            patten = this.config[name].patten,
            val = ele.value;
        const regSame = /same\((\w+)\)/g;
        // console.log(this.config)

        if(regSame.test(patten)){
            regSame.lastIndex = 0; //将lastIndex重置，从头开始搜索
            let arr = regSame.exec(patten);
            var ipt = this.form.querySelector(`input[name=${arr[1]}]`);
            // console.log(ipt)
            if(ipt.value === val){
                return {isValidate:true,message:'ok!',name:name}
            }else{
                return {isValidate:false,message:this.config[name].errorTitle,name:name}
            }
        }else{
            patten.lastIndex = 0;
            if(patten.test(val)){
                return {isValidate:true,message:'ok!',name:name}
            }else{
                return {isValidate:false,message:this.config[name].errorTitle,name:name}
            }
        }
       
    }

}