<template>
  <div class="app">
      <common-header></common-header>
      <swiper-banner></swiper-banner>
      <navs></navs>
      <product></product>
      <jd-market></jd-market>
      <common-footer :index="0"></common-footer>
  
  </div>
</template>

<script>
  import commonHeader from './components/common_header.vue';
  import swiperBanner from './components/swiperBanner.vue';
  import commonFooter from './components/common_footer.vue';
  import navs from './components/nav.vue';
  import product from './components/product.vue';
  import jdMarket from './components/jdMarket.vue';
  export default {
    name: 'app',
    components:{
      "common-header":commonHeader,
      "swiper-banner":swiperBanner,
      "common-footer":commonFooter,
      "navs":navs,
      "product":product,
      "jd-market":jdMarket
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
        toLogin:function(){
          this.$router.push({path:'/login'});
        },
    }
  }
</script>

<style scoped>
.app{
  background-color: #eee;
  width: 100%;
  height: 100%;
}
</style>
