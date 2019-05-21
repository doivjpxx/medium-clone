import {CLAP_ARTICLE,DETAIL_ARTICLE, COMMENT_ARTICLE} from '../constants/action.type'

export function detailArticle(state={},action){
    if (action.type===DETAIL_ARTICLE) return action.article;
    if (action.type===COMMENT_ARTICLE) {
        const newArticle = {...state, comments:state.comments.concat(action.comment)}   
        return newArticle
    }
    if (action.type===CLAP_ARTICLE){
        const newArticle = {...state, claps : state.claps +1}
        return newArticle
    }
    return state;
}

