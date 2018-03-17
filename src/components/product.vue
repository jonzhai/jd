<template>
    <div class="product">
      <div class="product_head">
        <a href="#" class="handKill"><span></span><span> 掌上秒杀</span></a>
        <ul id="time_container">
          <li>0</li>
          <li>0</li>
          <li>:</li>
          <li>0</li>
          <li>0</li>
          <li>:</li>
          <li>0</li>
          <li>0</li>
        </ul>
        <div class="slort"></div>
        <a href="#" class="more">更多&gt;</a>
      </div>
      <div class="product_content">
          <!-- swiper -->
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in products">
              <a href="#" class="product_list" :data-id = "item.product_id">
                  <img :src="item.src" alt="">
                  <p v-text="item.count_price">$100.00</p>
                  <p v-text="item.origin_price">$500.00</p>
              </a>
            </swiper-slide>
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
            slidesPerView: 2.5,
            spaceBetween: 10,
            freeMode: true,
            // pagination: {
            //   el: '.swiper-pagination',
            //   clickable: true
            // }
          },
          products:[]
        }
      },
      mounted:function(){
        this.CountDown();
        this.$axios.get('/src/assets/data/timeLimit.json')
            .then(response => {
              this.products = response.data.products;
            })
            .catch(error=>{
              console.log(error);
            });

      },
      methods:{
        //倒计时函数
          CountDown:function(){
            //获取相关元素
            var domUl=document.querySelector('#time_container'),
                lis=domUl.querySelectorAll('li'),
            //设置倒计时间
               dateNew=new Date('2018/11/10 00:00:00');
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
	width: 100%;
	background: #fff;
  height: 250px;
  padding: 5px;
}
.product_head{
	width: 100%;
	height: 40px;
  padding: 5px 0;
  display: flex;
}
.product_head .handKill{
  display: flex;
  width: 7em;
  height: 30px;
	/* line-height: 30px; */
	font-size: 15px;
	color: #FF0000;
}

.product_head .handKill span:first-child{
  width: 30px;
  background: url(../assets/images/seckill-icon.png) no-repeat;
	background-size:22px;
  background-clip: content-box;
  background-position: center;
  /* padding: 3px; */

}
.product_head .handKill span:last-child{
  flex: 1;
  padding-top:10px; 
  
}
.product_head ul {
  width: 160px;
  display: flex;
  margin: 0;
  margin-top: 10px;
}
.product_head ul li{
  flex:1;
	background: #000;
	line-height: 20px;
	text-align: center;
	color: #fff;
}
.product_head .slort{
  flex:1;
}
.product_head .more{
  width: 3em;
  height: 30px;
  line-height: 30px;
}
.product_content{
	background: #fff;
  height: 200px;
}
.swiper-container {
  height: 100%;
  width: 100%;
}
.swiper-slide{
  height: 100%;
  width: 100%;
}
.product_list{
  display: block;
  height: 100%;
  width: 100%;
}
.product_list img{
  width: 100%;
}
.product_list p{
  text-align: center;
  margin: 0;
}
.product_list p:nth-child(2){
  color:red;
  font-weight: bold;
  font-size: 1.2em;
}
.product_list p:last-child{
  color: #666;
  font-size: 0.8em;
}
</style>
