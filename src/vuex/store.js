import Vue from 'vue'  
import Vuex from 'vuex'  
import * as actions from './actions'  
import * as getters from './getters'  
  

import {mutations,state} from './modules/menu' 
  
Vue.use(Vuex)  
const store = new Vuex.Store({ 
  strict: false,  
  state,
  mutations,
  actions,
  getters
  
})  
export default store  
// import Vue from 'vue';
// import Vuex from 'vuex';
// import app from './modules/app';
// import user from './modules/user';
// import permission from './modules/permission';
// import getters from './getters';

// Vue.use(Vuex);

// const store = new Vuex.Store({
//   modules: {
//     app,
//     user,
//     permission
//   },
//   getters
// });

// export default store
