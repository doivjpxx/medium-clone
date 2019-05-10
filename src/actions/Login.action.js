import {SIGN_IN, SIGN_UP} from '../constants/action.type'
import Axios from 'axios';
import {User} from '../constants/api.constants'


export function SignIn(email,password){
    return function(dispatch){
        Axios.post(User.USER_LOGIN,{email,password})
        .then(res=> {
            const authToken = res.data.data.token;
            const checkLogin = res.data.auth
            dispatch({type:SIGN_IN,checkLogin})
            console.log(res.data.data.auth)
            if (res.data.status===1) {
                alert("Đăng nhập thành công!!")          
                localStorage.setItem('token', authToken);              
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
