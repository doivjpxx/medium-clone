import Axios from "axios";
import { LIST_ARTICLE, ADD_ARTICLE,DETAIL_ARTICLE, TOP_ARTICLE } from "../constants/action.type";
import {Article} from '../constants/api.constants'
import { async } from "q";
// export function getList (){
//     return {type:'GET_LIST'}
// }
//load all articles in component home (All articles)
export function listArticles(page){
    return function(dispatch){
        Axios.get(Article.ARTICLE_LIST.replace('{page}',page))
        .then((res)=>{
            let status = res.data.status
            let articles= res.data.data.articles
            dispatch({type:LIST_ARTICLE, articles,status})
 //           console.log(res.data.status)
        })
        .catch((err)=>{
            console.log(err)
        })
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
//detail article
export  function detailArticle(id){
    return  function(dispatch){
        Axios.get(Article.ARTICLE_EDIT.replace('{id}', id))
        .then((res)=>{
            let status=res.data.status
            let article=res.data.data
            dispatch({type:DETAIL_ARTICLE,article,status})
           // console.log(status)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export function topArticle(){
    return function(dispatch){
        Axios.get(Article.ARTICLE_TOP)
        .then((res)=>{
            let articles = res.data.data.items
            dispatch({type:TOP_ARTICLE,articles})
           // console.log(articles)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}







