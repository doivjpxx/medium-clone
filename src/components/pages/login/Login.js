import React, { Component } from 'react'
import './login.css'
import './form-elements.css'
import {Redirect} from 'react-router-dom'
import AlertBar from '../../../containers/AlertBar';
import axios from 'axios'
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      emailRegister:'',
      passwordRegister:'',
      name:'',
      emailLogin:'',
      passwordLogin:'',
    }
    this.SignUp=this.SignUp.bind(this)
     this.SignIn=this.SignIn.bind(this)
  }

  //  SignIn(evt){
  //    evt.preventDefault();
  //    try{
  //      const uri = 'http://localhost:4000/api/v1/users/login'
  //      const email = this.state.emailLogin;
  //      const password= this.state.passwordLogin;
  //      axios.post(uri,{email,password})
  //       .then(res=>{
  //         console.log(res.status)
  //         if(res.status==200)
  //          { 
  //             console.log(" Đăng nhập thành công!");
  //             this.setState({redirect:true})
  //           }
  //       })
  //    }
  //    catch(err){
  //     console.error(err)
  //    }
  //  }

  SignIn(evt){
    evt.preventDefault()
    this.props.SignIn(this.state.emailLogin,this.state.passwordLogin)
  }
  
  //  SignUp(evt){
  //    evt.preventDefault()
  //     try{
  //       const uri='http://localhost:4000/api/v1/users/register' 
  //       const email= this.state.emailRegister
  //       const password= this.state.passwordRegister
  //       const name= this.state.name
  //       axios.post(uri,{email,password,name})
  //       .then(res => {
  //         console.log(res.data);
  //       })  
  //     }
  //       catch(err){
  //         console.error(err);
  //       };   
  //     }

  SignUp(evt){
    evt.preventDefault()
    const {emailRegister,passwordRegister}= this.state
    this.props.SignUp(emailRegister,passwordRegister,name)
  }

  render() {
    const {emailRegister, passwordRegister,name}= this.state;
   // if(this.props.validated) return <Redirect to="/post"/>
    return (     
        <div>
          <div className="top-content">
            <div className="inner-bg">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2 text">
                    <h1>Bootstrap Login &amp; Register Forms</h1>
                    <div className="description">
                      <p>
                        This is a free responsive <strong>"login and register forms"</strong> template made with Bootstrap. 
                        Download it on <a href="http://azmind.com" target="blank"><strong>AZMIND</strong></a>, 
                        customize and use it as you like!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5">
                    <div className="form-box">
                      <div className="form-top">
                        <div className="form-top-left">
                          <h3>Login to our site</h3>
                          <p>Enter username and password to log on:</p>
                        </div>
                        <div className="form-top-right">
                          <i className="fa fa-key" />
                        </div>
                      </div>
                      <div className="form-bottom">
                        <form role="form" action method="post" className="login-form">
                          <div className="form-group">
                            <label className="sr-only" htmlFor="form-username">Email</label>
                            <input type="text" placeholder="email..." className="form-username form-control" 
                              value={this.state.emailLogin} onChange={(evt)=>{this.setState({emailLogin: evt.target.value})}}/>
                          </div>
                          <div className="form-group">
                            <label className="sr-only" htmlFor="form-password">Password</label>
                            <input type="password"  placeholder="Password..." className="form-password form-control"  
                              value={this.state.passwordLogin} onChange={evt=>this.setState({passwordLogin: evt.target.value})}/>
                          </div>
                          <button type="submit" className="btn" onClick={this.SignIn}>Sign in!</button>
                        </form>
                      </div>
                    </div>
                    <div className="social-login">
                      <h3>...or login with:</h3>
                      <div className="social-login-buttons">
                        <a className="btn btn-link-1 btn-link-1-facebook" href="#">
                          <i className="fa fa-facebook" /> Facebook
                        </a>
                        <a className="btn btn-link-1 btn-link-1-twitter" href="#">
                          <i className="fa fa-twitter" /> Twitter
                        </a>
                        <a className="btn btn-link-1 btn-link-1-google-plus" href="#">
                          <i className="fa fa-google-plus" /> Google Plus
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-1 middle-border" />
                  <div className="col-sm-1" />
                  <div className="col-sm-5">
                    <div className="form-box">
                      <div className="form-top">
                        <div className="form-top-left">
                          <h3>Sign up now</h3>
                          <p>Fill in the form below to get instant access:</p>
                        </div>
                        <div className="form-top-right">
                          <i className="fa fa-pencil" />
                        </div>
                      </div>
                      <div className="form-bottom">
                        <form role="form" action method="post" className="registration-form">
                          <div className="form-group">
                            <label className="sr-only" htmlFor="form-last-name">Name</label>
                            <input type="text"  placeholder="Your name..." className="form-last-name form-control" id="form-last-name" 
                            value={name} onChange={(evt)=>{this.setState({name:evt.target.value})}}/>
                          </div>
                          <div className="form-group">
                            <label className="sr-only" htmlFor="form-email">Email</label>
                            <input type="text" placeholder="email..." className="form-username form-control" 
                              value={emailRegister} onChange={(evt)=>{this.setState({emailRegister: evt.target.value})}}/>
                          </div>
                          <div className="form-group">
                            <label className="sr-only" htmlFor="form-about-yourself">About yourself</label>
                            <input type="password"  placeholder="Password..." className="form-password form-control" id="form-password" 
                              value={passwordRegister} onChange={(evt)=>{this.setState({passwordRegister: evt.target.value})}}/>
                          </div>
                          <button type="submit" className="btn" onClick={this.SignUp}>Sign me up!</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <AlertBar/>
        </div>
        
  
    )
  }
}
