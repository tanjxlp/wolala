<template>
	<div>
	<div id="content">
		<div class="swiper-container" id="TabImgContent">
			<div class="swiper-wrapper">				
				<div class="swiper-slide"><img src="../../../static/img/main/men/img01.png"></div>
				<div class="swiper-slide"><img src="../../../static/img/main/men/imagesIMG_2607_02.jpg"></div>
				<div class="swiper-slide"><img src="../../../static/img/main/men/imagesIMG_2608_02.jpg"></div>
			</div>
		</div>
		<div style="width: 7.5rem;height: 1.5rem;">
			<img src="../../../static/img/main/men/HotPro.png" style="width: 7.5rem;height: 1.5rem;"/>
		</div>
		<men-list1></men-list1>
		<img src="../../../static/img/main/men/2569.jpg" style="margin: 0.4rem 0;"/>
		<men-list2></men-list2>
		<img style="margin: 0.3rem 0;" src="../../../static/img/main/men/demo-imgIMG_2567_02.jpg"/>
		<ul id="shopList_3" style="overflow: hidden;">
			<router-link to='shopList'><li><img src="../../../static/img/main/men/2573.jpg"/></li></router-link>
			<router-link to='shopList'><li><img src="../../../static/img/main/men/2574.jpg"/></li></router-link>
			<router-link to='shopList'><li><img src="../../../static/img/main/men/2575.jpg"/></li></router-link>
		</ul>
		<img style="margin: 0.45rem 0;" src="../../../static/img/main/men/demo-imgIMG_2568_02.jpg"/>
	</div>
	</div>
</template>

<script>
	import Swiper from '../../../static/file/swiper.js'
	import adap from '../../../static/file/adaption'
	import menList1 from './menList1.vue'
	import menList2 from './menList2.vue'
	export default {
		components:{menList1,menList2},
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
 @import url("../../assets/swiper.css" )
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
	#shopList_3{
		width: 7.5rem;
		height: 2.88rem;
		margin: -0.2rem -0.3rem;
	}
	#shopList_3>a>li{
		list-style: none;
		height: 2.88rem;
		float: left;
		margin:0 0.05rem;
	}
	#shopList_3>a>li>img{
		width: 2.33rem;
		height: 2.88rem;
	}
</style>