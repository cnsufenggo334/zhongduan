import axios from 'axios';
const axiosGet = (url,params)=>{
	return new Promise((resolve,reject)=>{
		//根据url和参数请求数据，请求成功就resolve(),失败reject()
		axios.get(url,{params:params})
			.then((res)=>{
				resolve(res.data);//请求成功就resolve(),执行下一步
			})
			.catch((err)=>{
				reject(err)
			})
	})
}

//post的参数 {}==》对象转字符串 qs
const axiosPost = (url,params)=>{
	return new Promise((resolve,reject)=>{
		//根据url和参数请求数据，请求成功就resolve(),失败reject()
		params = qs.stringify(params);//对象转字符串
		axios.post(url,{params:params})
			.then((res)=>{
				resolve(res.data);//请求成功就resolve(),执行下一步
			})
			.catch((err)=>{
				reject(err)
			})
	})
}

export default{
  get:axiosGet,
  post:axiosPost
}
