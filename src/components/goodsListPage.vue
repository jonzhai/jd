<template>
    <div id="search">
      <div class="header">
        <div class="back" @click="goBack"></div>
        <div class="search-container">
          <div>
            <span class="search-icon"></span>
            <input ref="searchIpt"  name="searchIpt" placeholder="请输入关键词！" @click="toSearch" autofocus="autofocus">
          </div>
        </div>
        <div class="top_nav" @click="openTopNav"><span class="glyphicon glyphicon-option-horizontal"></span></div>
        <transition name="fade">
          <div class="nav-container" v-show="navshow">
            <vertial-nav></vertial-nav>
          </div>
        </transition>
      
      </div>
      <div class="filter1">
          <div>
            <span>综合</span>
          </div>
         <div>
            <span>销量</span>
          </div>
          <div>
            <span>价格</span>
          </div>
          <div>
            <span>筛选</span>
          </div>
      </div>
       <div class="filter1 filter2">
          <div>
            <span>京东物流</span>
          </div>
         <div>
            <span>品牌</span>
          </div>
          <div>
            <span>分类</span>
          </div>
          <div>
            <span>功能</span>
          </div>
      </div>
      <div class="content">
          <ul id="goodList">
            <li class="item" v-for="(item,index) in goodList" :key="index">
              <div class="item-left">
                <img :src="item.src" alt="">
              </div>
              <div class="item-right">
                  <p class="title">{{item.describe}}</p>
                  <p class="clearfix"><span class="goodsPrice pull-left text-danger">{{item.price}}</span><button class="addBtn pull-right btn btn-danger" @click="addInCar(item)">加入购物车</button></p>
              </div>
            </li>
          </ul>
          <div class="toast-container" >
            <toast-squre title="ok" @close="close" v-if="showToast"></toast-squre>
          </div>
      </div>
  
    </div>
  
</template>
<script>
import vertialNav from "../base/vertialNav/vertialNav.vue";
import {mapGetters,mapActions} from 'vuex';
import Order from 'src/assets/js/order.js';
import toastSqure from 'base/toast/toast_squre.vue';
export default {
  data() {
    return {
      clLists: [],
      hotLists: [],
      goodList: [],
      navshow: false,
      showToast: false
    };
  },
  mounted: function() {
    // var key = sessionStorage.getItem("searchKeyWord");
    console.log();
    this.$refs.searchIpt.value = this.$route.params.key;
    this.$axios.get("/src/assets/data/goodList.json")
      .then(response => {
        this.goodList = response.data.goodList.slice(0, 50);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    toLogin() {
      this.$router.push({ path: "/login" });
    },
    toSearch() {
      this.$router.push({ path: "/search" });
    },
    goBack() {
      this.$router.go(-1);
    },
    toSearchWt() {},
    openTopNav() {
      this.navshow = !this.navshow;
      console.log(this);
    },
    addInCar(order) {
      // console.log(order)
      this.addCarGoods(new Order(order));
      this.showToast = true;
    },
    close(){
      this.showToast = !this.showToast;
    },
    ...mapActions(['addCarGoods'])
  }, //methods
  components: {
    vertialNav,
     toastSqure
  }
}; //export
</script>  
<style scoped>
.header {
  width: 100%;
  max-width: 640px;
  min-width: 240px;
  height: 50px;
  line-height: 50px;
  background-image: url(../assets/images/header-bg.png);
  padding: 10px;
  display: flex;
  position: absolute;
  top: 0;
}
.nav-container {
  position: absolute;
  right: 10px;
  bottom: -210px;
}
.search-container {
  height: 30px;
  flex: 1;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #666;
}
.search-container > div {
  display: flex;
  width: 100%;
  height: 100%;
}
.back,
.search-icon {
  width: 30px;
  background-image: url(../assets/images/sprites.png);
  background-size: 200px;
  background-clip: content-box;
  padding: 5px;
}
.back {
  background-position: -16px 5px;
}
.search-container .search-icon {
  background-position: 123px 8px;
}
.top_nav {
  width: 30px;
  padding: 5px;
}
.top_nav > span {
  position: relative;
  top: -12px;
  left: 3px;
}
.search-container .top_nav {
  background-position: 123px 8px;
}
.search-container input[name="searchIpt"] {
  flex: 1;
  border-radius: 20px;
}
.filter1 {
  display: flex;
  justify-content: space-around;
  padding: 5px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-top: 50px;
}
.filter1 > div {
  flex: 1;
  padding: 5px;
  text-align: center;
}
.filter1 > div span {
  height: 30px;
}
.filter2 {
  margin-top: 0;
}
.filter2 > div {
  background-color: #eee;
  margin: 0 5px;
  border-radius: 3px;
}
.filter2 > div span {
  color: #666;
}
#goodList > .item {
  display: flex;
  padding: 15px 0;
  min-height: 132px;
  border-bottom: 1px solid #eee;
}
.item-left {
  width: 25%;
  padding: 5px;
}
.item-left img {
  width: 100%;
  /* height: 100%; */
}
.item-right {
  flex: 1;
}
.item-right .title {
  margin-bottom: 30px;
  padding: 0 10px;
}
.item-right .goodsPrice {
  display: block;
  font-size: 1.3em;
  margin-left: 10px;
  margin-top: 4px;
}
.item-right .addBtn {
  margin-right: 10px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.toast-container{
  position: fixed;
  left: 50%;
  top:30%;
  transform: translate3d(-50%,-50%,0);
}
</style>