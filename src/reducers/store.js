import { createStore , combineReducers , applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer } from './home.reducer';
import { LoginReducer} from './Login.Reducer';

const reducer = combineReducers({
   listUser: homeReducer,
   userLogin: LoginReducer
})
export const store = createStore(reducer,applyMiddleware(thunk));