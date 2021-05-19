import {axios} from "../config.js"

function getDetails(lid){
    return new Promise(
        function(resolve,reject){
            axios.get("/product/detail",{params:{lid}})
            .then(result=>{
                resolve(result.data);
            }).catch(result=>{
                reject(result.data)
            });
        }
    )
}

export {
    getDetails
}