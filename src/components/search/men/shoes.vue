<template>
	<div>
		<img style="margin: 0 0.14rem;" src="../../../../static/img/search/men/frock/imagesIMG_2587_03.jpg">
		<ul id="shopList">

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
		margin: 0 0.3rem;
	}
</style>