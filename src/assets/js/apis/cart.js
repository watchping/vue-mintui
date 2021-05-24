
import {axios} from "../config.js"
async function addCart(params) {
    try {
      let result = await axios.post("/cart/add",params);      
      return result.data;
    } catch(e) {      
      return {code:-1,msg:"异步调用出错了，错误信息:" + e};
    }
}

async function deleteCart(params) {
  try {
    let result = await axios.get("/cart/delete",{params});      
    return result.data;
  } catch(e) {      
    return {code:-1,msg:"异步调用出错了，错误信息:" + e};
  }
}

async function listCart() {
  try {
    let result = await axios.get("/cart/list");      
    return result.data;
  } catch(e) {      
    return {code:-1,msg:"异步调用出错了，错误信息:" + e};
  }
}

export {
    addCart,deleteCart,listCart
}