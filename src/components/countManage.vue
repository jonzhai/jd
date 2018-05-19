<template>
  <div class="countManage">
      <div class="header-container">
          <Header title="账号管理"></Header>
      </div>
      <section class="content">
            <div class="count-title">当前登录账号</div>
            <div class="count-detail">
                <div class="left"></div>
                <div class="right">
                    <p>{{curCount}}</p>   
                    <p>邮箱：{{email}}</p>   
                </div>
            </div>
            <ul class="play-list">
                <li>修改登录密码<span class="glyphicon glyphicon-chevron-right"></span></li>
                <li>绑定手机号码<span class="glyphicon glyphicon-chevron-right"></span></li>
                <li>支付密码管理<span class="glyphicon glyphicon-chevron-right"></span></li>
                <li>收货地址管理<span class="glyphicon glyphicon-chevron-right"></span></li>
                <li>切换站点<span class="glyphicon glyphicon-chevron-right"></span></li>
                <li>实名认证<span class="glyphicon glyphicon-chevron-right"></span></li>
                <li>关联账号<span class="glyphicon glyphicon-chevron-right"></span></li>
            </ul>
      </section>
      <div class="footer">
          <div class="foot-contain">
              <p><span class="glyphicon glyphicon-xbt"></span>意见反馈</p>
              <p><span class="glyphicon glyphicon-xbt"></span>京东客户端</p>
              <p @click="logout"><span class="glyphicon glyphicon-xbt"></span>退出登录</p>
          </div>
          <div class="logo"></div>
      </div>
  </div>
</template>
<script>
import Header from 'src/base/header/header.vue';
import {mapGetters,mapActions} from 'vuex';

export default {
    data(){
        return{
            email:'未设置'
        }
    },
    computed:{
        ...mapGetters(['curCount'])
    },
    methods:{
        logout(){
            this.setLoginState('');
            this.$router.push('/login')
        },
         ...mapActions(['setLoginState'])
    },
    components:{
        Header
    },
}
</script>
<style lang="scss" scoped>
@mixin pd-bd{
    margin: 0 10px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(0,0,0,0.3);
}
.countManage{
    font-size: 14px;
    background: #efefef;
    .header-container{
        border-bottom: 1px solid rgba(0,0,0,0.3);
        background-color: #fff;
    }
    .content{
        background-color: #fff;
        .count-title{
            @include pd-bd;
        }
        .count-detail{
            display: flex;
            margin: 12px 10px 0 10px;

            border-bottom: 1px solid rgba(0,0,0,0.3);
            .left{
                width: 50px;
                height: 50px;
                border-radius:50%;
                overflow: hidden; 
                background: brown;
                margin-right: 10px;
            }
            .right{
                flex: 1;
            }
        }
        .play-list{
            li{
               @include pd-bd; 
               overflow: hidden;
               span{
                   float: right;
                   margin-right: 5px; 
               }
               &:last-child{
                   border: none;
               }
            }
        }
    }
    .footer{
        overflow: hidden;
        .foot-contain{
            display: flex;
            overflow: hidden;
            p{
                flex:1;
                margin:0 10px;
                padding: 5px 0;
                background-color: #fff;
                text-align: center;
            }
        }
        .logo{
            width: 100px;
            height: 40px;
            margin: 10px auto;
            background-image: url(../assets/images/buy-logo.png);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;  
        }
    }

}
</style>

