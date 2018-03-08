<template>
	<div id="header">
      <div class="header_top">
          <a href="#" ></a>
          <input type="search"  placeholder="请输入内容">
          <a href="#" @click = "toLogin()" >登录</a>
      </div>
	    <div class="header_banner clearfix">
          <ul class="clearfix">
            <li><a href="#"><img src="../assets/images/l8.jpg" alt=""></a></li>
            <li><a href="#"><img src="../assets/images/l1.jpg" alt=""></a></li>
            <li><a href="#"><img src="../assets/images/l2.jpg" alt=""></a></li>
            <li><a href="#"><img src="../assets/images/l3.jpg" alt=""></a></li>
            <li><a href="#"><img src="../assets/images/l4.jpg" alt=""></a></li>
            <li><a href="#"><img src="../assets/images/l5.jpg" alt=""></a></li>
            <li><a href="#"><img src="../assets/images/l6.jpg" alt=""></a></li>
            <li><a href="#"><img src="../assets/images/l7.jpg" alt=""></a></li>
            <li><a href="#"><img src="../assets/images/l8.jpg" alt=""></a></li>
            <li><a href="#"><img src="../assets/images/l1.jpg" alt=""></a></li>
          </ul>
      </div>
      <div class="header_bottom">
          <ul class="clearfix">
            <li class='active'></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </div>
	</div>
</template>
<script>
  export default{
      mounted:function(){
          this.cartoon();
      },
      methods:{
        toLogin: function(){
          this.$router.push({path:'/login'})
        },
        cartoon: function(){
          //获取相关元素
          var domUl=document.querySelector('.header_banner').querySelector('ul');
          var domlis=domUl.querySelectorAll('li');
          var points=document.querySelector('.header_bottom').querySelectorAll('li');
          var liWidth=domlis[0].offsetWidth;
          //添加过渡
            var addTransition = function () {
                domUl.style.webkitTransition = "all 0.5s";
                domUl.style.transition = "all 0.5s";
            };
            //删除过渡
            var removeTransition = function () {
                domUl.style.webkitTransition = "none";
                domUl.style.transition = "none";
            };
            //改变位置
            var setTranslateX = function(X){
               domUl.style.webkitTransform = "translateX("+X+"px)";
               domUl.style.transform = "translateX("+X+"px)";
            };
            var index = 1;//存储当前图片指针变量
            var timer = setInterval(function(){
                index  ++ ;
                addTransition();
                setTranslateX(-index*liWidth);
            },3000);
            //绑定过渡结束事件
            domUl.addEventListener("webkitTransitionEnd", function(){
                // console.log('End');
                if(index >= 9){
                    index = 1;
                    removeTransition();
                    setTranslateX(-index*liWidth);
                }else if(index <= 0){
                    index = 8;
                    removeTransition();
                    setTranslateX(-index*liWidth);
                }
                //每次过渡结束调用小圆点改变事件
                setActive();
            });
            //定义下方小圆点随图改变事件
          function setActive(){
            for(var i = 0 ; i < points.length ; i ++){
                    points[i].className = " ";
                }
                points[index-1].className = "active"
          }
          //轮播图滑动效果
          var startX=0;//存储触摸开始时x轴位置
          var moveX=0;//存储触摸过程中x轴位置
          var distanceX=0;//存储触摸过程前后x轴变化量
          var isMove = false;//存储触摸过程事件，用于判定是否发生滑动事件
          //触摸开始事件
          domUl.addEventListener('touchstart',function(e){
            //关闭定时器
            clearInterval(timer);
            startX=e.touches[0].clientX;
            //console.log(startX);
          })
          //触摸过程事件
          domUl.addEventListener('touchmove',function(e){
            isMove = true;
            moveX=e.touches[0].clientX;
            distanceX=moveX-startX;
            //console.log(distanceX);
            removeTransition();
            setTranslateX(index*-1*liWidth+distanceX);
          })
          //触摸结束事件
          domUl.addEventListener('touchend',function(e){
            //判断当滑动距离超过liWidth/4时，转换到下一张图
            if(isMove&&(Math.abs(distanceX)>liWidth/4)){
              if(distanceX>0){
                index--;
              }else{
                index++;
              }
              addTransition();
              setTranslateX(-index*liWidth);
            }else{
              addTransition();
              setTranslateX(-index*liWidth);
            }
            //重置变量
            startX=0;
            moveX=0;
            distanceX=0;
            isMove = false;
            //开启定时器
            timer = setInterval(function(){
                  index  ++ ;
                  addTransition();
                  setTranslateX(-index*liWidth);
              },3000);
            })
        }//cartoon


      }//methods

  }//export




</script>  
<style scoped>
#header{
  position: relative;
  width: 100%;
}
.header_top{
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: rgba(201, 21, 35,0);
  padding: 0 60px;
  z-index: 20;
}
.header_top a:first-child{
  position: absolute;
  left: 2px;
  top: 5px;
  width: 60px;
  height: 36px;
  background-image: url('../assets/images/sprites.png');
  background-repeat: no-repeat;
  background-position: 0 -103px;
  background-size: 200px 200px;
}
.header_top input{
  width: 100%;
  height: 30px;
  margin-top: 5px;
  border-radius: 15px;
  margin-left: 5px;
  padding-left: 36px;
  background-image: url('../assets/images/sprites1.png');
  background-size: 20px 20px;
  background-position:10px center;
  background-repeat: no-repeat;
  outline: none;
}
.header_top a:last-child{
  position: absolute;
  right: 2px;
  top: 1px;
  line-height: 40px;
  color: white;
  padding-right: 10px;
  font-size: 17px;
}
.header_banner{
  width: 100%;
  overflow: hidden;
}
.header_banner ul{
  width: 1000%;
}
.header_banner ul li{
  width: 10%;
  float: left;
}
.header_banner img{
  width: 100%;
  }
.header_bottom{
  width: 100%;
  position: absolute;
  bottom: 0px;

}
.header_bottom ul{
  position: absolute;
  left: 50%;
  bottom: 15px;
  margin-left: -85px;

}
.header_bottom ul li{
  width: 10px;
  height: 10px;
  margin-left: 10px;
  border: 1px solid #eee;
  border-radius: 50%;
  float: left;
}
.header_bottom > ul li.active{
  background-color:#eee;
}


</style>