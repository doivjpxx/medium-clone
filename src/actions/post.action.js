import {CLAP_ARTICLE} from '../constants/action.type'
import {Article} from '../constants/api.constants'
import Axios from 'axios';
export function clap(id_article){
    return function(dispatch){
        let token = localStorage.token
        Axios.post(Article.ARTICLE_CLAP,{id_article},{
            headers: {
                'access_token': `${token}`,
            }
        })
        .then((res) => {
            const clap = res.data.data.clap
            dispatch({type:CLAP_ARTICLE,clap})
        })
        .catch((err)=>console.log(err))
    }
}    