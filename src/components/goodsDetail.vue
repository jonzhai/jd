<template>
  <div class="detail-container">
      <div class="header">
          <div class="back" @click="back">
              <!-- <span class="glyphicon glyphicon-menu-left"></span> -->
          </div>
          <ul class="tab" @click="changeTab" ref="ul">
              <router-link tag="li" to="goods" replace data-id=0  data-to="goods">商品</router-link>
              <router-link tag="li" to="detail" replace data-id=1 data-to="detail">详情</router-link>
              <router-link tag="li" to="evalute" replace data-id=2 data-to="evalute">评价</router-link>
          </ul>
          <div class="top_nav" @click="openTopNav"><span class="glyphicon glyphicon-option-horizontal"></span></div>
            <transition name="slide1" mode="out-in">
                <div class="nav-container" v-show="navshow">
                    <vertial-nav></vertial-nav>
                </div>
            </transition>
      </div>
      <div class="content">
        <transition :name="slideDrection">     
            <router-view></router-view>
        </transition>   
      </div>
      <div class="footer">
          <ul class="navs">
              <li>卖家</li>
              <li>进店</li>
              <li>购物车</li>
          </ul>
          <div class="btn-contain">
              <div class="add-car">加入购物车</div>
              <div class="buy-now">立即购买</div>
          </div>
      </div>
  </div>
</template>
<script>
import vertialNav from '../base/vertialNav/vertialNav.vue';
import $$ from "src/assets/js/myTouch.js";
export default {
  data(){
    return {
        navshow: false,
        curIndex: 0,
        slideDrection: 'slide-right'
    }
  },
  mounted:function(){
      var me =this;
        $$('.content').on('swipleft',function(e){
            if(me.curIndex<2){
                me.slideDrection = "slide-right";
                me.curIndex++;
               var adress =  me.$refs.ul.children[me.curIndex].dataset.to;
               me.$router.replace(adress);
            }
        })
         $$('.content').on('swipright',function(e){
            if(me.curIndex > 0){
                 me.slideDrection = "slide-left";
                me.curIndex--;
               var adress =  me.$refs.ul.children[me.curIndex].dataset.to;
               me.$router.replace(adress);
            }
        })
     
  },
  methods:{
    openTopNav(){
        this.navshow = !this.navshow;
    },
    back(){
        this.$router.back();
    },
    changeTab(e){
        this.slideDrection = "slide-right";
        this.curIndex = e.target.dataset.id;
    }
  },
  components:{
      vertialNav
  }
}
</script>

<style lang="scss" scoped>
    .detail-container{
        display: flex;
        flex-direction: column;
        height:100vh;
        .header{
            height: 50px;
            display: flex;
            position: relative;
            border-bottom: 1px solid #e5e5e5;
            .back{
                width: 50px;
                // font-size: 2em;
                // line-height: 50px;
                // text-align: center;
                // width:30px;
                background-image:url(../assets/images/sprites.png);
                background-size:250px;
                background-clip:content-box;
                background-position: -14px 10px;
                padding:10px 15px;
            }
            .tab{
                flex: 1;
                margin: 0;
                display: flex;
                justify-content: center;
                li{
                    width: 20%;
                    line-height: 50px;
                    text-align: center;
                    &.router-link-active{
                        border-bottom: 2px solid #666; 
                    }
                }
            }
            .top_nav{
                width: 50px;
                font-size: 1.5em;
                line-height: 50px;
                text-align: center;
            }
            .nav-container{
                position: absolute;
                right: 10px;
                bottom: -210px;
            }
        }
        .content{
            flex:1;
            overflow-x: hidden;
            overflow-y: auto;
        }
        .footer{
            height: 50px;
            display: flex;
            border-top: 1px solid #e5e5e5;
            .navs{
                flex: 1;
                margin: 0;
                display: flex;
                li{
                    flex: 1;
                    text-align: center;
                    line-height: 50px;
                }
            }
            .btn-contain{
                flex: 1;
                display: flex;
                div{
                    flex:1;
                    line-height: 50px;
                    text-align: center;
                    color: #fff;
                    &.add-car{
                        background-color: #ffb03f;
                    }
                     &.buy-now{
                        background-color: #f23030;
                    }
                }
            }
        }

    }
    .slide-right-enter-active,.slide-left-enter-active,.slide1-enter-active,.slide1-leave-active{
        transition: all 0.5s;
    }
    .slide-right-enter{
          transform: translate3d(400px,20px,0)
    }
  .slide-left-enter{
          transform: translate3d(-400px,20px,0)
    }
    .slide1-enter,.slide1-leave-to{
          transform: translate3d(100px,0,0)
    }
</style>


