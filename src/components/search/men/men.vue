<template>
	<div>
		<ul id="sideNav">
			<router-link to="frock"><li>上衣</li></router-link>
			<router-link to="pants"><li>裤子</li></router-link>
			<router-link to="shoes"><li>鞋子</li></router-link>
			<router-link to="omament"><li>配饰</li></router-link>
			<router-link to="cases"><li>箱包</li></router-link>
			<router-link to="coat"><li>外套</li></router-link>
			<router-link to="cowboy"><li>牛仔</li></router-link>
		</ul>
		<div id="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{

		}
	}
</script>

<style scoped="scoped">
	*{padding: 0;margin: 0;}
	a{
		text-decoration: none;
		color: #000000;
	}
	#sideNav{
		width: 1.5rem;
		height: 10.18rem;
		position: fixed;
		top: 2.12rem;
		background: gainsboro;
	}
	#sideNav>a>li{
		list-style: none;
		text-align: center;
		font-size:0.3rem ;
		width: 1.5rem;
		height: 1rem;
		margin: 0.2rem 0;
	}
	#content{
		width:6rem;
		height: 11.22rem;
		position: fixed;
		right: 0;
		bottom: 0;
	}
</style>