import { createStore , combineReducers , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer,topArticle, loadingHome,loadingDetailArticle } from './home.reducer';
import { LoginReducer, checkLogin, detailUser} from './Login.Reducer';
import { clapReducer,detailArticleReducer} from './post.reducer';

const reducer = combineReducers({
   list: homeReducer,
   userLogin: LoginReducer,
   clap: clapReducer,
   article: detailArticleReducer,
   checkLogin: checkLogin,
   user : detailUser,
   toplist: topArticle,
   loadingHome: loadingHome,
   loadingDetailArticle: loadingDetailArticle
})
export const store = createStore(reducer,applyMiddleware(thunk));