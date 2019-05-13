import {CLAP_ARTICLE,DETAIL_ARTICLE,FOLLOW_USER,UNFOLLOW_USER} from '../constants/action.type'

export function clapReducer(state=0,action){
    if (action.type === CLAP_ARTICLE) return action.clap
 //   console.log(state)
    return state;
}

export function detailArticleReducer(state={},action){
    if (action.type===DETAIL_ARTICLE) return action.article
   // console.log(state)
    return state;
}

export function follow(state=false,action){
    if(action.type===FOLLOW_USER) return true
    if(action.type===UNFOLLOW_USER) return false
    return state
}