<template>
	<div id = "jdmarket">
		<p class="jdmarket_head">京东超市</p>
		<div class="jdmarket_content">
			<div class="product"  v-for="item in list">
				<a href="#" :data-id="item.product_id">
					<img :src="item.src" alt="">
					<p class="describe" v-text="item.describe"></p>
					<p class="price" v-text="item.price"></p>
					<div class="bottom_container">
						<span>好评率<span v-text="item.goodEvaluate"></span></span>
						<span></span>
						<span>看相似</span>
					</div>
				</a>
			</div>
			
		</div>
          
	</div>

</template>
<script>
export default {
  data(){
	  return {
		list:[],
	  }
  },
	mounted:function(){
		var data = [],
			me = this;
		this.$axios.get('/src/assets/data/products.json')
			.then(response => {
				me.list = response.data.products;
				data = response.data.products;
			})
			.catch(error=>{
				console.log(error);
			});
		document.onscroll = function(){
			if(document.documentElement.scrollHeight == document.documentElement.scrollTop + document.documentElement.clientHeight){
				data.forEach(element => {
					me.list.push(element);
				});
			}
		}

	},



}
</script>

<style scoped>
.jdmarket{
	background: #fff;
	width: 100%;
	padding: 5px;
}
.jdmarket_head{
	width: 100%;
	height: 32px;
	line-height: 32px;
	margin: 5px 0;
	text-align: center;
	border-bottom: 1px solid #eee;
	font-size:1.5em;
	color:#f23030;
}

.jdmarket_content{
	width: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap:wrap;
}
.jdmarket_content>.product{
	width: 50%;
	/* height:205px; */
	padding: 3px;
	overflow: hidden;
}
.product a{
	display: block;
	width: 100%;
	/* height: 100%; */
	background: #fff;
}
.product a img{
	width: 100%;
}
.product a p{
	margin-bottom: 0;
}
.product a .describe{
	padding: 3px;
	overflow: hidden;
	text-overflow: ellipsis;
	color:#000;
}
.product a .price{
	color:#f23030;
	padding: 0 5px;
}
.bottom_container{
	width: 100%;
	height: 30px;
	line-height: 30px;
	padding:0 5px;
	display: flex;
	color:#666;
}
.bottom_container > span:nth-child(2){
	flex:1;
}
.bottom_container > span:nth-child(3){
	padding:0 3px;
	/* border: 1px solid #eee; */
}
</style>