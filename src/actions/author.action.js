import {DELETE_ARTICLE,ADD_ARTICLE, MY_ARTICLE} from '../constants/action.type'
import {Article} from '../constants/api.constants'
import Axios from 'axios';
export function deleteArticle(id) {
    return function (dispatch) {
        let token = localStorage.token;
        Axios.delete(Article.ARTICLE_DELETE.replace('{id}',id),{
            headers: {
                'access_token': `${token}`
            }
        })
            .then((res)=>{
                dispatch({type:DELETE_ARTICLE});
                if(res.data.status===0) alert(res.data.message);
                if(res.data.status===1) alert(res.data.message);
            })
            .catch((err)=>console.log(err))
    }
 }

 //post article to list
export function addArticle(text, title,description,feature_img ){
    return function(dispatch){
        const article={
            text: text,
            title: title,
            description:description,
            feature_img:feature_img,
        }
        let token = localStorage.token
        Axios.post(Article.ARTICLE_ADD,article,{
            headers: {
                'access_token': `${token}`,
            }
        })
        .then((res)=>{
            let articles = res.data.data
            dispatch({type:ADD_ARTICLE,articles})
            if(res.status===1) console.log(res.message)
           // console.log(articles)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export function getMyArticle(){
    return function(dispatch){
        let token = localStorage.token
        Axios.get(Article.ARTICLE_ME,{
            headers: {
                'access_token': `${token}`,
            }
        })
        .then(res=>{
            const myArticle = res.data.data.items
            dispatch({type:MY_ARTICLE,myArticle})
        console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}