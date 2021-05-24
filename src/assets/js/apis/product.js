import {axios} from "../config.js"

async function getProductList(params) {
    try {
      let result = await axios.get("/product/list", {params});
      return result.data;
    } catch (e) {
      return {code:-1,msg:"异步调用出错了，错误信息:" + e};
    }
  }

// function getProductList(paramObj){
//     return new Promise(
//         function(resolve,reject){
//             axios.get("/product/list",{params:paramObj})
//             .then(result=>{
//                 resolve(result.data);
//             }).catch(result=>{
//                 reject(result.data)
//             });
//         }
//     )
// }

var baseURL = axios.defaults.baseURL;
export {
    getProductList,
    baseURL,
}