
import {LIST_ARTICLE,ADD_ARTICLE, TOP_ARTICLE} from '../constants/action.type'

export function homeReducer(state=[],action){
    if (action.type===LIST_ARTICLE) return action.articles
    return state;
}
export function add_article(state=[], action){
    if (action.type===ADD_ARTICLE) return action.articles
    return state
}

export function topArticle(state=[],action){
    if (action.type===TOP_ARTICLE) return action.articles
    console.log(state)
    return state
}

