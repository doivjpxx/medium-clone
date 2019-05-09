//import {CLAP_ARTICLE,DETAIL_ARTICLE} from '../constants/action.type'
import {DETAIL_ARTICLE} from '../constants/action.type'
//import {initialState} from '../constants/defaultState'
// const initialState={}
// export function clapReducer(state=initialState,action){
//     if (action.type === CLAP_ARTICLE) return {...state,article: action.article}
//     return state;
// }

// export function detailArticleReducer(state=[],action){
//     if (action.type===DETAIL_ARTICLE) return state=action.article
//   //console.log(state)
//     return state;
// }

export function detailArticleReducer(state={},action){
    if (action.type===DETAIL_ARTICLE) return action.article
    console.log(state)
    return state;
}