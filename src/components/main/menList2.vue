<template>
	<div class="swiper-container swiper-container1" >
		<ul class="swiper-wrapper" id="shopList_2">
			<router-link to='ShopList/pic5'><li class="swiper-slide"><img src="../../../static/img/main/men/2570.jpg"/></li></router-link>
			<router-link to='ShopList/pic6'><li class="swiper-slide"><img src="../../../static/img/main/men/2571.jpg"/></li></router-link>
			<router-link to='ShopList/pic7'><li class="swiper-slide"><img src="../../../static/img/main/men/2572.jpg"/></li></router-link>
			<router-link to='ShopList/pic8'><li class="swiper-slide"><img src="../../../static/img/main/men/IMG_2617_07.jpg"/></li></router-link>
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
	          new Swiper('.swiper-container1',{
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
	}
	#shopList_2>a>li>img{
		width: 1.89rem;
		height: 3.6rem;
	}
</style>