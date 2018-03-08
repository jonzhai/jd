<template>
 <div class="footer">
      	<div class="footer_head">
	        <ul class="clearfix">
	          <li><a href="#">登录</a></li>
	          <li><a href="#">注册</a></li>
	          <li><a href="#">反馈</a></li>
	          <li><a href="#">回到顶部</a></li>
	        </ul>
      	</div>
        <div class="footer_content">
	        <ul class="clearfix">
	          <li><img src="../assets/images/1.png" alt=""><p>客户端</p></li>
	          <li><img src="../assets/images/2.png" alt=""><p>触屏版</p></li>
	          <li><img src="../assets/images/3.png" alt=""><p>电脑版</p></li>
	        </ul>
        </div>
        <div class="footer_bottom">
        	<span>Copyright&copy;2004-2017京东JD.com版权所有</span>
        </div>
    </div>

</template>
<style scoped>

.footer{
	width: 100%;
}
.footer_head{
	height: 40px;
	border-bottom: 1px solid #C0C0C0;
}
.footer_head ul{
	margin-top: 10px;
}
.footer_head ul li{
	float: left;
	width: 25%;
	height: 30px;
	line-height: 30px;
	text-align: center;
	border-right: 1px solid #C0C0C0;
}
.footer_head ul li:last-child{
	border: none;
}
.footer_head ul li a{
	color:#000;
}
.footer_content{
	height: 80px;
}
.footer_content ul{
	width: 100%;
}
.footer_content ul li{
	width: 33.33%;
	float: left;
	height: 80px;
	position: relative;
}
.footer_content  ul li img{
	height: 60%;
	position: absolute;
	top: 5px;
	left: 40%;
}
.footer_content  ul li p{
	text-align: center;
	position: absolute;
	bottom: 0;
	left: 41%;
}
.footer_bottom{
	height: 30px;
	line-height: 30px;
	text-align: center;
}



</style>