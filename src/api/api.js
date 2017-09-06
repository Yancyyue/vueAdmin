import axios from 'axios';
// http://192.168.0.102:8080/operation/mall/shop/list
let base = '';
let instance = axios.create({
    headers: {'content-type': 'application/json'}
})
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return instance.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return instance.post("http://192.168.0.102:8080/operation/mall/shop/item/list/all", params); };

export const temFn= params => {return instance.post("http://192.168.0.102:8080/mall/operate/templet/templetInfo",params)};

export const removeUser = params => { return instance.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return instance.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return instance.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return instance.get(`${base}/user/add`, { params: params }); };

export const searchCommodity = params => { return instance.post("http://192.168.0.102:8080/operation/mall/shop/item/list/baseKeyword", params); };