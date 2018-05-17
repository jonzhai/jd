<template>
  <div class="home">
      <common-header></common-header>
      <swiper-banner></swiper-banner>
      <navs></navs>
      <product></product>
      <jd-market></jd-market>
      <common-footer :index="0"></common-footer>
  </div>
</template>

<script>
  import commonHeader from '../common_header.vue';
  import swiperBanner from '../swiperBanner.vue';
  import commonFooter from '../common_footer.vue';
  import navs from '../nav.vue';
  import product from '../product.vue';
  import jdMarket from '../jdMarket.vue';
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
    methods:{
        toLogin:function(){
          this.$router.push({path:'/login'});
        },
    }
  }
</script>
<style scoped>
.home{
  background-color: #eee;
  width: 100%;
  height: 100%;
}
</style>