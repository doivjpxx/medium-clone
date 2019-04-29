import React from 'react';
import Header from '../layout/header/Header'
//import AlertBar from '../AlertBar'
import Footer from '../layout/footer/Footer';
import { Route } from "react-router-dom";
import Home from '../../containers/home/home';
import Post from '../pages/post/Post';
import Author from '../pages/author/Author'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/mediumish.css'
function App() {
  return (
    <div>
      <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/post" component={Post} />
        <Route path="/author" component={Author} />
      <Footer/>
    </div>
  );
}

export default App;