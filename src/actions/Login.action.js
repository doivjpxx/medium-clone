import {SIGN_IN, SIGN_UP} from '../constants/action.type'
import Axios from 'axios';

export function SignIn(email,password){
    return function(dispacth){
        const URL = 'http://localhost:4000/api/v1/users/login'
        Axios.post(URL,{email,password})
        .then(res=> {
            dispatch({type:SIGN_IN, email:res.email,password:res.password})
            if (res.status===200) alert("Đăng nhập thành công!!");
        })
        .catch(error =>{
                console.error(error)
            }
        );  
    }
}
export function SignUp(email,password,name){
    return function(dispacth){
        const URL = 'http://localhost:4000/api/v1/users/register'
        Axios.post(URL,{email,password,name})
        .then(res=>{
            dispatch({type:SIGN_UP,email:res.mail, password:res.password, name:res.name})
            if(res.status===201) alert("Vui lòng vài email để xác thực!");
        })
        .catch(error=>{
                console.error(error)
            }
        )
    }
}
