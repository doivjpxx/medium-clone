import CLAP_ARTICLE from '../constants/action.type'
import {URL} from '../constants/url'
import Axios from 'axios';
export function clap(id_article){
    return function(dispatch){
        let token = localStorage.token
        Axios.post(`${URL}article/clap/:${id_article}`,{id_article},{
            headers: {
                'access_token': `${token}`,
            }
        })
        .then((res) => {
            dispatch({type:CLAP_ARTICLE})
        })
        .catch((err)=>console.log(err))
    }
}    