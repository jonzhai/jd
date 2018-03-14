<template>
    <div class="footer">
      <ul>
        <li class="active"><span></span><p>首页</p></li>
        <li><span></span><p>分类</p></li>
        <li><span></span><p>发现</p></li>
        <li><span></span><p>购物车</p></li>
        <li><span></span><p>我的</p></li>
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
        //  window.addEventListener('scroll',this.menu);
        this.footer.style.width = document.body.clientWidth+"px";
      },
      methods:{
        toLogin(){
          this.$router.push({path:'/login'})
        },
      },//methods


  }//export
</script>  
<style scoped>
.footer{
  /* width: 100%; */
  height:50px;
  line-height:50px;
  background-color:#b7b2b2;
  /* padding:5px; */
  display:flex;
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
  background-image: url(../assets/images/sprites.png);
  background-size:250px;
  background-clip: content-box; 
}
.footer > ul li p{
  height:20px;
  line-height: 20px;
  text-align: center;
  color:white;
  font-size: 0.5em;
}
.footer > ul li.active p{
  color:red;
}
.footer > ul li:first-child span{
  background-position: -41px -36px;
}
.footer > ul li:nth-child(2) span{
  background-position: 0 -29px;
}
.footer > ul li:nth-child(3) span{
  background-position: -195px -86px;
}
.footer > ul li:nth-child(4) span{
  background-position: -120px -31px;
}
.footer > ul li:nth-child(5) span{
  background-position: -154px -31px;
}
</style>