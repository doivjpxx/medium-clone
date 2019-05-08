//import {defaultState} from '../constants/defaultState'
import {LIST_ARTICLE,DETAIL_ARTICLE,ADD_ARTICLE} from '../constants/action.type'

export function homeReducer(state=[],action){
    if (action.type===LIST_ARTICLE) return action.articles
    if (action.type===ADD_ARTICLE) return {...state,articles:action.articles}
    if (action.type===DETAIL_ARTICLE) return {...state,article:action.article}
    //console.log(state)
    return state;
}
