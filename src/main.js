import Vue from 'vue';
import $ from 'zeptojs';
import VueRouter from "vue-router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as common from './assets/js/common.js';
import routes from './assets/js/routes.js';
import store from './store/index.js';


console.log('fsdfd'.trim());
Vue.use(VueRouter);
Vue.prototype.$axios = axios;

const router = new VueRouter(routes);
new Vue({
	router,
	axios,
	store,
	el: '#app',
})
