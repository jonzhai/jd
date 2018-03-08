<template>
    <div class="product">
          <div class="product_head clearfix">
            <span class='fl'>掌上秒杀</span>
            <ul id="ul1" class="fl">
              <li>0</li>
              <li>0</li>
              <li>:</li>
              <li>0</li>
              <li>0</li>
              <li>:</li>
              <li>0</li>
              <li>0</li>
            </ul>
            <a href="#" class="fr">更多&gt;</a>
          </div>
          <div class="product_content">
              <!-- swiper -->
              <swiper :options="swiperOption">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
                <swiper-slide>Slide 10</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
          </div><!-- product_content -->
        </div><!-- product -->
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
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    mounted:function(){
      this.CountDown();


    },
    methods:{
      //倒计时函数
        CountDown:function(){
          //获取相关元素
          var domUl=document.querySelector('.product_head').querySelector('ul');
          var lis=domUl.querySelectorAll('li');
          //设置倒计时间
          var dateNew=new Date('2018/11/10 00:00:00');
          //设置定时器
          setInterval(function(){
            //获取现在时间
            var dateNow=new Date();
            var totalSecond=(dateNew.getTime()-dateNow.getTime())/1000;
            if(totalSecond>0){
              var days=Math.floor(totalSecond/24/60/60);
              var hours=Math.floor(totalSecond/60/60%24);
              var minutes=Math.floor(totalSecond/60%60);
              var seconds=Math.floor(totalSecond%60);
              lis[0].innerHTML=Math.floor(hours/10);
              lis[1].innerHTML=hours%10;
              lis[3].innerHTML=Math.floor(minutes/10);
              lis[4].innerHTML=minutes%10;
              lis[6].innerHTML=Math.floor(seconds/10);
              lis[7].innerHTML=seconds%10;
            }else{
              console.log('您来晚了！！！')
            }
          },1000)
      }



    }





}





</script>

<style scoped>
.product{
	width: 96%;
	margin: 10px auto;
	background: #fff;
}
.product_head{
	width: 100%;
	height: 32px;
}
.product_head span{
	line-height: 32px;
	background: url(../assets/images/seckill-icon.png) left center no-repeat;
	background-size:17px;
	padding-left: 24px;
	font-size: 15px;
	color: #FF0000;
}
.product_head ul {
	margin-left: 10px;
	margin-top: 5px;
}
.product_head ul li{
	float: left;
	width: 20px;
	height: 20px;
	background: #000;
	line-height: 20px;
	text-align: center;
	color: #fff;
}
.product_head a{
	font-size: 15px;
	padding-top: 5px;
}
.product_content{
	background: #fff;
}
.product_content ul li{
	width: 30%;
	float: left;
	text-align: center;
	margin-left: 10px;
}

.product_content ul img{
	width: 100%;
	padding: 10px;
	border-right: 2px solid #eee;
}
.product_content ul li:last-child img{
	border: none;
}
.product_content ul li p:nth-child(2){
	color: #f00;
}
.product_content ul li p:last-child{
	text-decoration:line-through;
}
</style>
