<template>
    <div id="login">
  		<div class="container">
  			<div class="header">
  			<h2>登录</h2>
  			</div>
			<div class="content"> 
				<form class="form-group">
					用户名：<input class="form-control" type = "text" placeholder="请输入用户名！">
					密码：<input class="form-control" type = "password">
					<input class="btn btn-block btn-primary log" type = "button" value="登录">
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
		methods:{
			toForgetPassword:function(){
    			this.$router.push({path:'/forgetPassword'})

			},
			toReg:function(){
    			this.$router.push({path:'/reg'})
			},



		}


	}

</script>	

<style scoped>
.log{
	margin-top:10px;
}
</style>	