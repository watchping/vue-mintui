
import {axios} from "../config.js"
async function addCart(params) {
    try {
      let result = await axios.post("/cart/add",params);      
      return result.data;
    } catch(e) {      
      return "异步调用出错了，错误信息:" + e
    }
}

export {
    addCart
}