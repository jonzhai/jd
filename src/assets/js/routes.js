import App from '../../App.vue';
import Login from '../../components/Login.vue';
import Reg from '../../components/reg.vue';
import search from '../../components/search.vue';
import classfiy from '../../components/classfiy.vue';
import goodsListPage from '../../components/goodsListPage.vue';
import personalCenter from '../../components/personalCenter.vue';

export default{
    routes:[
		{path:'/',component:App},
		{path:'/home',component:App},
		// {path:'/login/:name',component:Login},
		{path:'/login',component:Login},
		{path:'/reg',component:Reg},
		{path:'/search',component:search},
		{path:'/classfiy',component:classfiy},
		{path:'/goodsListPage/:key',component:goodsListPage},
		{
			path:'/personalCenter',component:personalCenter,
			children:[{
				path: ':id',
				component:personalCenter
			}]
		},
		
	]


}