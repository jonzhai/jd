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
        <div class="login" @click="toSearchWt">搜索</div>
      </div>
      <div class="closeSearch" v-if="clLists.length">
          <h4>最近搜索</h4>
          <div class="closeList">
            <span v-for="item in clLists"><a href="javascript:void(0);" :data-id="item.cat_id">{{item.content}}</a></span>
          </div>  
      </div>
      <div class="hotSearch closeSearch">
          <h4>热门搜索</h4>
          <div class="closeList">
            <span v-for="item in hotLists"><a href="javascript:void(0);" :data-id="item.cat_id">{{item.content}}</a></span>
          </div>  
      </div>
    
    </div>
  
</template>
<script>
  export default{
      data(){
        return {
            clLists:[],
            hotLists:[]

        }
      },
      mounted:function(){
         this.$axios.get('/src/assets/data/test.json')
          .then(response => {
           this.clLists = response.data.clLists;
            this.hotLists = response.data.hotLists;
          })
          .catch(error=>{
            console.log(error);
          });

      },
      methods:{
        toLogin(){
          this.$router.push({path:'/login'});
        },
        toSearch(){
          this.$router.push({path:'/search'});
        },
        goBack(){
          this.$router.go(-1);
        },
        toSearchWt(){
          var keyWord = document.querySelector('searchIpt').value;
          sessionStorage.setItem("searchKeyWord",keyWord);
          this.$router.push({path:'/goodsListPage'});
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
.closeSearch{
  padding: 10px;
}
.closeSearch >h4{
  padding: 0 8px;
}
.closeList{
  display: flex;
  flex-wrap:wrap;
}
.closeList >span{
  text-align: center;
  margin:5px 5px;
  border-radius: 5px;
}
.closeList >span a{
  padding: 3px 5px;
  color:#686868;
  background-color: #f0f2f5;
}
</style>