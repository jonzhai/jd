import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import Login from './components/Login.vue';
  
Vue.use(VueRouter);
const router = new VueRouter({
	routes:[
		{path:'/',component:App},
		{path:'/login',component:Login},
		{path:'/forgetPassword',component:Login},
		{path:'/reg',component:Login},

	]

});

new Vue({
	router,
  el: '#app',
})
