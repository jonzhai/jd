<template>
	<div id="banner">
	    <swiper :options="swiperOption">
        <swiper-slide><img src="../assets/images/l1.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/l2.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/l3.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/l4.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/l5.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/l6.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/l7.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/l8.jpg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
	</div>
</template>
<script>
  import Vue from 'vue'
  import VueAwesomeSwiper from 'vue-awesome-swiper'

  // require styles
  import 'swiper/dist/css/swiper.css'

  Vue.use(VueAwesomeSwiper, /* { default global options } */)
  export default{
      data() {
        return {
          swiperOption: {
            autoplay: true,//可选选项，自动滑动
            effect : 'slide',
            direction: 'horizontal',
            autoplayDisableOnInteraction: false,
            // slidesPerView: 1,
            // spaceBetween: 0,
            freeMode: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          }
        }
      },
        methods:{
          toLogin: function(){
            this.$router.push({path:'/login'})
          },

        }//methods

    }//export




</script>  
<style scoped>
#banner{
  height:200px;
}
.swiper-container {
  height: 100%;
  width: 100%;
}
.swiper-slide{
  height: 100%;
  width: 100%;
}
.swiper-slide img{
  height: 100%;
  width: 100%;
}
</style>