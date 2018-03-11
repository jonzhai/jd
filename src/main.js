import Vue from 'vue';
import $ from 'zeptojs';
import VueRouter from "vue-router";
import App from './App.vue';
import Login from './components/Login.vue';
import search from './components/search.vue';
Vue.use(VueRouter);
const router = new VueRouter({
	routes:[
		{path:'/',component:App},
		{path:'/login',component:Login},
		{path:'/forgetPassword',component:Login},
		{path:'/reg',component:Login},
		{path:'/search',component:search},
	]

});

new Vue({
	router,
  el: '#app',
})
