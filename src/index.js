import './assets/css/bootstrap.min.css';
import './assets/css/mediumish.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/js/mediumish';
import React from "react";
import ReactDOM from "react-dom";
import App from './containers/app/App'
import { BrowserRouter } from "react-router-dom";
import {store} from './reducers/store'
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>     
            <App />      
        </Provider>
    </BrowserRouter>
, document.getElementById("root"));

serviceWorker.unregister();
