import { createStore , combineReducers , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer } from './home.reducer';
import { LoginReducer, checkLogin} from './Login.Reducer';
import { clapReducer,detailArticleReducer} from './post.reducer';

const reducer = combineReducers({
   list: homeReducer,
   userLogin: LoginReducer,
   clap: clapReducer,
   article: detailArticleReducer,
   checkLogin: checkLogin,
   
})
export const store = createStore(reducer,applyMiddleware(thunk));