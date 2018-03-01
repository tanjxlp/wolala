<template>
	<div>
		<div id="top">
			<router-link to="/home">
				<i class="fa fa-angle-left" id="backBtnLogo"></i>
				<p id="backBtn">back</p>
			</router-link>
		</div>
		<div id="shopWrapper">
			<div class="shopContent" v-for="(x,index) in $store.state.shopCar">
				<input type="checkbox" class="shopCheck" v-model="x.check"/>
				<img class="shopImg" v-bind:src="$store.state.shopCar[index].img"/>
				<div class="shopTitle">
					<p class="shopTitleText">{{$store.state.shopCar[index].title}}</p>
				</div>
				<p class="shopColor" >{{$store.state.shopCar[index].color}}</p>
				<p class="shopSize">{{$store.state.shopCar[index].size}}</p>
				<p class="shopPrice">{{$store.state.shopCar[index].price}}</p>
			</div>
			<div id="foot">
				<input type="checkbox" class="allCheckInp" @click="checkAll()" v-model="isChecked"/>
				<p class="allCheckInpText">全选</p>
				<input type="button" class="allDelInp" value="删除" @click="checkDel()"/>
			    <p class="payText">实付:</p>
			    <p class="centry">￥</p>
			    <p class="allPriceText">{{getAllPrice}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import store from '../vuex/main/Store.js'
	import { mapState } from 'vuex'
	export default {
		store,
		data(){
			return {
				//创建接受数据的实例
				shopData:{},
				allPrice:"",
				isChecked:false
			}
		},
		methods:{
			//设置全选函数
		 	checkAll(){  
	       		if(this.isChecked){
	       			for(var i=0;i<this.$store.state.shopCar.length;i++){
						this.$store.state.shopCar[i].check=false; 
								 		
					}
	       		}else{
	       			for(var i=0;i<this.$store.state.shopCar.length;i++){
						this.$store.state.shopCar[i].check=true; 
						console.log(11)
					}
	       		}
	       	},
	       	//设置全部删除函数
	       	checkDel(){
       			for(var i=0;i<this.$store.state.shopCar.length;i++){
					if(this.$store.state.shopCar[i].check){
						this.$store.state.shopCar.splice(i,1)	
						i--
					}					 		
				}
	       	}
		},
		mounted(){
			
		},
		computed:{
			//时刻监听总价
			getAllPrice(){
				var num = 0 
				for(var i=0;i<this.$store.state.shopCar.length;i++){
					num += Number(this.$store.state.shopCar[i].price.split("").splice(1).join("")) 
				}
				return num
			}
		}
	}
</script>

<style>
	@import url("../../static/css/font-awesome.min.css");
	*{padding: 0;margin: 0;}
	#top{width: 7.5rem;height: 0.8rem;background: black;position: fixed;top: 0;}
	#backBtnLogo{font-size: 0.8rem;color: white;position: absolute;top: 0.01rem;left: 0.3rem;}
	#backBtn{font-size: 0.5rem;color: white;position: absolute;top: 0.05rem;left: 0.8rem;}
	#shopWrapper{width: 7.5rem;height: 11.5rem;position: fixed;top: 0.8rem;overflow-y: auto;background: #f6f7f8;}
	.shopContent{width: 7.5rem;height: 1.5rem;position: relative;background: white;}
	.shopCheck{width: 0.45rem;height: 0.45rem;position: relative;top: -0.1rem;left: 0.2rem;}
	.shopImg{width:1rem;height: 1rem;position: relative;top: 0.2rem;left: 0.2rem;}
	.shopTitle{width: 3.6rem;height: 0.8rem;position: absolute;top: 0.3rem;left: 28%;}
	.shopTitleText{font-size:0.25rem ;}
	.shopColor{position: absolute;bottom: 0;left:28%;font-size: 0.35rem;}
	.shopSize{position: absolute;bottom: 0;left:65%;font-size: 0.35rem;}
	.shopPrice{position: absolute;bottom: 0.5rem;right:0.35rem;font-size: 0.35rem;}
	#foot{width: 7.5rem;height: 1rem;background: white;position: fixed;bottom: 0;}
	.allCheckInp{width: 0.5rem;height: 0.5rem;position: absolute;top: 0.25rem;left: 0.3rem;}
	.allCheckInpText{font-size: 0.4rem;position: absolute;top: 0.25rem;left: 1rem;}
	.payText{font-size: 0.5rem;position: absolute;top: 0.17rem;left: 4.2rem;}
	.centry{font-size: 0.5rem;position: absolute;top: 0.2rem;left: 5.3rem;color: #FF0000;}
	.allPriceText{font-size: 0.5rem;position: absolute;top: 0.2rem;left: 5.8rem;color: #FF0000;}
	.allDelInp{width: 1.5rem;height: 0.5rem;position: absolute;top: 0.25rem;left: 2rem; font-size: 0.35rem;}
</style>