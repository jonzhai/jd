import Home from 'components/home/home.vue';
import Login from 'components/Login.vue';
import Reg from 'components/reg.vue';
import search from 'components/search.vue';
import classfiy from 'components/classfiy.vue';
import goodsListPage from 'components/goodsListPage.vue';
import personalCenter from 'components/personalCenter.vue';
import countManage from 'components/countManage.vue';
import goodsDetail from 'components/goodsDetail.vue';
import cart from 'components/cart/cart.vue';

import detail from 'components/detail/detail.vue';
import goods from 'components/detail/goods.vue';
import evalute from 'components/detail/evalute.vue';


export default{
    routes:[
		{path:'/', redirect:'/home'},
		{path:'/home',component:Home},
		// {path:'/login/:name',component:Login},
		{path:'/login',component:Login},
		{path:'/reg',component:Reg},
		{
			path:'/search',component:search,
			children:[{
				path: ':key',
				component:search
			}]
		},
		{path:'/classfiy',component:classfiy},
		{path:'/goodsListPage/:key',component:goodsListPage},
		{
			path:'/personalCenter',component:personalCenter,
			children:[{
				path: ':id',
				component:personalCenter
			}]
		},
		{path:'/countManage',component:countManage},
		{
			path:'/goodsDetail/:id',component:goodsDetail,
			children:[
				{
					path: 'goods',
					component:goods
				},
				{
					path: 'detail',
					component:detail
				},
				{
					path: 'evalute',
					component:evalute
				}
			]
		},
		{path:'/cart',component:cart}
	]


}