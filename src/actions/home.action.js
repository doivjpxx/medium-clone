import Axios from "axios";
import { LIST_ARTICLE, ADD_ARTICLE,GET_USER_ARTICLE,DETAIL_ARTICLE } from "../constants/action.type";
//import  {GET_LIST} from '../constants/home.action'
export function getList (){
    return {type:'GET_LIST'}
}

//load all articles in component home (All articles)
export function listArticles(){
    return function(dispatch){
       const URL='http://localhost:4000/api/v1/articles/list'
        Axios.get(URL)
        .then((res)=>{
            let articles= res.data
            dispatch({type:LIST_ARTICLE, articles})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//post article to list
export function addArticle(id, text, title,description ){
    return function(dispatch){
        const URL='http://localhost:4000/api/v1/articles/add'
        Axios.post(URL,{id,title,description,text})
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
        const URL=`http://localhost:4000/api/v1/articles/:${id}`
        axios.get(URL)
        .then((res)=>{
            let article=res.data
            dispatch({type:DETAIL_ARTICLE},article)
        })
    }
}







