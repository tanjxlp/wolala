<template>
	<div>
		<ul id="shopList">
			<li ><img src="../../../../static/img/search/women/waist/imagesIMG_2594_03.jpg"/></li>
			<li><img src="../../../../static/img/search/women/waist/imagesIMG_2594_05.jpg"/></li>
			<li><img src="../../../../static/img/search/women/waist/imagesIMG_2594_07.jpg"/></li>
			<li><img src="../../../../static/img/search/women/waist/imagesIMG_2594_09.jpg"/></li>
			<li><img src="../../../../static/img/search/women/waist/imagesIMG_2594_10.jpg"/></li>
			<li><img src="../../../../static/img/search/women/waist/imagesIMG_2594_11.jpg"/></li>
			<li><img src="../../../../static/img/search/women/waist/imagesIMG_2594_13.jpg"/></li>
			<li><img src="../../../../static/img/search/women/waist/imagesIMG_2594_14.jpg"/></li>
			<li><img src="../../../../static/img/search/women/waist/imagesIMG_2594_15.jpg"/></li>
			<li><img src="../../../../static/img/search/women/waist/imagesIMG_2594_16.jpg"/></li>
			<li><img src="../../../../static/img/search/women/waist/imagesIMG_2594_17.jpg"/></li>
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
		margin: 0.05rem 0.2rem;
	}
	#shopList>li>img{
		width: 1.44rem;
		height: 2.28rem;
	}
</style>