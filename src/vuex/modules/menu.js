import * as types from './../mutations_type.js'

export const state = {  
    items: [  
    ],  
    isLoadRoutes: false  
  }  
    
export const mutations = {  
    EXPAND_MENU:function (state, menuItem) {  
      if (menuItem.index > -1) {  
        if (state.items[menuItem.index] && state.items[menuItem.index].meta) {  
          state.items[menuItem.index].meta.expanded = menuItem.expanded  
        }  
      } else if (menuItem.item && 'expanded' in menuItem.item.meta) {  
        menuItem.item.meta.expanded = menuItem.expanded  
      }  
    },  
    ADD_MENU:function (state, menuItems) {  
      console.log(3)
      if (menuItems.length === 0) {  
        state.items = []  
      } else {  
        generateMenuItems(state.items, menuItems)  
      }  
    },  
    LOAD_ROUTES:function (state) {  
      state.isLoadRoutes = !state.isLoadRoutes  
    }  
  }  

  function generateMenuItems(a,b){
    let routes=[];
    let addjson;
    console.log(b)
    b=JSON.parse(b)
    
    for(let i=0;i<b.routes.length;i++){
      let thisroute=b.routes[i]
      addjson={
        path:b.routes[i].path,
        component:b.routes[i].component,
        name:b.routes[i].name,
        iconCls:b.routes[i].iconCls,
        children:[]
      }
      addjson.component= require(`./../../views/` + b.routes[i].component + `.vue`)
      let childArr;
      for(let a=0;a<thisroute.children.length;a++){
        childArr={
          path:thisroute.children[a].path,
          component:thisroute.children[a].component,
          name:thisroute.children[a].name
        }
        childArr.component= require(`./../../views/nav1/` + thisroute.children[a].component + `.vue`)
        addjson.children.push(childArr)
      }
      a.push(addjson)
    }
    console.log(a)
  }