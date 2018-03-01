<template>
	<div class="swiper-container swiper-container" >
		<ul class="swiper-wrapper" id="shopList_2">
			<router-link to='ShopList/pic1'><li class="swiper-slide"><img src="../../../static/img/main/men/2565.jpg"/></li></router-link>
			<router-link to='ShopList/pic2'><li class="swiper-slide"><img src="../../../static/img/main/men/2566.jpg"/></li></router-link>
			<router-link to='ShopList/pic3'><li class="swiper-slide"><img src="../../../static/img/main/men/2567.jpg"/></li></router-link>
			<router-link to='ShopList/pic4'><li class="swiper-slide"><img src="../../../static/img/main/men/IMG_2617_03.jpg"/></li></router-link>
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