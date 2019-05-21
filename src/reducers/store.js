import { createStore , combineReducers , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer,topArticle, loadingHome,loadingDetailArticle } from './home.reducer';
import { detailUser} from './Login.Reducer';
import { detailArticle} from './post.reducer';
import { myArticle } from './author.reducer';

const reducer = combineReducers({
   allArticle: homeReducer,
   claps: detailArticle,
   article: detailArticle,
   user : detailUser,
   topArticle: topArticle,
   loadingHome: loadingHome,
   loadingDetailArticle: loadingDetailArticle,
   myArticle: myArticle,
});
export const store = createStore(reducer,applyMiddleware(thunk));