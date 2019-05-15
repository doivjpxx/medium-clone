import {CLAP_ARTICLE,DETAIL_ARTICLE,} from '../constants/action.type'

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

