<template>
	<div>
		<div id="tab_imgBox">
			<img src="../../../static/img/login/loginImg.png"/>
		</div>
		<router-link to="/me/login/register"><button id="registerBtn">注册</button></router-link>
		<router-link to="/me/login/enter"><button id="loginBtn">登录</button></router-link>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	*{padding: 0;margin: 0;}
	#tab_imgBox{
		width: 7.5rem;
		height: 9.6rem;
	}
	#tab_imgBox>img{
		width: 7.5rem;
		height: 9.6rem;
	}
	#registerBtn{
		width: 2.5rem;
		height: 0.8rem;
		background: #4fb79c;
		font-size: 0.4rem;
		color: white;
		position: fixed;
		top: 10.5rem;
		left: 0.55rem;
	}
	#loginBtn{
		width: 2.5rem;
		height: 0.8rem;
		background: #4fb79c;
		font-size: 0.4rem;
		color: white;
		position: fixed;
		top: 10.5rem;
		left: 4.45rem;
	}
</style>