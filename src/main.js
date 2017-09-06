import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import './assets/theme/theme-green/index.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './vuex/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './routes'
import Mock from './mock'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import { mapActions, mapGetters } from 'vuex'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
console.log(store)
//NProgress.configure({ showSpinner: false });
let admin = JSON.parse(sessionStorage.getItem('user'));
let adroute= sessionStorage.getItem('route');
const router = new VueRouter({
  routes
})
console.log(store.menuitems)
if(admin!==null&&adroute!==null){
  let routeLoad=adroute;
  store.commit('ADD_MENU', routeLoad);
  console.log(1)
  router.addRoutes(store.getters.menuitems);
  for(let route of store.getters.menuitems){
     router.options.routes.push(route);
  }
  console.log(store.mapActions)
  
}

router.beforeEach((to, from, next) => {
  NProgress.start();
  let routeLocal=sessionStorage.getItem('route')
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('route') 
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
 
  let routeJson=JSON.parse(routeLocal);

  if (user==null &&routeLocal==null&& to.path !== '/login') {
    next({ path: '/login' })
  }else if(user==null &&routeLocal==null&& to.path == '/login'){
    next()
  } else {
    next()
  }
})

router.afterEach(transition => {
NProgress.done();
});

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App },
  render: h => h(App)
})

