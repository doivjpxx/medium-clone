import {SIGN_IN, SIGN_UP} from '../constants/action.type'
import Axios from 'axios';
import {User} from '../constants/api.constants'
import {Redirect} from 'react-router-dom'


export function SignIn(email,password){
    return function(dispatch){
        Axios.post(User.USER_LOGIN,{email,password})
        .then(res=> {
            dispatch({type:SIGN_IN})
            if (res.data.status===1) {
                alert("Đăng nhập thành công!!")
                const authToken = res.data.data.token;
                localStorage.setItem('token', authToken);
                 <Redirect to="http://localhost:4000/home"/>    
            };
        })
        .catch(error =>{
                console.log(error)
            }
        );  
    }
}
export function SignUp(email,password,name){
    return function(dispatch){
        Axios.post(User.USER_REGISTER,{email,password,name})
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
