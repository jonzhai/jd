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
        <div class="top_nav"><span class="glyphicon glyphicon-option-horizontal"></span></div>
      </div>
      <div class="content">
        <div class="left">
          <scroll ref="listContent" :data="classList" @click.native ="sClick">
            <ul class="leftNav">
              <li v-for="(item,index) in classList">{{item}}</li>
            </ul> 
          </scroll>
        </div>
        <div class="right">
          <scroll>
            <div class="detail">

            </div>
          </scroll>
        </div>
          
      </div>
    </div>
  
</template>
<script>
  import scroll from '../base/scroll/scroll.vue';
  export default{
      data(){
        return {
          classList:[1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6],

        }
      },
      mounted:function(){
         
      },
      methods:{
        goBack(){
          this.$router.go(-1);
        },
        toSearch(){
          this.$router.push({path:'/search'})
        },
        sClick(e){
          console.log(e)
          this.$refs.listContent.scrollToElement(e.target, 300,0,e.layerY-30)
          
        }
      },//methods
      components:{
        scroll
      }

  }//export




</script>  
<style lang="scss" scoped>
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
.content{
  margin-top: 50px;
  display: flex;
  .left{
    flex:1;
    background-color: #eee;
    text-align: center;
    height: 300px;
    // overflow: hidden;
    .leftNav{
      li{
        padding: 5px 0;
      }
    }
  }
  .right{
    flex:4;
  }
}
</style>