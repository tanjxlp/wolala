<template>
	<div>
		<div id="top">
			<input type="text" id="top_inp"/>
		</div>
		<ul id="nav">
			<li><router-link to="/search/men">男士  MEN</router-link></li>
			<li><router-link to="/search/women">女士  WOMEN</router-link></li>
		</ul>
		<router-view>
			
		</router-view>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	*{padding: 0;margin: 0;}
	a{
		text-decoration: none;
		color: black;
	}
	#top{
		background:black ;
		height: 0.8rem;
		width: 7.5rem;
		position: fixed;
		top: 0.51rem;
	}
	#top_inp{
		height: 0.4rem;
		width:6.5rem;
		position: fixed;
		top: 0.68rem;
		left: 0.5rem;
	}
	#nav{
		background:white ;
		height: 0.8rem;
		width: 7.5rem;
		position: fixed;
		top: 1.31rem;
	}
	#nav>li{
		list-style: none;
		font-size: 0.35rem;
		margin: 0.15rem 0.9rem;
		float: left;
		text-align: center;
	}

</style>