<template>
	<div class="swiper-container" >
		<div class="swiper-wrapper" style="position: relative;top: 0.5rem;">
			<div class="swiper-slide"><img src="../../../static/img/product/IMG_2647_03.jpg"/></div>
			<div class="swiper-slide"><img src="../../../static/img/product/IMG_2648_03.jpg"/></div>
			<div class="swiper-slide"><img src="../../../static/img/product/IMG_2649_03.jpg"/></div>
			<div class="swiper-slide"><img src="../../../static/img/product/IMG_2650_03.jpg"/></div>
			<div class="swiper-slide"><img src="../../../static/img/product/IMG_2651_03.jpg"/></div>
			<div class="swiper-slide"><img src="../../../static/img/product/IMG_2652_03.jpg"/></div>
			<div class="swiper-slide"><img src="../../../static/img/product/IMG_2653_03.jpg"/></div>
			<div class="swiper-slide"><img src="../../../static/img/product/IMG_2654_03.jpg"/></div>
			<div class="swiper-slide"><img src="../../../static/img/product/IMG_2655_03.jpg"/></div>
			<div class="swiper-slide"><img src="../../../static/img/product/IMG_2656_03.jpg"/></div>
		</div>	
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
	    	//设置swiper样式
	        mySwiper(){
		 		new Swiper('.swiper-container',{
					effect : 'coverflow',//3d流
					slidesPerView:1,//每个面板显示几条轮播项
					width:1200,
					loop:true,
					speed:3000,
					autoplay:{
						delay:2000,
					},
					centeredSlides:true//默认第一项在中间
				})
	        },
	    },
	    mounted(){
	    	//调用swiper
			 this.mySwiper()
	    }
	}
</script>

<style scoped="scoped">
	*{padding: 0;margin: 0;}
	img{
		width: 7.5rem;
	}

</style>