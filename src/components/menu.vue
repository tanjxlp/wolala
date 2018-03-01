<template>
	<div>
		<router-view></router-view>
		<div id="foot">
			<ul>
				<li><router-link to='/home'>
					<i class="fa fa-home  fontSize"></i>
					<p>首页</p>
				</router-link></li>
				<li><router-link to='/search'>
					<i class="fa fa-search  fontSize"></i>
					<p>搜索</p>
				</router-link></li>
				<li><router-link to='/product'>
					<i class="fa fa-product-hunt  fontSize"></i>
					<p>新品</p>
				</router-link></li>
				<li><router-link to='/information'>
					<i class="fa fa-tencent-weibo  fontSize"></i>
					<p>消息</p>
				</router-link></li>
				<li><router-link to='/me'>
					<i class="fa fa-meh-o  fontSize"></i>
					<p>我的</p>
				</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import adap from '../../static/file/adaption'
	import swiperCss from '../assets/swiper.css'
	import swiperJs from '../../static/file/swiper.js'
	export default {
		
	}
</script>

<style scoped="scoped">
	@import url("../../static/css/font-awesome.min.css");
	*{padding: 0;margin: 0;}
	a{
		text-decoration: none;
		color: black;
	}
	#foot{height: 0.98rem;
			width: 7.5rem;
			position: fixed;
			bottom: 0;
			border-top: 1px solid gainsboro;
			background: white;
		}
	#foot>ul>li{
		list-style: none;
		font-size: 0.3rem;
		float: left;
		margin: 0 0.45rem;
	}	
	#foot>ul>li>a{
		color: gainsboro;
	}
	#foot>ul>li>.router-link-active{
		color: black;
	}
	.fontSize{
		font-size:0.6rem ;
		text-align: center;
	}
</style>