<template>
 <div id="personal">
    <div class="header-container">
      <Header title="我的京东"></Header>
    </div>
    <div class="banner">
      <div class="banner-container">
        <div class="headPortrait">
            <img src="../assets/images/buy-pro1.jpg" alt="">
        </div>
        <div class="countMessage">
          <p>{{curCount}} <span class="glyphicon glyphicon-off" @click="logout"></span></p>
          <p>用户名：{{curCount}}</p>
        </div> 
        <div class="countManager">
          <p @click="toCountManager"><span class="glyphicon glyphicon-cog"></span>账号管理</p>
        </div>
      </div>
    </div>
    <div class="orders">
        <div class="order-item">
          <img src="../assets/images/buy-pro1.jpg" alt="">
          <p>代收款</p>
        </div>
        <div class="order-item">
          <img src="../assets/images/buy-pro1.jpg" alt="">
          <p>代收货</p>
        </div>
        <div class="order-item">
          <img src="../assets/images/buy-pro1.jpg" alt="">
          <p>退换/售后</p>
        </div>
        <div class="order-item">
          <img src="../assets/images/buy-pro1.jpg" alt="">
          <p>全部订单</p>
        </div>
    </div>
    <div class="history">
      <div class="history-item">
        <p>{{1}}</p>
        <p>关注的商品</p>
      </div>
      <div class="history-item">
        <p>{{1}}</p>
        <p>关注的店铺</p>
      </div>
      <div class="history-item">
        <p>{{1}}</p>
        <p>浏览记录</p>
      </div>
    </div>
    <div class="recommd">
        <h4 class="recommd-title">为您推荐</h4>
        <jd-market></jd-market>
    </div>
    <common-footer :index="4"></common-footer>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';
import commonFooter from './common_footer.vue';
import jdMarket from './jdMarket.vue';
import Header from '../base/header/header';

export default {
  data(){
    return {
        navshow: false
    }
  },
  computed:{
      ...mapGetters(['curCount'])
  },
  methods:{
    goBack(){
      this.$router.back();
    },
    logout(){
      this.setLoginState('');
      this.$router.push('/login')
    },
    openTopNav(){
        this.navshow = !this.navshow;
    },
    toCountManager(){
      this.$router.push('/countManage')
      
    },
    ...mapActions(['setLoginState'])
  },
  components:{
    commonFooter,
    jdMarket,
    Header
  }
}
</script>

<style lang="scss" scoped>
  $white :#fff;
#personal{
  background-color: #eee;
  // padding-top: 50px;
  position: relative;
  .header-container{
    height: 50px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    // background-color: $white;
    // position: fixed;
    // left: 0;
    // top: 0;
    background-image: linear-gradient(0,#e0e0e0,#e0e0e0 50%,transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom
  }
  .banner{
    padding: 10px;
    height: 150px;
    background-color: $white;
    .banner-container{
      width: 100%;
      height: 100%;
      display: -webkit-flex;
      display: flex;
      border-radius: 5px;
      background-color: rgba(255 ,0, 0,0.5);
      .headPortrait{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 80%;
          border-radius: 50%; 
        }
      }
      .countMessage{
        flex: 2;
        padding: 25px 0;
        display: flex;
        flex-direction: column;
        text-align: left;
        >p{
          &:first-child{
            margin-top: 10px;
          }
          flex: 1;
          line-height: 1.2em;
        }
      }
      .countManager{
        flex:1;
        padding: 20px 0;
      }
    }

  }
  .orders{
    margin-top: 10px;
    background-color: $white;
    display: flex;
    height: 90px;
    >.order-item{
      flex:1;
      padding: 10px;
      img{
        display: block;
        margin: 0 auto;
        width: 50%;
      }
      p{
        text-align: center;
        line-height: 1.2em;
        margin-top: 10px;
      }
    }
  }
  .history{
    margin-top: 10px;
    background-color: $white;
    display: flex;
    height: 90px;
    >.history-item{
      flex: 1;
      padding: 10px;
      text-align: center;
    }
  }
  .recommd{
    margin-top: 10px;
    .recommd-title{
      background-color: $white;
      padding: 10px 0;
    }
  }
}
</style>

