<template>
    <div class="header">
        <div class="search-container">
          <div>
            <span class="logo"></span>
            <span class="search-icon"></span>
            <input name="searchIpt" placeholder="请输入关键词！" @click="toSearch">
          </div>
        </div>
        <div class="login" @click="toLogin">登录</div>
    </div>
</template>
<script>
  export default{
      mounted:function(){

      },
      methods:{
        toLogin: function(){
          this.$router.push({path:'/login'})
        },
        toSearch:function(){
          this.$router.push({path:'/search'})
        }


      }//methods

  }//export




</script>  
<style scoped>
.header{
  width:100%;
  height:50px;
  line-height:50px;
  background-color:rgba(196,0,0,1);
  padding:10px;
  display:flex;
  position:fixed;
  top:0;
}
.search-container{
  height:30px;
  flex:1;
  background-color:#fff;
  border-radius:20px;
}
.search-container>div{
  display:flex;
  width:100%;
  height:100%;
}
.search-container .logo,
.search-container .search-icon{
  width:30px;
  background-image:url(../assets/images/sprites.png);
  background-size:200px;
  background-clip:content-box;
  padding:5px;
}
.search-container .logo{
  background-position:5px 8px;
}
.search-container .search-icon{
  background-position:123px 8px;
}
.search-container input[name="searchIpt"]{
  flex:1;
  border-radius:20px;
 
}
.login{
  width:50px;
  height:100%;
  line-height:30px;
  text-align:center;
  color:#FFF;
  font-size:1.2em;
}
</style>