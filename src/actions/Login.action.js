import {SIGN_IN, SIGN_UP} from '../constants/action.type'
import Axios from 'axios';
import {User} from '../constants/url'

export function SignIn(email,password){
    return function(dispatch){
        Axios.post(User.USER_LOGIN,{email,password})
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
    return function(dispatch){
        Axios.post(`${URL}`,{email,password,name})
        .then(res=>{
            dispatch({type:SIGN_UP,email:res.mail, password:res.password, name:res.name})
            if(res.status===201) alert("Vui lòng vài email để xác thực!");
            if(res.status===403) alert("Email đã tồn tại!");
        })
        .catch(error=>{
                console.error(error)
            }
        )
    }
}
