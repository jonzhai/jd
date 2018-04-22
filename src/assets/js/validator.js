export default class Validator{
    constructor(id,option){//传入id和配置项
        this.form = document.querySelector('#'+id);
        // if(typeof option === "undefined"){return;}
        this.option = option;
    }
    run(){
        let inputs = this.form.querySelectorAll('input'),
            len = inputs.length,
            pArr = [];
        if(len<=0){return};
        for(let i = 0; i < len; i++){
            pArr.push(this._validate(inputs[i]));
        }
        let str = '';
        pArr.map(item =>{
            if(item.isValidate === false){
                str += `${item.name}不满足要求！\n`
            }
        });
        if(str.length !== 0){
            str += `请详细检查以上参数！`;
            this.display(str);
            return false;
        }else{
            return true;
        }
        
    }
    _validate(ele){
        let name = ele.getAttribute('name'),
            reg = ele.dataset.reg,
            val = ele.value;
        console.log(val);
        // if(typeof this.option ==="undefined"){return};
        // let len = this.option.length;
        // for(let i = 0; i < len;i++){
        //     if(option[i].name === name){
        //         reg = option[i].reg;
        //         return;
        //     }
        // }
        let reg1 = new RegExp(reg,'g');
        if(reg1.test(val.replace(/(^\s*)||(\s*$)/g,''))){
            return {name:name,isValidate:true}
        }else{
            return {name:name,isValidate:false}
        }

     
    }
    display(message){
        var dv= document.createElement('div'),
            p= document.createElement('p');
        dv.style.cssText = "width:100%;height:2em;line-height:2em;font-size:1.5em;position:fixed;left:0;top:30%;padding:0 10px;opacity:0.8;";
        p.style.cssText = "background:red;color:white;width:100%;";
        p.innerText = message;
        dv.appendChild(p);
        document.body.appendChild(dv);
        setTimeout(function(){
            document.body.removeChild(dv);
        },5000)
    }
}