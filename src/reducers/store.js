import { createStore , combineReducers , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer,topArticle, loadingHome,loadingDetailArticle } from './home.reducer';
import { checkLogin, detailUser} from './Login.Reducer';
import { clapReducer,detailArticleReducer,commentArticle} from './post.reducer';
import { myArticleReducer } from './author.reducer';

const reducer = combineReducers({
   allArticle: homeReducer,
   clap: clapReducer,
   article: detailArticleReducer,
   checkLogin: checkLogin,
   user : detailUser,
   topArticle: topArticle,
   loadingHome: loadingHome,
   loadingDetailArticle: loadingDetailArticle,
   myArticle: myArticleReducer,
   comments: commentArticle,
});
export const store = createStore(reducer,applyMiddleware(thunk));