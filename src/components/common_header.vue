<template>
    <div class="header">
        <div class="search-container">
          <div>
            <span class="logo"></span>
            <span class="search-icon"></span>
            <input name="searchIpt" placeholder="请输入关键词！" @click="toSearch">
          </div>
        </div>
        <div class="login" @click="toLogin" v-if="!curCount">登录</div>
        <div class="login" @click="toPersonalCenter" v-if="curCount"><span class="glyphicon glyphicon-user"></span></div>
    </div>
    
</template>

<script>
import {mapGetters} from 'vuex'
  export default{
      data(){
        return {
          scrollTop:0,
          header:null,
          // id:'',
        }
      },
      mounted:function(){
        this.header =   document.querySelector('.header');
         window.addEventListener('scroll',this.menu);
        //  if(typeof this.$route.params.id !== undefined){
        //    this.id = this.$route.params.id;
        //  }
        console.log(this.isLogin)
      },
      methods:{
        toLogin(){
          this.$router.push({path:'/login'})
        },
        toSearch(){
          this.$router.push({path:'/search'})
        },
        toPersonalCenter(){
          this.$router.push({path:'/personalCenter'})
        },
        menu() {
          this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
          var rate= this.scrollTop/200;
          if(rate>1){
            rate =1;
          };
          this.header.style.backgroundColor='rgba(201, 21, 35,'+rate+')';
        },
      },//methods
      computed:{
          ...mapGetters(['curCount'])
       
      }


  }//export
</script>  
<style scoped>
.header{
  width: 100%;
 	max-width: 640px;
	min-width: 240px;
	margin: 0 auto !important;
  height:50px;
  line-height:50px;
  background-color:rgba(196,0,0,0);
  padding:10px;
  display:flex;
  position: fixed;
  z-index: 99;
  border-top:1px solid #eee; 
  /* transition: all 0.5s; */
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
  width:40px;
  height:100%;
  line-height:30px;
  text-align:center;
  color:#FFF;
  font-size:1.2em;
}
</style>