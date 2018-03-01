<template>
	<div>
		<div id="contentBackground">
			<input class="InpClass userClass"  type="text"  placeholder="请输入用户名" v-model="loginList.userName"/>
			<input class="InpClass passClass"  type="password" placeholder="请输入密码" v-model="loginList.passworld"/>
			<button id="loginBtn" @click="judgeInfo()">登录</button>
		</div>
	</div>
</template>

<script>
	import store from'../../vuex/adminStore.js'
	export default {
		store,
		data(){
			return {
				//创建空的用户名和密码
				loginList:{
					userName:"",
					passworld:""
				}
			}
		},
		methods:{
			judgeInfo(){
				//检测已注册的用户名和密码是否正确
				if(this.loginList.userName != this.$store.state.userInfor[0].userName){
					alert("用户名不存在")
				}else if(this.loginList.passworld != this.$store.state.userInfor[0].passworld){
					alert("密码不正确")
				}else{
					this.$store.state.userInfor[0].flag = true
					alert("登录成功")
					//当登录成功后跳转到/me
					location.href = "http://localhost:8080/#/me"
				}
			}
		},
		mounted(){

		},
		computed:{

		}
	}
</script>

<style scoped="scoped">
	*{padding: 0;margin: 0;}
	input::-webkit-input-placeholder{color: white;font-size: 0.35rem;}
	.InpClass{width: 5.16rem;height: 0.76rem;font-size: 0.6rem;color: white;}
	#loginBtn{position: relative;top: 23%;left: 16.5%;width: 5.02rem;height: 0.82rem;font-size: 0.45rem;background: none;border: 0.05rem solid white;color:white;}
	#contentBackground{width: 7.5rem;height: 12.5rem;background: url(../../../static/img/me/05.jpg) no-repeat;	background-size: cover;}
	.userClass{position: relative;left: 15%;top: 19%;background: none;}
	.passClass{position: relative;left: 15%;top: 19%;background: none;}
</style>