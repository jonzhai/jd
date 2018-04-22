// export default String.prototype.trim = function(){
//     return this.replace(/(^\s*)|(\s*$)/g,'');
// }

let toast = function(message){
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
let trim = function(){
    return String.prototype.trim = function(){
        return this.replace(/(^\s*)|(\s*$)/g,'');
    }
}
export {
    toast,
    trim
}