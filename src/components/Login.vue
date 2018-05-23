<template>
    <div id="login">
  		<div class="container">
  			<div class="header">
				<div class="back" @click="goBack"></div>
  				<h2>登录</h2>
  			</div>
			<div class="content"> 
				<form class="form-group">
					用户名：<input class="form-control" type = "text" name="userName" placeholder="请输入用户名！" ref= "userName">
					密码：<input class="form-control" name="passWord" type = "password" placeholder="请输入密码！" ref="passWord">
					<input class="btn btn-block btn-primary log" type = "button" value="登录" @click="login">
				</form>
				<toast v-if="ptext" @close="closeToast" :title="ptext"></toast>	
			</div>
			<div class="footer clearfix">
				<a class="pull-left" @click="toForgetPassword()">忘记密码</a>
				<a class="pull-right" @click="toReg()">新用户注册</a>
			</div>
  		</div>
    </div>
</template>
<script>
	import {mapActions} from 'vuex';
	// import types from '../store/mutationsType'
	import toast from '../base/toast/toast.vue'
	export default{
		data(){
			return {
				show: true,
				ptext: ''
			}
		},
		mounted:function(){
			setTimeout(()=>{
				this.$refs.userName.value = '';
				this.$refs.passWord.value ='';
			},500)
		
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
				if(!info){
					this.ptext = '当前用户不存在！请先注册';
					return;
				}
				console.log(name,passWord,info)
				if(info.passWord === passWord){
					console.log(name)
					this.setLoginState(name);
					this.$router.push({path:`/home`});
				}else{
					this.ptext = '密码错误！请重新输入';
				}
			},
			goBack(){
				this.$router.go(-1);
			},
			...mapActions(['setLoginState']),
			closeToast(){
				this.ptext = '';
			}
		},
		components:{
			toast
		}


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
.log{
	margin-top:10px;
}
.content{
	position: relative;
}
</style>	