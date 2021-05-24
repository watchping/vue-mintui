import { axios } from "../config.js";

async function Login(user) {
  try {
    let result = await axios.post("/user/login", user);
    return result.data;
  } catch (e) {
    return {code:-1,msg:"异步调用出错了，错误信息:" + e};
  }
}

async function Logout() {
  try {
    let result = await axios.get("/user/logout");
    return result.data;
  } catch (e) {
    return {code:-1,msg:"异步调用出错了，错误信息:" + e};
  }
}

async function getUserSessionData() {
  try {
    let result = await axios.get("/user/sessiondata");
    return result.data;
  } catch (e) {
    return {code:-1,msg:"异步调用出错了，错误信息:" + e};
  }
}

export { Login, Logout, getUserSessionData };

// function Login(user){
//     //console.log(user);
//     return new Promise(
//         (resolve,reject)=>{
//             axios.post("/user/login",user)
//             .then(result=>{
//                 resolve(result.data);
//             }).catch(result=>{
//                 reject(result.data)
//             });
//         }
//     )
// }

// function Logout(){
//     return new Promise(
//         (resolve,reject)=>{
//             axios.get("/user/logout")
//             .then(result=>{
//                 resolve(result.data);
//             }).catch(result=>{
//                 reject(result.data)
//             });
//         }
//     )
// }

// function getUserSessionData(){
//     return new Promise(
//         (resolve,reject)=>{
//             axios.get("/user/sessiondata")
//             .then(result=>{
//                 resolve(result.data);
//             }).catch(result=>{
//                 reject(result.data)
//             });
//         }
//     )
// }

