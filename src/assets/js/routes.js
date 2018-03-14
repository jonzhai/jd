import App from '../../App.vue';
import Login from '../../components/Login.vue';
import search from '../../components/search.vue';
import goodsListPage from '../../components/goodsListPage.vue';
export default{
    routes:[
		{path:'/',component:App},
		{path:'/login',component:Login},
		{path:'/forgetPassword',component:Login},
		{path:'/reg',component:Login},
		{path:'/search',component:search},
		{path:'/goodsListPage',component:goodsListPage},
	]


}