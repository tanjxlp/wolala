<template>
	<div>
		<img style="margin: 0 0.14rem;" src="../../../../static/img/search/men/frock/imagesIMG_2587_03.jpg">
		<ul id="shopList">
			<li ><img src="../../../../static/img/search/men/omament/imagesIMG_2590_03.jpg"/></li>
			<li><img src="../../../../static/img/search/men/omament/imagesIMG_2590_05.jpg"/></li>
			<li><img src="../../../../static/img/search/men/omament/imagesIMG_2590_07.jpg"/></li>
			<li><img src="../../../../static/img/search/men/omament/imagesIMG_2590_09.jpg"/></li>
			<li><img src="../../../../static/img/search/men/omament/imagesIMG_2590_11.jpg"/></li>
			<li><img style="margin: 0.48rem 0;" src="../../../../static/img/search/men/omament/imagesIMG_2590_15.jpg"/></li>
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
		margin: 0 0.15rem;
	}
</style>