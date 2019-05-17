import {MY_ARTICLE} from '../constants/action.type'
export function myArticleReducer(state=[],action){
    if(action.type===MY_ARTICLE) return action.myArticle
    console.log(state)
    return state
}