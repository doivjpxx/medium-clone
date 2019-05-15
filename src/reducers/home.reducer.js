
import {LIST_ARTICLE,ADD_ARTICLE, TOP_ARTICLE,DETAIL_ARTICLE} from '../constants/action.type'

export function homeReducer(state=[],action){
    if (action.type===LIST_ARTICLE) return action.articles
    return state;
}
export function loadingHome(state=0,action){
    if (action.type===LIST_ARTICLE) return action.status     
    if (action.type===DETAIL_ARTICLE) return 0 
    return state;
}
export function loadingDetailArticle(state=0,action){
    if (action.type===LIST_ARTICLE) return 0 
    if (action.type===DETAIL_ARTICLE) return action.status 
    return state;
}
export function add_article(state=[], action){
    if (action.type===ADD_ARTICLE) return action.articles
    return state
}

export function topArticle(state=[],action){
    if (action.type===TOP_ARTICLE) return action.articles
 //   console.log(state)
    return state
}

