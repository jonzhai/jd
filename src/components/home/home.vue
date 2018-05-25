<template>
  <div class="home">
      <common-header></common-header>
      <swiper-banner></swiper-banner>
      <Nav></Nav>
      <Product></Product>
      <jd-market></jd-market>
      <common-footer :index="0"></common-footer>
  </div>
</template>

<script>
  import commonHeader from '../common_header.vue';
  import swiperBanner from '../swiperBanner.vue';
  import commonFooter from '../common_footer.vue';
  import Nav from '../nav.vue';
  import product from '../product.vue';
  import jdMarket from '../jdMarket.vue';
  export default {
    name: 'app',
    components:{
      "commonHeader":commonHeader,
      "swiperBanner":swiperBanner,
      "commonFooter":commonFooter,
      "Nav":Nav,
      "Product":product,
      "jdMarket":jdMarket
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