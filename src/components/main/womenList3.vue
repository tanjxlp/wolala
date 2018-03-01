<template>
	<div class="swiper-container" >
		<ul class="swiper-wrapper" id="shopList_3">
			<router-link to='ShopList/pic16'><li class="swiper-slide"><img src="../../../static/img/main/women/2582.jpg"/></li></router-link>
			<router-link to='ShopList/pic17'><li class="swiper-slide"><img src="../../../static/img/main/women/2583.jpg"/></li></router-link>
			<router-link to='ShopList/pic18'><li class="swiper-slide"><img src="../../../static/img/main/women/2584.jpg"/></li></router-link>
			<router-link to='ShopList/pic19'><li class="swiper-slide"><img src="../../../static/img/main/women/IMG_2618_07.jpg"/></li></router-link>
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
	#shopList_3{
		width: 7.5rem;
		height: 3.6rem;
		margin: -0.2rem 0;
	}
	#shopList_3>a>li{
		list-style: none;
		height: 3.6rem;
		float: left;
		margin: 0 0.02rem;
	}
	#shopList_3>a>li>img{
		width: 1.89rem;
		height: 3.6rem;
	}
</style>