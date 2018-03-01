<template>
	<div>
		<div style="background:black ;height: 0.9rem;width: 7.5rem;position: fixed;top: 0.51rem;">
			<p style="font-size: 0.8rem;position:relative;top:-0.15rem;left:2.15rem;color: white;font-family: 'arial, helvetica, sans-serif';width: 3rem;">wolala</p>
			<router-link to="shopCar"><i style="color: white;font-size: 0.5rem;position: absolute;top: 0.3rem;right: 0.2rem;" class="fa fa-shopping-cart"></i></router-link>
		</div>	
		<div id="column">
			<div id="columnWrapper">	
				<ul >
					<router-link to="/brand"><li>品牌</li></router-link>
					<router-link to="/men"><li>男士</li></router-link>
					<router-link to="/women"><li>女士</li></router-link>
				</ul>
			</div>
		</div>		
		<router-view></router-view>
	</div>
</template>

<script>
	import adap from '../../../static/file/adaption'
	export default {

	}
	
</script>

<style scoped="scoped">
	@import url("../../../static/css/font-awesome.min.css");
			*{
				margin: 0;
				padding: 0;
			}
			#columnWrapper{
				width: 7.5rem;
				height: 0.79rem;
				background: black;
			}
			#column{
				width: 7.5rem;
				height: 0.79rem;
				position: fixed;
				top:1.32rem;
			}
			#column>div>ul{
				width: 4.5rem;
				height: 0.79rem;
				margin: 0 auto;
				z-index: 10;
			}
			#column>div>ul>a>li{
				list-style: none;
				font-size: 0.35rem;
				float: left;
				margin: 0.15rem 0.35rem;
				color: white;
				z-index: 15;
			}

</style>