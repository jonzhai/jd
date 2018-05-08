<template>
    <div class="footer">
      <ul ref="lis">
        <li :class="{active: curIndex === 0}" @click="toHome"><span class="glyphicon glyphicon-home"></span><p>首页</p></li>
        <li :class="{active: curIndex === 1}" @click="toClassfiy"><span class="glyphicon glyphicon-list"></span><p>分类</p></li>
        <li :class="{active: curIndex === 2}"><span class="glyphicon glyphicon-time"></span><p>发现</p></li>
        <li :class="{active: curIndex === 3}"><span class="glyphicon glyphicon-shopping-cart"></span><p>购物车</p></li>
        <li :class="{active: curIndex === 4}" @click="toPersonalCenter"><span class="glyphicon glyphicon-user"></span><p>我的</p></li>
      </ul> 
    </div>
    
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
      props:{
        index:{
          type: Number,
          required: true
        }
      },
      data(){
        return {
          scrollTop: 0,
          footer: null,
          curIndex: 0
        }
      },
      mounted:function(){
        this.footer =   document.querySelector('.footer');
        this.curIndex = this.index;
      },
      methods:{
        toHome(){
          this.$router.push({path:'/home'});
          this.curIndex = 0;
        },
        toClassfiy(){
          this.$router.push({path:'/classfiy'});
            this.curIndex = 1;
        },
        toPersonalCenter(){
          //如果当前未登陆，则到login
          if(this.curCount){
            this.$router.push({path:'/personalCenter'});
          }else{
            this.$router.push({path:'/login'});
          }
          this.curIndex = 4;
        }
    
      },//methods
      computed:{
        ...mapGetters(['curCount'])
      }
      


  }//export
</script>  
<style scoped>
.footer{
  width: 100%;
  width: 100%;
 	max-width: 640px;
	min-width: 240px;
	margin: 0 auto !important;
  height:50px;
  line-height:50px;
  background-color:#b7b2b2;
  /* padding:5px; */
  position: fixed;
  bottom:0;
  z-index: 99;
  border-top:1px solid #eee; 
  /* transition: all 0.5s; */
}
.footer >ul{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:space-around;
}
.footer > ul li{
  flex:1;
}
.footer > ul li span{
  display: block;
  width: 30px;
  height:30px;
  margin: 0 auto;
  text-align: center;
  padding-top: 7px;
  font-size: 22px;
}
.footer > ul li p{
  height:20px;
  line-height: 20px;
  text-align: center;
  color:white;
  font-size: 0.5em;
}
.footer > ul li.active{
   color:red;
}
.footer > ul li p,
.footer > ul li span
{
  color:inherit;
}

</style>