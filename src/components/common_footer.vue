<template>
    <div class="footer">
      <ul>
        <li class="active"><span class="glyphicon glyphicon-home"></span><p>首页</p></li>
        <li @click="toClassfiy"><span class="glyphicon glyphicon-list"></span><p>分类</p></li>
        <li><span class="glyphicon glyphicon-time"></span><p>发现</p></li>
        <li><span class="glyphicon glyphicon-shopping-cart"></span><p>购物车</p></li>
        <li><span class="glyphicon glyphicon-user"></span><p>我的</p></li>
      </ul> 
    </div>
    
</template>
<script>
  export default{
      data(){
        return {
          scrollTop:0,
          footer:null,
        }
      },
      mounted:function(){
        this.footer =   document.querySelector('.footer');
  
      },
      methods:{
        toLogin(){
          this.$router.push({path:'/login'})
        },
        toClassfiy(){
          this.$router.push({path:'/classfiy'})
        },
    
      },//methods


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