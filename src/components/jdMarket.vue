<template>
	<div id = "jdmarket">
	    <div class="jdmarket">
            <div class="jdmarket_head">
            	<span></span>
               	<p>京东超市</p>
            </div>
	        <div class="jdmarket_content clearfix">
	            <div class="jdmarket_content_left fl">
	              <a href="#"><img src="../assets/images/cp1.jpg" alt=""></a>
            	</div>
            	<div class="jdmarket_content_right fl">
	              <a href="#"><img src="../assets/images/cp2.jpg" alt=""></a>
	              <a href="#"><img src="../assets/images/cp3.jpg" alt=""></a>
            	</div>
        	</div>
          
        </div>
        <div class="more">
          <p>点击继续加载</p>
        </div>
	</div>

</template>
<style scoped>
.jdmarket{
	background: #fff;
	width: 96%;
	margin: 10px auto;
}
.jdmarket_head{
	width: 100%;
	height: 32px;
	position: relative;
	border-bottom: 1px solid #eee;
}
.jdmarket_head span{
	background: #f00;
	position: absolute;
	left: 10px;
	top: 6px;
	width: 5px;
	height: 20px;
}
.jdmarket_head p{
	position: absolute;
	left: 20px;
	top: 6px;
}
.jdmarket_content{
	width: 100%;
}
.jdmarket_content>div{
	width: 50%;
}
.jdmarket_content>div img{
	width: 100%;
}
.jdmarket_content_left{
	border-right: 1px solid #eee;
}
.jdmarket_content_right img:first-child{
	border-bottom: 1px solid #eee;
}
.jdmarket_content_left_1 img:first-child{
	border-bottom: 1px solid #eee;
}
.jdmarket_content_right_1 {
	border-left: 1px solid #eee;
}
.more{
	width: 100%;
	margin-top: 3px;
	border-top: 1px solid 	#C0C0C0;
	border-bottom: 1px solid 	#C0C0C0;
	height:30px;
	line-height: 30px;
}
.more p{
	text-align: center;
	font-size: 15px;
}
</style>