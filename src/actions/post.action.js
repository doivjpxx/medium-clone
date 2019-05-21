import {CLAP_ARTICLE,UNFOLLOW_USER,FOLLOW_USER,DETAIL_ARTICLE, COMMENT_ARTICLE} from '../constants/action.type'
import {Article,User} from '../constants/api.constants'
import Axios from 'axios';

export function clap(id){
    return function(dispatch){
        let token = localStorage.token;
        Axios.get(Article.ARTICLE_CLAP.replace('{id}',id),{
            headers: {
                'access_token': `${token}`,          
            }
        })
        .then((res) => {
            const clap = res.data.data.claps;
            dispatch({type:CLAP_ARTICLE,clap});
            console.log(clap)        
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function follow(author_id){
    return function(dispatch){
        let token = localStorage.token
        const id=author_id
        Axios.post(User.USER_FOLLOW.replace('{id}',id),id,{
            headers: {
                'access_token': `${token}`,
            }
        })
        .then((res) => {
            console.log(res);
            dispatch({type:FOLLOW_USER,id:id});
            if(res.data.status === 1){
                alert("follow success!")
            }          
        })
        .catch((err) => {
           console.log(err)
        })
    }
}

export function unfollow(authorId){
    return function(dispatch){
        let token = localStorage.token;
        Axios.post(User.USER_UNFOLLOW.replace('{id}',authorId),authorId,{
            headers: {
                'access_token': `${token}`,          
            }
        })
        .then((res)=>{
            console.log(res)
            dispatch({type:UNFOLLOW_USER});
            if(res.data.status === 1){
                alert("unfollow success!")
            }
        })
        .catch((err) => alert(err.message))
    }
}

//detail article
export  function detailArticle(id){
    return  function(dispatch){
        Axios.get(Article.ARTICLE_EDIT.replace('{id}', id))
        .then((res) => {
            let status = res.data.status
            let article = res.data.data
            dispatch({type:DETAIL_ARTICLE,article,status})
           // console.log(status)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function postCommentArticle(idArticle,text,avatar,name){
    return function(dispatch){
        let token = localStorage.token;
     //   console.log(text)
        
        Axios.post(Article.ARTICLE_COMMENT.replace('{id}',idArticle),{text:text},{
            headers: {
                'access_token': `${token}`,          
            }
        }).then((res)=>{
            const comment = {             
                user:name,
                avatar:avatar,
                text:text,
            };
            dispatch({type:COMMENT_ARTICLE,comment:comment})
            console.log(comment)
        }).catch((err)=>{console.log(err)})
    }
}

     
