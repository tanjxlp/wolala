<template>
	<div>
		<ul id="sideNav">
			<router-link to="waist"><li>上衣</li></router-link>
			<router-link to="trousers"><li>裤子</li></router-link>
			<router-link to="shoe"><li>鞋子</li></router-link>
			<router-link to="omaments"><li>配饰</li></router-link>
			<router-link to="laggage"><li>箱包</li></router-link>
			<router-link to="loose"><li>外套</li></router-link>
			<router-link to="cowpoke"><li>牛仔</li></router-link>
		</ul>
		<div id="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	*{padding: 0;margin: 0;}
	a{text-decoration: none;color: black;}
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