<template>
	<div>
	<div id="content">
			<div  >
				
			</div>
			<div class="swiper-container" id="TabImgContent">
				<div class="swiper-wrapper">				
					<div class="swiper-slide"><img src="../../../static/img/main/women/2572.jpg"></div>
					<div class="swiper-slide"><img src="../../../static/img/main/women/imagesIMG_2609_02.jpg"></div>
					<div class="swiper-slide"><img src="../../../static/img/main/women/imagesIMG_2610_02.jpg"></div>
					<div class="swiper-slide"><img src="../../../static/img/main/women/imagesIMG_2611_02.jpg"></div>
					<div class="swiper-slide"><img src="../../../static/img/main/women/imagesIMG_2612_02.jpg"></div>
				</div>
			</div>
			<div style="width: 7.5rem;height: 1.5rem;">
				<img src="../../../static/img/main/women/2573.jpg" style="width: 7.5rem;height: 1.5rem;"/>
			</div>
			<ul id="shopList_1">
				<router-link to='ShopList/pic9'><li><img src="../../../static/img/main/women/2574.jpg"/></li></router-link>
				<router-link to='ShopList/pic10'><li><img src="../../../static/img/main/women/2575.jpg"/></li></router-link>
				<router-link to='ShopList/pic11'><li><img src="../../../static/img/main/women/2576.jpg"/></li></router-link>
			</ul>
			<img src="../../../static/img/main/women/2577.jpg" style="margin: 0.4rem 0;"/>
			<women-list2></women-list2>
			<img  src="../../../static/img/main/women/2581.jpg"/>
			<women-list3></women-list3>
			<img style="margin: 0.45rem 0;" src="../../../static/img/main/women/2585.jpg"/>
	</div>
	</div>
</template>

<script>
	import Swiper from '../../../static/file/swiper.js'
	import adap from '../../../static/file/adaption'
	import womenList2 from './womenList2.vue'
	import womenList3 from './womenList3.vue'
	export default {
		components:{womenList2,womenList3},
	   data(){
	        return{
	        	
	        }
	    },
	    mounted:function(){

	    },
	    methods:{
	    	//设置swiper样式
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
	    	//一直调用swiper的函数
			 this.mySwiper()
	    }
	}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	#content{
		position: fixed;
		top: 2.10rem;
		width: 7.5rem;
		height: 10.28rem;
		overflow-y: auto;
	}
	#TabImgContent{
		width: 7.5rem;
		height: 7.5rem;
	}
	#TabImgContent>div>div>img{
		width: 7.5rem;
		height: 7.5rem;
	}
	.swiper-container{
		width: 7.5rem;
		height: 3.5rem;
	}
	.swiper-slide{
		text-align: center;
	}
	#shopList_1{
		width: 7.5rem;
		height: 3.6rem;
	}
	#shopList_1>a>li{
		list-style: none;
		height: 3.6rem;
		float: left;
		margin: 0 0.3rem;
	}
	#shopList_1>a>li>img{
		width: 1.89rem;
		height: 3.6rem;
	}
</style>