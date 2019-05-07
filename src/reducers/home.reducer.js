import {defaultState} from '../constants/defaultState'
import {LIST_ARTICLE,DETAIL_ARTICLE,ADD_ARTICLE} from '../constants/action.type'

// const initialState = {
//     articles: [],
//     article: {}
// }

export function homeReducer(state=defaultState,action){
    if (action.type===LIST_ARTICLE) return action.articles
    if (action.type===ADD_ARTICLE) return state.concat(action.article)
    if (action.type===DETAIL_ARTICLE) return action.article
    return state;
}
