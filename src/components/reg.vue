<template>
    <div id="reg">
  		<div class="container">
  			<div class="header">
				<div class="back" @click="goBack"></div>
  				<h2>注册</h2>
  			</div>
			<div class="content"> 
				<form class="form-group" id="reg_form" ref="reg_form">
					<label>用户名：</label><input name="userName" class="form-control" type = "text" placeholder="请输入用户名！">
					<label>密码：</label><input name="passWord" class="form-control" type = "password">
					<label>再次输入密码：</label><input name="repassworld" class="form-control" type = "password">
					<label>验证问题：</label>
					<select name="verificationProblem" class="form-control">
						<option value="">qq</option>
						<option value="">phone</option>
					</select>
					<label>答案：</label><input name="verificationValue"  class="form-control" type = "text" placeholder="请输入答案！">
				</form>
				<input id="submit" @click="storeInfo()" class="btn btn-block btn-primary" type = "button" value="注册">
				<toast :title="title" v-if = 'toastShow' @close = 'closeToast'></toast>	
			</div>
  		</div>
		
    </div>
</template>
<script>
	import Validator from '../assets/js/validator';
	import toast from '../base/toast/toast.vue';
	import {mapActions} from 'vuex'
	export default{
		data(){
			return {
				songs:[],
				probeType: 2,
				listenScroll: true,
				title: '',
				 toastShow: false
			}
		},


		mounted:function(){
			// console.log(this.$refs.scroll._initScroll);
			var me = this;
			me.Validator = new Validator('reg_form',{
				userName:{
					patten: /\w{4,12}/g,
					errorTitle: '用户名是4到12位的字母，数字和下划线'
				},
				passWord:{
					patten: /\w{6,12}/g,
					errorTitle: '密码是6到12位的字母，数字和下划线'
				},
				repassworld:{
					patten: 'same(passWord)',
					errorTitle: '两次输入密码不一致！'
				},
				verificationValue:{
					patten: /.{1,20}/g,
					errorTitle: '验证问题必须在20个字符长度以内'
				}
			});
			this.$refs.reg_form.addEventListener('blur',function(e){
				var ipt =  e.target,
					type = ipt.getAttribute('type');
					// console.log(me.Validator.patten)
				if(type == 'text' || type == 'password' ){
					var result = me.Validator.validate(ipt);

					if(!result.isValidate){
						if(!ipt.classList.contains('error')){
							ipt.classList.add("error");
						}
						me.title = result.message;
						me.toastShow = true;
					}else{
						if(ipt.classList.contains('error')){
							ipt.classList.remove("error");
						}
						me.title = '';
						me.toastShow = false;
					}
				};
			},true)
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			},
			storeInfo(){
				Promise.all(this.Validator.run()).then(() =>{
					this.reg();
				}).catch((err) => {
					console.log(err)
					this.title = err.message;
					this.toastShow = true;
					var ipt = this.$refs.reg_form.querySelector(`input[name=${err.name}]`);
					if(!ipt.classList.contains('error')){
						ipt.classList.add("error");
					}
				})
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
				if(!localStorage.getItem(key)){
					localStorage.setItem(key,JSON.stringify(obj));
					this.title = '注册成功！';
					this.toastShow = true;
					this.setLoginState(key)
					this.$router.push({path:`/home`});
				}else{
					this.title = '该账号已存在，请直接登录！';
					this.toastShow = true;
					this.$router.push({path:`/login`});
				}
				
			},
			closeToast(){
				this.toastShow = false;
			},
			...mapActions(['setLoginState'])
		},
		// computed:{
		// 	 toastShow:function(){
		// 		 return this.title && !this.toastIsReady;
		// 	 }
		// },
		components:{
			toast
		}
		


	}

</script>	

<style lang="scss" scoped>
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
.scrollW{
	height: 200px;
}

.error{
	border: 1px solid red;
}
.content{
	position: relative;
}

</style>	