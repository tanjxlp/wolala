<template>
	<div>
		<img style="margin: 0 0.14rem;" src="../../../../static/img/search/men/frock/imagesIMG_2587_03.jpg">
		<ul id="shopList">
			<li ><img src="../../../../static/img/search/men/coat/imagesIMG_2592_03.jpg"/></li>
			<li><img src="../../../../static/img/search/men/coat/imagesIMG_2592_05.jpg"/></li>
			<li><img src="../../../../static/img/search/men/coat/imagesIMG_2592_09.jpg"/></li>
			<li><img src="../../../../static/img/search/men/coat/imagesIMG_2592_11.jpg"/></li>
			<li><img src="../../../../static/img/search/men/coat/imagesIMG_2592_13.jpg"/></li>
			<li><img src="../../../../static/img/search/men/coat/imagesIMG_2592_14.jpg"/></li>
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
	#shopList>li>img{
		width: 2rem;
		height: 2.8rem;
	}
</style>