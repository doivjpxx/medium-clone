import Axios from "axios";
import { LIST_ARTICLE, ADD_ARTICLE,DETAIL_ARTICLE } from "../constants/action.type";
import {Article} from '../constants/api.constants'
// export function getList (){
//     return {type:'GET_LIST'}
// }
//load all articles in component home (All articles)
export function listArticles(){
    return function(dispatch){
        Axios.get(Article.ARTICLE_LIST)
        .then((res)=>{
            let articles= res.data.data.articles
            dispatch({type:LIST_ARTICLE, articles})
           // console.log(articles)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
//post article to list
export function addArticle(id, text, title,description ){
    return function(dispatch){
        let token = localStorage.token
        Axios.post(Article.ARTICLE_ADD,{id,title,description,text},{
            headers: {
                'access_token': `${token}`,
            }
        })
        .then((res)=>{
            const article={
                id:id,
                text:text,
                title:title,
                description:description
            }
            dispatch({type:ADD_ARTICLE,article})
            if(res.status===1) console.log(res.message)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
//detail article
export function detailArticle(id){
    return function(dispatch){
        Axios.get(Article.ARTICLE_EDIT.replace('{id}', id))
        .then((res)=>{
            //let article=res.data.data
            dispatch({type:DETAIL_ARTICLE})
            //console.log(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}







