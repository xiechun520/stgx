import axios from 'axios'; // 引入axios
import qs from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
// vant的toast提示框组件，大家可根据自己的ui组件更改。

// 环境的切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://api.tianapi.com';}
	else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '';
}else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://vij365.com/cofC';}
	else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '';
}


  // get方法，对应get请求
  // @param {String} url [请求的url地址]
  // @param {Object} params [请求时携带的参数]

function get(url, params){
    return new Promise((resolve, reject) =>{
        const loading = this.$loading();
        axios.get(url, {
            params: params
        }).then(res => {
          loading.close();
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)
    })
});}


/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function post(url, params) {
    return new Promise((resolve, reject) => {
        const loading = this.$loading();
         axios.post(url, qs.stringify(params))
        .then(res => {
          loading.close();
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}

export default{
  get,
  post
}
