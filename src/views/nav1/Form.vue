<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="活动名称">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="活动区域">
			<el-select v-model="form.region" placeholder="请选择活动区域">
				<el-option label="区域一" value="shanghai"></el-option>
				<el-option label="区域二" value="beijing"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="活动时间">
			<el-col :span="11">
				<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
			</el-col>
			<el-col class="line" :span="2">-</el-col>
			<el-col :span="11">
				<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
			</el-col>
		</el-form-item>
		<el-form-item label="即时配送">
			<el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
		</el-form-item>
		<el-form-item label="活动性质">
			<el-checkbox-group v-model="form.type">
				<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
				<el-checkbox label="地推活动" name="type"></el-checkbox>
				<el-checkbox label="线下主题活动" name="type"></el-checkbox>
				<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="特殊资源">
			<el-radio-group v-model="form.resource">
				<el-radio label="线上品牌商赞助"></el-radio>
				<el-radio label="线下场地免费"></el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="活动形式">
			<el-input type="textarea" v-model="form.desc"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button @click.native.prevent>取消</el-button>
		</el-form-item>
	</el-form>
	
</template>

<script>
	import util from '../../common/js/util'
	import NProgress from 'nprogress'
	import {temFn, getUserListPage, removeUser, batchRemoveUser, editUser, addUser,searchCommodity } from '../../api/api';
	import user from '../nav1/user'

	export default {
		data() {
			return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: '',
					name2:[]
				},
				modelList:"",
				groupout:"",
				groupin:"",
				outparam:"",
				inparam:""
			}
		},
		mounted(){
			this.getUsers();
		},
		methods: {
			onSubmit() {
				console.log(this.form);
			},
			getUsers() {
				let para = {
					page: this.page,
					rows: '10'
				};
				let cid={
					cId:"1279"
				};
				cid=JSON.stringify(cid);
				para=JSON.stringify(para)
				// this.listLoading = true;
				// NProgress.start();
				// this.keywordType= false;
				// temFn(cid).then((res) =>{
				// 	// console.log(res)
				// 	NProgress.done();
				// 	this.modelList=res.data.data.multiple;
				// 	this.groupin=res.data.data.multiple.group_in.title;
				// 	this.groupout=res.data.data.multiple.group_out.title;
				// 	this.inparam=res.data.data.multiple.group_in.params;
				// 	this.outparam=res.data.data.multiple.group_out.params;
				// 	console.log(this.outparam)
				// })
				
				// getUserListPage(para).then((res) => {
				// 	console.log(res)
				// 	this.total =Number( res.data.data.total);
				// 	this.users = res.data.data.rows;
				// 	this.listLoading = false;
				// 	NProgress.done();
				// });
			}
		}
	}

</script>