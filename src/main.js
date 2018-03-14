import Vue from 'vue';
import $ from 'zeptojs';
import VueRouter from "vue-router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import routes from './assets/js/routes.js';


Vue.use(VueRouter);
Vue.prototype.$axios = axios;

const router = new VueRouter(routes);
new Vue({
	router,
	axios,
	el: '#app',
})
