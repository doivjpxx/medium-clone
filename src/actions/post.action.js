import {CLAP_ARTICLE,UNFOLLOW_USER,FOLLOW_USER} from '../constants/action.type'
import {Article,User} from '../constants/api.constants'
import Axios from 'axios';
export function clap(id){
    return function(dispatch){
        let token = localStorage.token
        Axios.get(Article.ARTICLE_CLAP.replace('{id}',id),{
            headers: {
                'access_token': `${token}`,          
            }
        })
        .then((res) => {
            const clap = res.data.data.claps
            dispatch({type:CLAP_ARTICLE,clap})        
        })
        .catch((err)=>console.log(err))
    }
}

export function follow(id){
    return function(dispatch){
        let token = localStorage.token
        Axios.post(User.USER_FOLLOW.replace('{id}',id),{
            headers: {
                'access_token': `${token}`,          
            }
        })
        .then((res)=>{
            dispatch({type:FOLLOW_USER})
            console.log(res.status.message)
        })
        .catch((err)=>console.log(err))
    }
}

export function unfollow(id){
    return function(dispatch){
        let token = localStorage.token
        Axios.post(User.USER_UNFOLLOW.replace('{id}',id),{
            headers: {
                'access_token': `${token}`,          
            }
        })
        .then((res)=>{
            dispatch({type:UNFOLLOW_USER})
        })
        .catch((err)=>console.log(err))
    }
}
