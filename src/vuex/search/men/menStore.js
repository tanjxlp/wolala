import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={ 
	shopList:{
		pic1:{
			img:"../../../static/img/main/men/menList/IMG_2619_02.jpg",
			title:"韩国Liunick-宽松款纯手工羊毛大衣-黑色",
			price:"￥2317.00",
			made:"韩国",
			size:["L","XL"],
			color:"BLACK"
		},
		pic2:{
			img:"../../../static/img/main/men/menList/IMG_2620_02.jpg",
			title:"韩国Liunick-格纹排扣中长外套-黑色",
			price:"￥1723.00",
			made:"韩国",
			size:["L","XL"],
			color:"BLACK"
		},
		pic3:{
			img:"../../../static/img/main/men/menList/IMG_2621_02.jpg",
			title:"韩国Liunick-羊毛OVERSIZE翻领长大衣-酒红色",
			price:"￥1485.00",
			made:"韩国",
			size:"FREE",
			color:"WINE"
		},
		pic4:{
			img:"../../../static/img/main/men/menList/IMG_2622_02.jpg",
			title:"韩国Liunick-黑色格纹羊毛翻领大衣-黑色",
			price:"￥1723.00",
			made:"韩国",
			size:["L","XL"],
			color:"BLACK"
		},
		pic5:{
			img:"../../../static/img/main/men/menList/IMG_2623_02.jpg",
			title:"韩国VARZAR-描线红边帽带鸭舌帽-黑色",
			price:"￥273.00",
			made:"首尔",
			size:'Free',
			color:"BLACK"
		},
		pic6:{
			img:"../../../static/img/main/men/menList/IMG_2624_02.jpg",
			title:"韩国VARZAR-刺绣补丁水洗鸭舌帽-黑色",
			price:"￥273.00",
			made:"首尔",
			size:'Free',
			color:"BLACK"
		},
		pic7:{
			img:"../../../static/img/main/men/menList/IMG_2625_02.jpg",
			title:"韩国VARZAR-刺绣补丁水洗鸭舌帽-藏青色",
			price:"￥273.00",
			made:"首尔",
			size:'Free',
			color:"Navy"
		},
		pic8:{
			img:"../../../static/img/main/men/menList/IMG_2628_02.jpg",
			title:"韩国VARZAR-Varzar印花交叉绑带鸭舌帽-白色",
			price:"￥273.00",
			made:"首尔",
			size:'Free',
			color:"White"
		},
		pic9:{
			img:"../../../static/img/main/women/womenList/IMG_2632_02.jpg",
			title:"Forbedfellow 真丝丝绸家居服法式睡衣三件套+...",
			price:"￥1480.00",
			made:"中国，广州",
			size:['S','M','L'],
			color:"豆沙粉"
		},
		pic10:{
			img:"../../../static/img/main/women/womenList/IMG_2633_02.jpg",
			title:"Forbedfellow 真丝丝绸家居服法式睡衣三件套+...",
			price:"￥1310.00",
			made:"中国，广州",
			size:['S','M','L'],
			color:"豆沙粉"
		},
		pic11:{
			img:"../../../static/img/main/women/womenList/IMG_2633_02.jpg",
			title:"Forbedfellow 真丝丝绸家居服法式睡衣三件套+...",
			price:"￥1200.00",
			made:"中国，广州",
			size:['S','M','L'],
			color:"豆沙粉"
		},
		pic12:{
			img:"../../../static/img/main/women/womenList/IMG_2634_02.jpg",
			title:"泰国Coralist-Luce珊瑚色荷叶袖绑带小外套",
			price:"￥273.48",
			made:"泰国，曼谷",
			size:"Free size",
			color:"Coral"
		},
		pic13:{
			img:"../../../static/img/main/women/womenList/IMG_2635_02.jpg",
			title:"泰国Coralist-Luce粉色繁花比基尼泳衣",
			price:"￥325.08",
			made:"泰国，曼谷",
			size:['S','M','L'],
			color:"Coral"
		},
		pic14:{
			img:"../../../static/img/main/women/womenList/IMG_2636_02.jpg",
			title:"泰国Coralist-Luce连体撞色V领吊带泳衣",
			price:"￥342.28",
			made:"泰国，曼谷",
			size:['S','M','L'],
			color:"Floribun/Wine"
		},
		pic14:{
			img:"../../../static/img/main/women/womenList/IMG_2637_02.jpg",
			title:"泰国Coralist-Luce酒红碎花低胸性感分体泳衣",
			price:"￥342.28",
			made:"泰国，曼谷",
			size:['S','M','L'],
			color:"Floribun/Wine"
		}	
	}
};
const mutations={

}

export default new Vuex.Store({
	state,mutations
})