<template>
    <div class="cart">
        <div class="header-container">
            <Header title="购物车"></Header>
        </div>
        <div class="adress-container">
            <div class="adress">地址...</div>
            <div class="edit" @click="toggleEdit"><span v-show="!isEdit">编辑商品</span><span v-show="isEdit">取消编辑</span></div>
        </div>
        <div class="order-container">
            <Order v-for="(item,index) in getCarGoods" :key="index" :itemIndex="index"></Order>
            <div class="confirm-container" v-show="showMask">
                <Confirm title="确认删除吗？" @confirm="confirmDel" @cancel="cancelDel"></Confirm>
            </div>
        </div>
        <div class="emptyBg" v-if="!getCarGoods.length">
            <img src="../../assets/images/buy-logo.png" alt="">
            <p>当前购物车为空！</p>
        </div>
        <div class="footer">
           <div class="option">
               <Radio :checked="ischecked" @checked="lock" @unchecked="unlock"></Radio>
               <p>全选</p>
           </div>
           <div class="controlBtns">
               <div class="money" v-show="!isEdit">
                    总计：<span>{{getTotal.money | dollar}}</span>
                </div>
                <div class="checkOut" :class="{red:getTotal.num !== 0,grey:getTotal.num === 0}" @click="payTheBill" v-show="!isEdit">
                    <span class="leads">去结算</span><span>({{getTotal.num}}件)</span>
                </div>
                <div class="del" v-show="isEdit" @click="delOrders">
                    删除
                </div>
           </div>
           
        </div>
    </div>
</template>
<script>
import Header from 'base/header/header';
import Order from 'components/orders/order';
import Radio from 'base/radio/radio';
import Confirm from 'base/confirm/confirm';

import {mapGetters,mapActions,mapMutations} from 'vuex';
export default {
    data(){
        return{
            orderList:[],//购物车订单列表
            ischecked:  true,//是否全选
            isEdit: false//当前是否处于编辑状态
        }
    },
    beforeRouteEnter (to, from, next) {
       next(vm => {
           vm.ischecked = vm.getTotal.checkAll;
        })
    },
    methods:{
        lock(){

            this.ischecked = true;
            var newarr = this.getCarGoods.map((item,index) =>{
                item.checked = true;
                return item;
            })
            this.changeCarGoods(newarr);
        },
        unlock(){
            // debugger;
            this.ischecked = false;
            var newarr = this.getCarGoods.map((item,index) =>{
                item.checked = false;
                return item;
            })
            this.changeCarGoods(newarr);
        },
        payTheBill(){
            if(this.getTotal.num === 0){return };
            alert("总共: $"+this.getTotal.money)
        },
        toggleEdit(){
            if(!this.isEdit){
                this.isEdit = true;
                var temp = JSON.stringify(this.getCarGoods);
                this.copyList = JSON.parse(temp);
                this.unlock();  
                this.execDel = false;
            }else{
                this.isEdit = false;
                if(!this.execDel){
                    this.changeCarGoods(this.copyList);
                }
            }

        },
        delOrders(){
            if(this.getTotal.num === 0){ return };
            this.setMask(true);
           
        },
        confirmDel(){
            this.setMask(false);
            this.execDel = true;
        
            var newarr = this.getCarGoods.filter(item =>{
                return  item.checked === false;
            })
            this.changeCarGoods(newarr);
            if(newarr.length === 0){
                this.toggleEdit();
                return;
            }
        },
        cancelDel(){
             this.setMask(false);
             this.changeCarGoods(this.copyList);
        },
        ...mapActions(['changeCarGoods']),
        ...mapMutations({
            setMask: 'SET_MASK'
        })
    },
    computed:{
        ...mapGetters(['getCarGoods','getTotal','showMask']),

    },
    watch:{
        getTotal:function(val){
            this.ischecked = this.getTotal.checkAll;
        }
    },
    components:{
        Header,
        Order,
        Radio,
        Confirm
    },
    filters:{
        dollar:function(input){
            return "$"+input;   
        }
    }
}

</script>
<style lang="scss" scoped>
   .cart{
       .header-container{
           border-bottom: 1px solid rgba($color: #000000, $alpha: 0.3);
       }
       .adress-container{
           height: 50px;
           border-bottom: 1px solid rgba($color: #000000, $alpha: 0.3);
           display:flex;
           justify-content: space-between;
           align-items: center;
           padding: 0 5px;
           .adress{
               color:#666;
               width: 4em;
               height: 100%;
                display:flex;
                justify-content: center;
                align-items: center;
           }
           .edit{
               width: 4em;
               height: 100%;
                display:flex;
                justify-content: center;
                align-items: center;
               span{
                    color:red;
                    flex: 1;
               }
               
           }
       }
       .order-container{
           position: relative;
           .confirm-container{
               position: absolute;
                z-index: 991;
               left: 50%;
               top: 200px;
               transform: translate3d(-50%,-50%,0);
           }
       }
       .footer{
            width: 100%;
            max-width: 640px;
            min-width: 240px;
            margin: 0 auto;
            height:50px;
            position: fixed;
            bottom:0;
            z-index: 99;
            border-top:1px solid #eee;
            background-color: #fff; 
            display: flex;
            justify-content: space-between;
            padding: 0 5px;
            .option{
                width: 40px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p{
                    margin:3px 0 0;
                }
            }
            .controlBtns{
                width: 260px;
                display: flex;
                justify-content: flex-end;
                .money{
                    flex: 1;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    font-size: 1.3em;
                }
                .checkOut{
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 10px;
                    color:#fff;
                    .leads{
                    font-size: 1.5em; 
                    }
                    &.red{
                        background-color: #e4393c;
                    }
                    &.grey{
                        background-color: #666;
                    }
                }
                .del{
                    width: 130px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 10px;
                    color:#fff;
                    background-color: #e4393c;
                     font-size: 1.5em; 
                }
            }
           
        }
        .emptyBg{
            position: fixed;
            left: 50%;
            top: 30%;
            transform: translate3d(-50%,-50%,0);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
   }
</style>
