import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/App'
import { BrowserRouter } from "react-router-dom";
import {store} from './reducers/store'
import {Provider} from 'react-redux';

// class App extends React.Component {
//     render () {
//         return <h1>Hello World from React boilerplate</h1>;
//     }
// }
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
, document.getElementById("root"));
