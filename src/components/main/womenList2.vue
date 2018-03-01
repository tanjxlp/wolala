<template>
	<div class="swiper-container" >
		<ul class="swiper-wrapper"  id="shopList_2">
			<router-link to='ShopList/pic12'><li class="swiper-slide"><img src="../../../static/img/main/women/2578.jpg"/></li></router-link>
			<router-link to='ShopList/pic13'><li class="swiper-slide"><img src="../../../static/img/main/women/2579.jpg"/></li></router-link>
			<router-link to='ShopList/pic14'><li class="swiper-slide"><img src="../../../static/img/main/women/2580.jpg"/></li></router-link>
			<router-link to='ShopList/pic15'><li class="swiper-slide"><img src="../../../static/img/main/women/IMG_2618_03.jpg"/></li></router-link>
		</ul>
	</div>
</template>

<script>
	import Swiper from '../../../static/file/swiper.js'
	import adap from '../../../static/file/adaption'
	export default {
	   data(){
	        return{
	        	
	        }
	   },
	    methods:{
	        mySwiper(){
	          new Swiper('.swiper-container',{
							direction: 'horizontal',
				speed: 2000,
				loop:true,
				autoplay: {
					delay: 2000,
					 disableOnInteraction: false
				},
				pagination:{
					el: '.swiper-pagination',
					clickable: true
				},
				navigation:{
					prevEl:'.swiper-button-prev',
					nextEl:'.swiper-button-next'
				},
				scrollbar:{
					el:'.swiper-scrollbar'
				}
			})
	        }
	    },
	    mounted(){
			 this.mySwiper()
	    }
	}
</script>

<style scoped="scoped">
	*{padding: 0;margin: 0;}
	#shopList_2{
		width: 7.5rem;
		height: 3.6rem;
		margin: -0.2rem 0;
	}
	#shopList_2>a>li{
		list-style: none;
		height: 3.6rem;
		float: left;
		margin: 0 0.02rem;
	}
	#shopList_2>a>li>img{
		width: 1.89rem;
		height: 3.6rem;
	}
</style>