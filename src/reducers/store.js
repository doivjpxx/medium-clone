import { createStore , combineReducers } from 'redux'
import { homeReducer } from './home.reducer';

const reducer = combineReducers({
   listUser: homeReducer,
})
export const store = createStore(reducer);