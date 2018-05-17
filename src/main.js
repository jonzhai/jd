import Vue from 'vue';
// import $ from 'zeptojs';
import VueRouter from "vue-router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as common from './assets/js/common.js';
import routes from './assets/js/routes.js';
import store from './store/index.js';
import VueLazyload from 'vue-lazyload'
import fastclick from 'fastclick';
import {mapActions} from 'vuex';
import App from './App.vue'
Vue.use(VueRouter);
fastclick.attach(document.body);
Vue.use(VueLazyload, {
	loading: require('src/assets/images/nav0.png')
  })
Vue.prototype.$axios = axios;
const router = new VueRouter(routes);
new Vue({
	router,
	axios,
	store,
	el: '#app',
	render: h => h(App)
})
