<template>
 <div id="personal">
    <div class="header">
      <div class="back" @click="goBack"></div>
      <div class="title">我的京东</div>
      <div class="top_nav"><span class="glyphicon glyphicon-option-horizontal"></span></div>
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
          <p><span class="glyphicon glyphicon-cog"></span>账号管理</p>
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
export default {
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
    ...mapActions(['setLoginState'])
  },
  components:{
    commonFooter,
    jdMarket
  }
}
</script>

<style lang="scss" scoped>
  $white :#fff;
#personal{
  background-color: #eee;
  padding-top: 50px;
  position: relative;
  .header{
    display: flex;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #222;
    background-color: $white;
    position: fixed;
    left: 0;
    top: 0;
    .back{
      width:30px;
      background-image:url(../assets/images/sprites.png);
      background-size:200px;
      background-clip:content-box;
      padding:5px;
      background-position:-16px 15px;
    }
    .title{
      text-align: center;
      line-height: 50px;
      flex: 1;
      font-size: 1.2em;
    }
    .top_nav{
       width:50px;
       text-align: center;
       line-height: 50px;
    }
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
    margin-top: 20px;
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
    margin-top: 20px;
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

