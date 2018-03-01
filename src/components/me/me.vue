<template>
	<div>
		<div id="top">
			<div id="content">
				<div id="content_img">
					<img id="top_img" v-bind:src="listShow.img"/>
				</div>
				<div id="content_bottom">
					<router-link to="/me/login">
						<p style="font-size:0.38rem;color: white;">{{listShow.userName}}</p>
						<p style="font-size: 0.3rem;color: white;">{{listShow.loginText}}</p>
					</router-link>	
				</div>
			</div>
		</div>
		<ul id="nav">
			<router-link to="me/shopCar"><li>我的购物车</li></router-link>
			<router-link to="me/shopCar"><li>我的订单</li></router-link>
			<router-link to="me/shopCar"><li>收货地址</li></router-link>
			<router-link to="me/shopCar"><li>惊喜优惠机会</li></router-link>
			<router-link to="me/shopCar"><li>代金券</li></router-link>
			<router-link to="me/shopCar"><li>商家入驻</li></router-link>
		</ul>
	</div>
</template>

<script>
	import store from'../../vuex/adminStore.js'
	export default {
		store,
		data(){
			return {
				listShow:{
					userName:"",
					loginText:"请先登录",
					img:""
				}
			}
		},
		methods:{
			//如果已注册会出现头像和已登录
			loginFn(){
				if(this.$store.state.userInfor[0].flag==true){
					this.listShow.userName = this.$store.state.userInfor[0].userName
					this.listShow.loginText = "已登录"
					this.listShow.img = "../../../static/img/me/IMG_2207.JPG"
				}else{
					this.listShow.userName = "尚未登录"
				}
			}	
		},
		mounted(){
			this.loginFn()	
		},
		computed:{
	
		}
	}
</script>

<style scoped>
	*{padding: 0;margin: 0;}
	a{
		text-decoration: none;
		color: black;
	}
	#top{
		width: 7.5rem;
		height: 6.07rem;
		background: rgba(56,39,31,0.9);
		position: fixed;
		top: 0.43rem;
	}
	#content{
		width: 2.05rem;
		height: 3.22rem;
		position: fixed;
		left: 50%;
		top: 1.5rem;
		margin: 0 -1.02rem;
	}
	#content_bottom>a>p{
		text-align: center;
		margin: 0.1rem 0;
	}
	#content_img{
		width: 2.05rem;
		height: 2.22rem;
		background: white;
		border-radius: 50%;
		overflow: hidden;
	}
	#content_bottom{
		width: 2.05rem;
		height: 1rem;
	}
	#nav{
		width: 7.2rem;
		height: 5.9rem;
		position: fixed;
		top: 6.52rem;
		left: 0.15rem;
	}
	#nav>a>li{
		list-style: none;
		width: 7.2rem;
		height: 0.9rem;
		border-bottom: 0.01rem solid gainsboro;
		font-size:0.33rem ;
	}
	#top_img{
		width: 2.22rem;
		height: 2.22rem;
	}
</style>