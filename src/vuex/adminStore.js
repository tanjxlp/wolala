// 下载 vuex 

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={ //储存状态的
	userInfor:[]
};
const mutations={

}
export default new Vuex.Store({
	state,mutations
})
