import {CLAP_ARTICLE} from '../constants/action.type'
import {Article} from '../constants/api.constants'
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
            console.log(clap)
            
        })
        .catch((err)=>console.log(err))
    }
}    