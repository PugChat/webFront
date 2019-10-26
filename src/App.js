import React from 'react';
import pug from './pug.png';
import './App.css';
import SignUp from "./SignUp";
import Chatter from "./Chatter";
import ReactDOM from "react-dom";

function App() {
  function signUp() {
    ReactDOM.render(< SignUp/>, document.getElementById('root'));
  }
  function signIn() {
    ReactDOM.render(< Chatter/>, document.getElementById('root'));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={pug} className="App-logo" alt="logo" />
        <div className="container">
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3" style={{border:'1px solid #cecece',marginLeft:'25%'}}>
              <form role="form">
                <fieldset>
                  <h2>Please Sign In</h2>
                  <hr className="colorgraph"/>
                  <div className="form-group">
                    <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address"/>
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password"/>
                  </div>
                  <hr className="colorgraph"/>
                  <div className="row" style={{marginLeft: '3%',marginRight: '3%'}}>
                      <input onClick={() => signIn()} type="submit" className="btn btn-lg btn-primary btn-block" value="Sign In"/>
                  </div>
                  <span className="forgot-pass">
					<a href="#" className="btn btn-link pull-right">Forgot Password?</a>
                    <a href="#" onClick={ () => signUp()} className="btn btn-link pull-right">Don't have an account? Sign up</a>
                  </span>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
