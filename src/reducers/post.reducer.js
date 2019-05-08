import {CLAP_ARTICLE} from '../constants/action.type'
//import {initialState} from '../constants/defaultState'
const initialState={}
export function clapReducer(state=initialState,action){
    if (action.type === CLAP_ARTICLE) return {...state,article: action.article}
    return state
}