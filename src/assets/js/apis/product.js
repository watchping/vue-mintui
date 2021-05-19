import {axios} from "../config.js"

function getProductList(paramObj){
    return new Promise(
        function(resolve,reject){
            axios.get("/product/list",{params:paramObj})
            .then(result=>{
                resolve(result.data);
            }).catch(result=>{
                reject(result.data)
            });
        }
    )
}

var baseURL = axios.defaults.baseURL;
export {
    getProductList,
    baseURL,
}