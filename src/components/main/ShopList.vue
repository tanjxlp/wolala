<template>
	<div style="height: 14rem;">
		<img v-bind:src="picList.img"/>
		<p class="picTitle">{{picList.title}}</p>
		<p class="picPrice">{{picList.price}}</p>
		<p class="picMade">{{picList.made}}</p>
		<p class="picSizeText">尺寸:</p>
		<select id="sizeSel" class="picSize" > 
			<option v-for="(x,index) in picList.size">{{picList.size[index]}}</option>
		</select>
		<p class="picColor"><span style="font-size:0.3rem ;">颜色:&nbsp;&nbsp;</span>{{picList.color}}</p>
		<div class="shopWrapper">
			<router-link to="/home">
				<div style="width: 2rem;height: 0.9rem;background: rgba(250,247,247,0.6);">
					<i style="color:black;position:absolute;top: 0.2rem;left:0.1rem;font-size:0.65rem ;" class="fa fa-chevron-left"></i>
					<p  style="color:black;font-size:0.45rem ;position: absolute;left: 0.6rem;top:0.15rem;">返回</p>
				</div>
			</router-link>	
			<div id="shopCarBtn" @click="GetShopCarList()">
				<p  style="color:white;font-size:0.45rem ;position: absolute;left: 0.25rem;top:0.15rem;">加入购物车</p>
			</div>
			<router-link to="/home">
				<div id="buyBtn">
					<p  style="color:white;font-size:0.45rem ;position: absolute;left:0.45rem;top:0.15rem;">立即购买</p>
				</div>
			</router-link>	
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import store from '../../vuex/main/Store.js'
	import { mapState } from 'vuex'
	export default {
		store,
		data(){
			return{
				picList:{}	
			}
		},
		methods:{
			GetShopCarList(){
				//把数据添加到购物车
				this.$store.state.shopCar.push(this.picList)
				alert("添加成功")
			},		
		},
		mounted(){
				//获取路由传过来的参数
			   var dat = this.$route.params.list
			   //获取到vuex的shopList的路径
			   var oj = this.$store.state.shopList;
			   //获取当前路径的数据赋给picList
				if(oj.hasOwnProperty(dat)){
					this.picList = oj[dat]
				}
		},
//		computed:{ //动态计算
////			getV(){
////				return this.title=this.$store.state.pic1.title
////			}
//			...mapState['shopList']
//			
//	  }
	}
</script>

<style scoped="scoped">
	@import url("../../../static/css/font-awesome.min.css");
	*{padding: 0;margin: 0;}
	.picTitle{font-size:0.4rem ;position: relative;left: 0.2rem;width: 7.3rem;}
	.picPrice{font-size:0.3rem ;position: relative;top: 0.3rem;left: 0.1rem;width: 2rem;}
	.picMade{font-size:0.3rem ;position: relative;left: 6rem;top: -0.02rem;width: 1rem;}
	#sizeSel{position: relative;top: -1.12rem;left: 1.2rem;}
	.picSize{font-size:0.3rem ;}
	.picSizeText{position: relative;left: 0.2rem;font-size:0.3rem;width: 2rem;}
	.picColor{font-size:0.3rem ;position: relative;top: -1.7rem;left: 5rem;width: 2.3rem;}
	.shopWrapper{width: 7.5rem;height: 0.9rem;background: rgba(255,255,255,0.7);position: fixed;bottom: 0;}
	#shopCarBtn{position: absolute;top: 0;left: 2rem;width: 2.78rem;height: 0.9rem;background: rgba(83,73,73,0.6);}
	#buyBtn{position: absolute;top: 0;left: 4.78rem;width: 2.78rem;height: 0.9rem;background: rgba(0,0,0,0.6);}
</style>