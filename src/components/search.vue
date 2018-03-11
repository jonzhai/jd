<template>
    <div id="search">
      <div class="header">
        <div class="back" @click="goBack"></div>
        <div class="search-container">
          <div>
            <span class="search-icon"></span>
            <input name="searchIpt" placeholder="请输入关键词！" @click="toSearch" autofocus="autofocus">
          </div>
        </div>
        <div class="login" @click="searchWt">搜索</div>
      </div>
      <div class="closeSearch">
          <h6></h6>
          <div class="closeList">
            <span><a href="javascript:void(0);"></a></span>
          
          </div>  
      
      </div>
      <div class="hotSearch"></div>
    
    </div>
  
</template>
<script>
  export default{
      mounted:function(){

      },
      methods:{
        toLogin: function(){
          this.$router.push({path:'/login'});
        },
        toSearch:function(){
          this.$router.push({path:'/search'});
        },
        goBack:function(){
          this.$router.go(-1);
        },
        searchWt:function(){

        }

      }//methods

  }//export




</script>  
<style scoped>
.header{
  width:100%;
  height:50px;
  line-height:50px;
  background-image:url(../assets/images/header-bg.png);
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
  border:1px solid #666;
}
.search-container>div{
  display:flex;
  width:100%;
  height:100%;
}
.back,
.search-icon{
  width:30px;
  background-image:url(../assets/images/sprites.png);
  background-size:200px;
  background-clip:content-box;
  padding:5px;
}
.back{
  background-position:-18px 5px;
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
  color:#666;
  font-size:1.2em;
}
</style>