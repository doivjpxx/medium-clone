import './assets/css/bootstrap.min.css'
import './assets/css/mediumish.css'
import './assets/font-awesome/css/font-awesome.css'
import React from "react";
import ReactDOM from "react-dom";
import App from './containers/app/App'
import { BrowserRouter } from "react-router-dom";
import {store} from './reducers/store'
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
, document.getElementById("root"));

serviceWorker.unregister();
