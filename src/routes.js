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
import store from './vuex/store'
// console.log(axios)

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/', 
        component: Home,
        name:'',
        iconCls: 'fa fa-desktop',//图标样式class
        leaf:true,
        children: [
            { path: '/main', component: Main, name: '主页' }
        ]
    }
    ,
    ...generateRoutesFromMenu(store.state.items)  
   
];
function generateRoutesFromMenu (menu = [], routes = []) {  
    for (let i = 0, l = menu.length; i < l; i++) {  
      let item = menu[i]  
      if (item.path) {  
        routes.push(item)  
      }  
    }  
    return routes  
  }  
// function generateRoutesFromMenu (routeJson) {  
//     let routes=[];
//     let addjson;
//     console.log(123)
    
//     for(let i=0;i<routeJson.routes.length;i++){
//       let thisroute=routeJson.routes[i]
//       addjson={
//         path:routeJson.routes[i].path,
//         component:routeJson.routes[i].component,
//         name:routeJson.routes[i].name,
//         iconCls:routeJson.routes[i].iconCls,
//         children:[]
//       }
//       addjson.component= require(`./views/` + routeJson.routes[i].component + `.vue`)
//       let childArr;
//       for(let a=0;a<thisroute.children.length;a++){
//         childArr={
//           path:thisroute.children[a].path,
//           component:thisroute.children[a].component,
//           name:thisroute.children[a].name
//         }
//         childArr.component= require(`./views/nav1/` + thisroute.children[a].component + `.vue`)
//         addjson.children.push(childArr)
//       }
//       addroute.push(addjson)
//     }
//     console.log(addroute)
//     return routes  
//   }  
// {
//     path: '/',
//     component: Home,
//     name: '权限管理',
//     iconCls: 'fa fa-shield',//图标样式class
//     children: [
//         { path: '/table', component: Table, name: '角色列表'},
//         { path: '/form', component: Form, name: 'Form' },
//         { path: '/user', component: user, name: '列表' }
//     ]
// },
// {
//     path: '/',
//     component: Home,
//     name: '导航二',
//     iconCls: 'fa fa-id-card-o',
//     children: [
//         { path: '/page4', component: Page4, name: '页面4' },
//         { path: '/page5', component: Page5, name: '页面5' }
//     ]
// },
// {
//     path: '/',
//     component: Home,
//     name: '',
//     iconCls: 'fa fa-address-card',
//     leaf: true,//只有一个节点
//     children: [
//         { path: '/page6', component: Page6, name: '导航三' }
//     ]
// },
// {
//     path: '/',
//     component: Home,
//     name: 'Charts',
//     iconCls: 'fa fa-bar-chart',
//     children: [
//         { path: '/echarts', component: echarts, name:'echarts' }
//     ]
// },
// {
//     path: '*',
//     hidden: true,
//     redirect: { path: '/404' }
// }
export default routes;