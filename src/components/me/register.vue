<template>
	<div>
		<div id="contentBackground">
			<input class="InpClass userClass"  type="text"  placeholder="请输入用户名" v-model="infoList.userName"/>
			<input class="InpClass trueNameClass"  type="text"  placeholder="请输入真实姓名" v-model="infoList.trueName"/><br />
			<input class="InpClass phoneClass"  type="text"  placeholder="手机号码" v-model="infoList.phone"/>
			<input class="InpClass passClass"  type="text" placeholder="请输入密码" v-model="infoList.passworld"/>
			<button id="registerBtn" @click="sendInfo()">注册</button>
		</div>
	</div>
</template>

<script>
	import store from'../../vuex/adminStore.js'
	export default {
		store,
		data(){
			return {
				//创建用户名，密码，手机号，密码，开关
				infoList:{
					userName:"",
					trueName:"",
					phone:"",
					passworld:"",
					flag:false
				}
			}
		},
		methods:{
			sendInfo(){
				//将已输入值的数据传入vuex
				this.$store.state.userInfor.push(this.infoList)
				alert("注册成功")
				//注册成功后跳转到/me
				location.href = "http://localhost:8080/#/me"
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
	#registerBtn{position: relative;top: 23%;left: 16.5%;width: 5.02rem;height: 0.82rem;font-size: 0.45rem;background: none;border: 0.05rem solid white;color: white;}
	#contentBackground{width: 7.5rem;height: 12.5rem;background: url(../../../static/img/me/02.jpg) no-repeat;	background-size: cover;}
	.userClass{position: relative;left: 15%;top: 19%;background: none;}
	.trueNameClass{position: relative;left: 15%;top: 19%;background: none;}
	.phoneClass{position: relative;left: 15%;top: 19%;background: none;}
	.passClass{position: relative;left: 15%;top: 19%;background: none;}
</style>