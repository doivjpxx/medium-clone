import Axios from "axios";
import { LOAD_ARTICLE, POST_ARTICLE,GET_USER_ARTICLE } from "../constants/action.type";
//import  {GET_LIST} from '../constants/home.action'
export function getList (){
    return {type:'GET_LIST'}
}

//load all articles in component home (All articles)
export function getArticles(){
    return function(dispatch){
       const URL='http://localhost:4000/list'
        Axios.get(URL)
        .then((res)=>{
            let articles= res.data
            dispatch({type:LOAD_ARTICLE, articles})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//post article to list
export function postArticle(id, text, title,description ){
    return function(dispatch){
        const URL='http://localhost:4000/post'
        Axios.post(URL,{id,title,description,text})
        .then((res)=>{
            dispatch({type:POST_ARTICLE,id,text,title,description})
            if(res.status===1) console.log(res.message)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
//detail user
export function getUserArticle (id) {
    return function(dispatch) {
        const URL = 'http://localhost:4000/detailUser'
        axios.get(URL)
        .then((res)=>{
            const data=res.data;
            dispatch({type:GET_USER_ARTICLE,id,data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
