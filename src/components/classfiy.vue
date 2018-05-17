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
      <div class="content" ref="content">
        <div class="left">
          <scroll ref="listContent" :data="classList" @click.native ="sClick">
            <ul class="leftNav">
              <li v-for="(item,index) in classList" :data-index="index" :class="{active:index == curIndex}" ref="lis" :key="index">{{item}}</li>
            </ul> 
          </scroll>
        </div>
        <div class="right">
          <scroll ref="listDetail"  :data="contentList.lsits" @click.native="toSearchGoods" >
            <div class="detail">
                <div class="banner" v-if="contentList.banner"><img :src="contentList.banner" alt=""></div>
                <div class="lists">
                    <div class="item" v-for="(item,index) in contentList.lsits" :key="index">
                        <h4>{{item.title}}</h4>
                        <ul class="list-content">
                            <li v-for="(li,index) in item.goods" :key="index" :data-classid="li.classId">
                                <img :src="li.pic" alt="">
                                <p>{{li.des}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </scroll>
        </div>
          
      </div>
      <common-footer :index="1"></common-footer>
    </div>
  
</template>
<script>
  import scroll from '../base/scroll/scroll.vue';
  import commonFooter from './common_footer.vue';
  export default{
      data(){
        return {
          classList:["热门推荐","手机数码","家用电器","热门推荐","手机数码","家用电器","热门推荐","手机数码","家用电器"],
          curIndex: 0,
          contentList:[]
        }
      },
      mounted:function(){
        // console.log(this.$refs.content.clientHeight,document.documentElement.clientHeight);
        var height = document.documentElement.clientHeight-100;
        // if(this.$refs.content.clientHeight > height){
            this.$refs.content.style.height = height+'px';
        // }
        this.getData("热门推荐");
      },
      methods:{
        goBack(){
          this.$router.go(-1);
        },
        toSearch(){
          this.$router.push({path:'/search'})
        },
        sClick(e){
          if(e.target.nodeName !== "LI"){return;};
          // console.log(e.target.innerText)
          this.$refs.listContent.scrollToElement(e.target,0);
          this.curIndex = e.target.dataset.index;
          this.getData(e.target.innerText);
          this.$refs.listDetail.scrollTo(0,0,500);
        },
        getData(name){
          this.$axios.get('src/assets/data/classfiy.json').then((res) =>{
              if(res.data.status == 0){
                  this.contentList = res.data[name];
                  // console.log(this.contentList)
              }
            }).catch((err) => {
              console.log(err)
            })
        },
        toSearchGoods:function(e){
          var parent = e.target.parentNode;
          if(parent.nodeName == "LI"){
              console.log(parent.dataset.classid);
               this.$router.push({path:`/goodsListPage/${parent.dataset.classid}`});
          }
        }
      },//methods
      components:{
        scroll,
        commonFooter
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
  // height: 617px;
  .left{
    flex:1;
    background-color: #eee;
    text-align: center;
    height: 100%;
    // overflow: hidden;
    .leftNav{
      li{
        padding: 10px 0;
        &.active{
          background-color: #fff;
          color:#f00;
        }
      }
    }
  }
  .right{
    flex:4;
    height: 100%;
    .detail{
        padding: 10px;
        .banner{
          height: 80px;
          img{
            width:100%;
            height: 100%;
          }
        }
        .lists{
          .item{
            h4{
              padding: 5px 0;
            }
            ul{
              display: flex;
              width: 100%;
              flex-wrap: wrap;
              justify-content: flex-start;
              li{
                flex:0 0 33.3%;
                padding: 5px;
                height: 80px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 10px;
                overflow: hidden;
                img{
                  // flex:1;
                   width: 100%;
                   height: 60px;
                   padding: 5px 10px;

                }
                p{
                  height: 20px;
                }
              }
            }
          }
        }
    }
  }
}
</style>