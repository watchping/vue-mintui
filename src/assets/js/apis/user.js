
import {axios} from "../config.js"
function Login(user){ 
    //console.log(user);   
    return new Promise(
        (resolve,reject)=>{            
            axios.post("/user/login",user)
            .then(result=>{
                resolve(result.data);
            }).catch(result=>{
                reject(result.data)
            });
        }
    )
}

function Logout(){       
    return new Promise(
        (resolve,reject)=>{            
            axios.get("/user/logout")
            .then(result=>{
                resolve(result.data);
            }).catch(result=>{
                reject(result.data)
            });
        }
    )
}


function getUserSessionData(){       
    return new Promise(
        (resolve,reject)=>{            
            axios.get("/user/sessiondata")
            .then(result=>{
                resolve(result.data);
            }).catch(result=>{
                reject(result.data)
            });
        }
    )
}


// async function getUserSessionData() {
//     try {
//       let result = await axios.get("/user/sessiondata");      
//       return result.data;
//     } catch(e) {      
//       return "异步调用出错了，错误信息:" + e
//     }
// }

export {
    Login,Logout,getUserSessionData
}