import {MY_ARTICLE} from '../constants/action.type'
export function myArticle(state=[],action){
    if(action.type===MY_ARTICLE) return action.myArticle
    return state
}