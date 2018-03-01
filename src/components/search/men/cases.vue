<template>
	<div>
		<img style="margin: 0 0.14rem;" src="../../../../static/img/search/men/frock/imagesIMG_2587_03.jpg">
		<ul id="shopList">
			<li ><img src="../../../../static/img/search/men/cases/imagesIMG_2591_03.jpg"/></li>
			<li><img src="../../../../static/img/search/men/cases/imagesIMG_2591_04.jpg"/></li>
			<li><img src="../../../../static/img/search/men/cases/imagesIMG_2591_05.jpg"/></li>
			<li><img src="../../../../static/img/search/men/cases/imagesIMG_2591_06.jpg"/></li>
			<li><img src="../../../../static/img/search/men/cases/imagesIMG_2591_08.jpg"/></li>
			<li><img src="../../../../static/img/search/men/cases/imagesIMG_2591_11.jpg"/></li>
		</ul>
	</div>
</template>

<script>
	import store from '../../../vuex/search/men/menStore.js'
	import { mapState } from 'vuex'
	export default {
		store,
		
	
	}
</script>

<style scoped="scoped">
	*{padding: 0;margin: 0;}
	#shopList>li{
		float: left;
		list-style: none;
	}
	#shopList>li img{
		width: 2rem;
		height: 2.5rem;
	}
</style>