<template>
    <div id="reg">
  		<div class="container">
  			<div class="header">
				<div class="back" @click="goBack"></div>
  				<h2>注册</h2>
  			</div>
			<div class="content"> 
				<form class="form-group" id="reg_form">
					<label>用户名：</label><input name="userName" class="form-control" type = "text" placeholder="请输入用户名！" data-reg="\w{2,10}">
					<label>密码：</label><input name="passWord" class="form-control" type = "password" data-reg="\w{2,10}">
					<label>再次输入密码：</label><input name="repassworld" class="form-control" type = "password" data-reg="\w{2,10}">
					<label>验证问题：</label>
					<select name="verificationProblem" class="form-control">
						<option value="">qq</option>
						<option value="">phone</option>
					</select>
					<label>答案：</label><input name="verificationValue"  class="form-control" type = "text" placeholder="请输入答案！" data-reg="\w{2,10}">
				</form>
				<input id="submit" @click="storeInfo()" class="btn btn-block btn-primary" type = "button" value="注册">

			</div>
  		</div>
    </div>
</template>
<script>
	import Validator from '../assets/js/validator';
	let vd = null;
	export default{
		mounted:function(){
			vd = new Validator('reg_form');
			this.$axios.get('/api/1.html')
          .then(response => {
			  console.log(response)
          })
          .catch(error=>{
            console.log(error);
          });
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			},
			storeInfo(){
				if(vd.run()){
					this.reg();
				}
			},
			reg(){
				const form = document.getElementById('reg_form'),
					inputs = form.querySelectorAll('input');
				let obj = {},
					key = '';
				[...inputs].map(item =>{
					if(item.getAttribute('name') === 'userName'){
						key = item.value;
					}else{
						obj[item.getAttribute('name')] = item.value;
					}
				});
				if(localStorage.getItem(key) === ''){
					localStorage.setItem(key,JSON.stringify(obj));
					vd.display('注册成功！');
					this.$router.push({path:`/home/${key}`});
				}else{
					vd.display('该账号已存在，请直接登录！')
					this.$router.push({path:`/login/${key}`});
				}
				
			}



		},
		


	}

</script>	

<style scoped>
.header{
	display: flex;
}
.back{
	width:30px;
	background-image:url(../assets/images/sprites.png);
	background-size:200px;
	background-clip:content-box;
	padding:5px;
	background-position:-16px 25px;
	margin-right: 10px;
}

</style>	