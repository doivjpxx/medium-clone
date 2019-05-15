import {SIGN_IN, SIGN_UP, DETAIL_USER,LOGOUT_USER} from '../constants/action.type'
import Axios from 'axios';
import {User} from '../constants/api.constants'


export function SignIn(email,password){
    return function(dispatch){
        Axios.post(User.USER_LOGIN,{email,password})
        .then(res=> {
            const authToken = res.data.data.token;
            const checkLogin = res.data.auth
            dispatch({type:SIGN_IN,checkLogin})
 //           console.log(res.data.data.auth)
            if (res.data.status===1) {
                alert("Đăng nhập thành công!!")          
                localStorage.setItem('token', authToken);   
                window.location.reload()           
            };
            
        })
        .catch(error =>{
                console.log(error)
            }
        );  
    }
}
export function SignUp(email,password,name,avatar){
    return function(dispatch){
        Axios.post(User.USER_REGISTER,{email,password,name,avatar})
        .then(res=>{
            dispatch({type:SIGN_UP})
            if(res.data.status===1) alert("Vui lòng vài email để xác thực!");
            if(res.status===0) alert("Email đã tồn tại!");
           
        })
        .catch(error=>{
                console.error(error)
            }
        )
    }
}

export function logout(){
    return function(dispatch){
        Axios.get(User.USER_LOGOUT)   
        .then((res)=>{
            const token=res.data.token
            dispatch({type:LOGOUT_USER})
            localStorage.setItem('token', token); 
        })
    }
}

export function detailUser(){
    return function(dispatch){
        let token = localStorage.token
        Axios.get(User.USER_DETAIL,{
            headers: {
                'access_token': `${token}`,
            }
        })
        .then(res=>{
            const user = res.data.data
            dispatch({type:DETAIL_USER,user})
         //   if(res.data.status===1) console.log("get user's infor success!")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


