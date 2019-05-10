import { createStore , combineReducers , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer } from './home.reducer';
import { LoginReducer} from './Login.Reducer';
import { clapReducer } from './post.reducer';
import { detailArticleReducer } from './post.reducer';

const reducer = combineReducers({
   list: homeReducer,
   userLogin: LoginReducer,
   clap: clapReducer,
   article: detailArticleReducer
})
export const store = createStore(reducer,applyMiddleware(thunk));