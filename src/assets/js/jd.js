window.onload=function(){

	//倒计时函数
	CountDown();
	//轮播图动画
	cartoon();
	//加载事件
	//load();	
}//onload

//顶部通栏透明度变化函数
window.onscroll = function() {
	var domTop=document.querySelector('.header_top'),
		domProduct=document.querySelector('.product');
		//获取相关元素
 	var rate= document.documentElement.scrollTop/domProduct.offsetTop;
	if(rate>1){
		rate=1
	};
	//console.log( document.documentElement.scrollTop);
	domTop.style.backgroundColor='rgba(201, 21, 35,'+rate+')'
	}


	

	//倒计时函数
	function CountDown(){
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

	//轮播图动画
	function cartoon(){
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
	//加载程序
	 function loading(){
	 	//json数据
	    var dataInt={"data":[[{"src":"images/cp1.jpg"},{"src":"images/cp2.jpg"},{"src":"images/cp3.jpg"}],[{"src":"images/cp1.jpg"},{"src":"images/cp2.jpg"},{"src":"images/cp3.jpg"}]]}
		for (var i = 0; i < dataInt.data.length; i++) {
			var row=dataInt.data[i];
			//console.log(row);
			var container=document.querySelector('.container');
			var more=document.querySelector('.more');
			var market=document.createElement('div');
			market.className='jdmarket';
			container.insertBefore(market,more);
			var txt='<div class="jdmarket_head">'+
						'<span></span>'+
						'<p>京东超市</p>'+
					'</div>'+
					'<div class="jdmarket_content clearfix">'+
						'<div class="jdmarket_content_left fl">'+
							'<a href="#">'+
								'<img src="'+row[0].src+'"></img>'+
							'</a>'+
						'</div>'+
						'<div class="jdmarket_content_right fl">'+
							'<a href="#">'+
								'<img src="'+row[1].src+'"></img>'+
							'</a>'+
							'<a href="#">'+
								'<img src="'+row[2].src+'"></img>'+
							'</a>'+
						'</div>'+
					'</div>' ;
					market.innerHTML = txt;
		}
	}
	//加载事件
	// function load(){
	// 	var more=document.querySelector('.more');
	// 	more.onclick=function(){
	// 		var container=document.querySelector('.container');
	// 		var h=container.offsetHeight;
	// 		//判断加载条件
	// 		if(h>4000){
	// 			more.style.display='none';
	// 		}
	// 		loading();
	// 		//console.log(h);
	// 	}
	// }

