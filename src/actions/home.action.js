import Axios from "axios";
import { LIST_ARTICLE, TOP_ARTICLE ,MY_ARTICLE} from "../constants/action.type";
import {Article} from '../constants/api.constants'

export function getAllArticles(page){
    return function(dispatch){
        Axios.get(Article.ARTICLE_LIST.replace('{page}',page))
        .then((res)=>{
            let status = res.data.status;
            let articles = res.data.data.articles;
            dispatch({type:LIST_ARTICLE, articles,status})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function getTopArticle(){
    return function(dispatch){
        Axios.get(Article.ARTICLE_TOP)
        .then((res) => {
            let articles = res.data.data.items;
            dispatch({type:TOP_ARTICLE,articles})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function getMyArticle(){
    return function(dispatch){
        let token = localStorage.token;
        Axios.get(Article.ARTICLE_ME,{
            headers: {
                'access_token': `${token}`,
            }
        })
        .then((res) => {
            const myArticle = res.data.data.items;
            dispatch({type:MY_ARTICLE,myArticle});
        console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}







