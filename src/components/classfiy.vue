<template>
    <div id="search">
      <div class="header">
        <div class="back" @click="goBack"></div>
        <div class="search-container">
          <div>
            <span class="search-icon"></span>
            <input id="searchIpt" name="searchIpt" placeholder="请输入关键词！" @click="toSearch" autofocus="autofocus">
          </div>
        </div>
        <div class="top_nav" @click="openTopNav"><span class="glyphicon glyphicon-option-horizontal"></span></div>
      </div>
    </div>
  
</template>
<script>
  export default{
      data(){
        return {
          

        }
      },
      mounted:function(){
         
      },
      methods:{
        goBack(){
          this.$router.go(-1);
        },
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
  position: absolute;
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
  background-position:-16px 5px;
}
.search-container .search-icon{
  background-position:123px 8px;

}
.top_nav{
  width:30px;
  padding:5px;
}
.top_nav>span{
  position: relative;
  top:-12px;
  left:3px;
}
.search-container .top_nav{
  background-position:123px 8px;

}
.search-container input[name="searchIpt"]{
  flex:1;
  border-radius:20px;
 
}
.filter1{
  display: flex;
   justify-content:space-around;
   padding: 5px;
   border-top:1px solid #eee; 
  border-bottom:1px solid #eee; 
  margin-top: 50px;
}
.filter1 >div{
  flex: 1;
  padding: 5px;
  text-align: center;
}
.filter1 >div span{
  height: 30px;
}
.filter2{
  margin-top: 0;
}
.filter2>div{
  background-color: #eee;
  margin: 0 5px;
  border-radius: 3px;
}
.filter2>div span{
  color:#666;
}
</style>