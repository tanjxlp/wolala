<template>
	<div>
		<img style="margin: 0 0.14rem;" src="../../../../static/img/search/women/trousers/imagesIMG_2598_03.jpg">
		<ul id="shopList">
			<li><img src="../../../../static/img/search/women/cowpoke/imagesIMG_2604_03.jpg"/></li>
			<li><img src="../../../../static/img/search/women/cowpoke/imagesIMG_2604_05.jpg"/></li>
			<li><img src="../../../../static/img/search/women/cowpoke/imagesIMG_2604_07.jpg"/></li>
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
		margin: 0 0.25rem;
	}
</style>