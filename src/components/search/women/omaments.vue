<template>
	<div>
		<img style="margin: 0 0.14rem;" src="../../../../static/img/search/women/trousers/imagesIMG_2598_03.jpg">
		<ul id="shopList">
			<li ><img src="../../../../static/img/search/women/omaments/imagesIMG_2602_03.jpg"/></li>
			<li><img src="../../../../static/img/search/women/omaments/imagesIMG_2602_05.jpg"/></li>
			<li><img src="../../../../static/img/search/women/omaments/imagesIMG_2602_07.jpg"/></li>
			<li><img src="../../../../static/img/search/women/omaments/imagesIMG_2602_09.jpg"/></li>
			<li><img src="../../../../static/img/search/women/omaments/imagesIMG_2602_11.jpg"/></li>
			<li><img src="../../../../static/img/search/women/omaments/imagesIMG_2602_12.jpg"/></li>
			<li><img src="../../../../static/img/search/women/omaments/imagesIMG_2602_13.jpg"/></li>
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
	#shopList>li>img{
		width: 1.44rem;
		height: 2.2rem;
	}
</style>