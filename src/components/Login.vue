<template>
    <div id="login">
  		<div class="container">
  			<div class="header">
  			<h2>登录</h2>
  			</div>
			<div class="content"> 
				<form class="form-group">
					用户名：<input class="form-control" type = "text" name="userName" placeholder="请输入用户名！">
					密码：<input class="form-control" name="passWord" type = "password">
					<input class="btn btn-block btn-primary log" type = "button" value="登录" @click="login">
				</form>

			</div>
			<div class="footer clearfix">
				<a class="pull-left" @click="toForgetPassword()">忘记密码</a>
				<a class="pull-right" @click="toReg()">新用户注册</a>
			</div>
  		</div>
    </div>
</template>
<script>
	export default{
		mounted:function(){
			if(this.$route.params.hasOwnProperty('name')){
				document.querySelector('input[name="userName"]').value  = this.$route.params.name;
			}
		},
		methods:{
			toForgetPassword:function(){
    			this.$router.push({path:'/forgetPassword'})

			},
			toReg:function(){
    			this.$router.push({path:'/reg'})
			},
			login:function(){
				var name = document.querySelector('input[name="userName"]').value.replace(/(^\s*)|(\s*$)/g,''),
					passWord = document.querySelector('input[name="passWord"]').value.replace(/(^\s*)|(\s*$)/g,'');
				var info = JSON.parse(localStorage.getItem(name));
				if(info.passWord === passWord){
					this.$router.push({path:`/login/${name}`});
				}else{
					alert('密码错误！请重新输入')
				}


				
			},


		}


	}

</script>	

<style scoped>
.log{
	margin-top:10px;
}
</style>	