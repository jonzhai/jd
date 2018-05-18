<template>
    <div class="order">
        <div class="option" >
            <Radio :checked="curOrder.checked" @checked="lock" @unchecked="unlock"></Radio>
        </div>
        <div class="pic-container">
            <img :src="curOrder.src" alt="">
        </div>
        <div class="desc">
            <p class="title">{{curOrder.describe}}</p>
            <div class="operate-container">
                <span class="price">{{curOrder.price | dollar}}</span>
                <div class="operate">
                    <span @click="decrease">-</span>
                    <input ref="ipt" type="text" :value="curOrder.num" @input="changeNum">
                    <span @click="increase">+</span>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import Radio from 'base/radio/radio';
import {mapGetters,mapActions} from 'vuex';
export default {
    props:{
        itemIndex:{
            type: Number,
            required: true
        }

    },
    data(){
        return {
            orderList:[]
        }
    },
    // mounted:function(){
    // //    this.getCarGoods=  this.getCarGoods;
    //    this.curOrder = ;
    // },
    methods:{
        lock(){
           this.curOrder.checked = true; 
           this.changeCarGoods(this.getCarGoods);
        },
        unlock(){
           this.curOrder.checked = false; 
           this.changeCarGoods(this.getCarGoods);
        },
        decrease(){
            if( this.curOrder.num >1){
                this.curOrder.num --;
                this.changeCarGoods(this.getCarGoods);
            }
        },
        increase(){
            if( this.curOrder.num <200){
                this.curOrder.num ++;
                this.changeCarGoods(this.getCarGoods);
            }
        },
        changeNum(){
           var value =  this.$refs.ipt.value;
           try{
               this.curOrder.num = parseInt(value)
               this.changeCarGoods(this.getCarGoods);
           } catch(err){
               console.log(err)
               return;
           }
        },
        
        ...mapActions(['changeCarGoods'])
    },
    computed:{
        curOrder:function(){
            return this.getCarGoods[this.itemIndex];
        },
        ...mapGetters(['getCarGoods'])
        
    },
    components:{
       Radio 
    },
    filters:{
        dollar:function(input){
             return "$"+input;   
        }
    }
}
</script>
<style lang="scss" scoped>
    .order{
        height: 150px;
        background-color: #eee;
        display: flex;
        margin-bottom: 10px;
        padding: 5px;
        .option{
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .pic-container{
            width: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 100%;
            }
        }
        .desc{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            padding: 5px;
            .title{
                font-weight: bold;
            }
            .operate-container{
                display: flex;
                justify-content: space-between;
                .price{
                    color:#f00;
                    line-height: 30px;
                    font-size: 1.2em;
                }
                .operate{
                     display: flex;
                     input{
                         height: 30px;
                         width: 45px;
                         text-align: center;
                     }
                     span{
                         width: 30px;
                         height: 30px;
                         line-height: 30px;
                         text-align: center;
                     }
                }
            }
        }
    }
</style>


