import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/components/menu.vue'
import shopCar from '@/components/shopCar.vue'
import main from '@/components/main/main.vue'
import ShopList from '@/components/main/ShopList.vue'
import mainMen from '@/components/main/men.vue'
import mainWomen from '@/components/main/women.vue'
import mainBrand from '@/components/main/brand.vue'
import search from '@/components/search/search.vue'
import men from '@/components/search/men/men.vue'
import frock from '@/components/search/men/frock.vue'
import pants from '@/components/search/men/pants.vue'
import shoes from '@/components/search/men/shoes.vue'
import omament from '@/components/search/men/omament.vue'
import cases from '@/components/search/men/cases.vue'
import coat from '@/components/search/men/coat.vue'
import cowboy from '@/components/search/men/cowboy.vue'
import women from '@/components/search/women/women.vue'
import waist from '@/components/search/women/waist.vue'
import trousers from '@/components/search/women/trousers.vue'
import shoe from '@/components/search/women/shoe.vue'
import omaments from '@/components/search/women/omaments.vue'
import laggage from '@/components/search/women/laggage.vue'
import loose from '@/components/search/women/loose.vue'
import cowpoke from '@/components/search/women/cowpoke.vue'
import product from '@/components/product/product.vue'
import information from '@/components/information/information.vue'
import me from '@/components/me/me.vue'
import login from '@/components/me/login.vue'
import enter from '@/components/me/enter.vue'
import register from '@/components/me/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/shopCar',component:shopCar},
    {path:'/ShopList/:list',component:ShopList},
    {path:'/',redirect:'/home'},
    {path:'/home',component:menu,
    children:[
    {path:'/',component:main,
    children:[
     {path:'/',component:mainMen},
     {path:'/men',component:mainMen},
     {path:'/women',component:mainWomen},
     {path:'/brand',component:mainBrand}
    ]},
    {path:'/search',component:search,
    children:[
    {path:'/',redirect:'/search/men'},
    {path:'/search/men',component:men,
    children:[
    {path:'/',component:frock},
    {path:'/search/frock',component:frock},
    {path:'/search/pants',component:pants},
    {path:'/search/shoes',component:shoes},
    {path:'/search/omament',component:omament},
    {path:'/search/cases',component:cases},
    {path:'/search/coat',component:coat},
    {path:'/search/cowboy',component:cowboy}
    ]},
    {path:'/search/women',component:women,
    children:[
    {path:'/',component:waist},
    {path:'/search/waist',component:waist},
    {path:'/search/trousers',component:trousers},
    {path:'/search/shoe',component:shoe},
    {path:'/search/omaments',component:omaments},
    {path:'/search/laggage',component:laggage},
    {path:'/search/loose',component:loose},
    {path:'/search/cowpoke',component:cowpoke}
    ]}
    ]},
    {path:'/product',component:product},
    {path:'/information',component:information},
    {path:'/me',component:me},
    {path:'/me/login',component:login},
    {path:'/me/login/enter',component:enter},
    {path:'/me/login/register',component:register}
    ]} 
  ]
})
