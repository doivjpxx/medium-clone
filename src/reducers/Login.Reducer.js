import {SIGN_IN,SIGN_UP,DETAIL_USER} from '../constants/action.type'


export function  LoginReducer(state={email:'', password:'', name:''},action ){
 if(action.type===SIGN_IN) return  state
 if(action.type===SIGN_UP) return state
 return state;
}

export function checkLogin(state=false,action){
    if(action.type===SIGN_IN) return checkLogin       
    console.log(state)
    return state
}

export function detailUser(state={},action){
    if (action.type === DETAIL_USER) return action.user
    return state
}



    
