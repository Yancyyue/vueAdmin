import * as types from './mutations_type'

export const addMenu = ({ commit }, menuItems) => {  
  if (menuItems.length > 0) {  
    commit(types.ADD_MENU, menuItems)  
  }  
}  
  
export const loadRoutes = ({ commit }) => {  
  commit(types.LOAD_ROUTES)  
}  