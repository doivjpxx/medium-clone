import React from 'react';
import { Route } from "react-router-dom";
import Header from '../../containers/layout/header/Header'
import Footer from '../../containers/layout/footer/Footer';
import Home from '../../containers/pages/home/home';
import Post from '../../containers/pages/post/Post';
import Author from '../../containers/pages/author/Author'
import Login from '../../containers/pages/login/Login';
//import Article from '../../containers/pages/post/Article';
function App() {
  return (
    <div>
      <Header/>
        <Route exact path="/" component={Home} />
        <Route path="/my-stories" component={Author} />
        <Route path="/login" component={Login}/>
        <Route path="/post/:id" exact component={Post} />
      <Footer/>
    </div>
  );
}
export default App;