<template>
	<div id="banner">
	    <swiper :options="swiperOption" ref="mySwiper" @click="test">
        <swiper-slide v-for="(item,index) in datalist" :key="index"><img :src="getUrl(item)"></swiper-slide>
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
            autoplay: {
              disableOnInteraction: false
            },//可选选项，自动滑动
            speed:1000,
            loop:true,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          },
          datalist:[1,2,3,4,5,6,7,8],
        }
      },
      created:function(){
        //当前轮播图的基准url
        this.baseURL = 'src/assets/images/';
      },
      methods:{
        toLogin: function(){
          this.$router.push({path:'/login'})
        },
        test(e){
          console.log(e)
        },
        getUrl(index){
          return this.baseURL+`l${index}.jpg`;
        }

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