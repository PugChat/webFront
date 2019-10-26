import React from 'react';
import pug from './pug.png';
import './SignUp.css';
import ConfirmEm from "./ConfirmEm";
import ReactDOM from "react-dom";

function SignUp() {
    function confirmEM() {
        ReactDOM.render(< ConfirmEm/>, document.getElementById('root'));
    }
    return (
        <header className="SP-header">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                        <h1>Sign Up</h1>
                        <fieldset style={{marginTop:'20px'}}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="username" id="username" className="form-control input-lg" placeholder="Please enter an username"/>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Please enter your email address"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Please enter a password"/>
                                <input type="password" name="confirm_password" value="" className="form-control input-lg" placeholder="Confirm your password" style={{marginTop:'20px'}}/>
                            </div>
                            <div className="row" style={{marginLeft: '30%',marginRight: '30%', marginTop:'30px'}}>
                                <input onClick={() => confirmEM()} type="submit" className="btn btn-lg btn-primary btn-block" value="Sign Up"/>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3" style={{textAlign:'center'}}>
                        <img src={pug} className="App-logo" alt="logo" />
                        <p>
                            Create your account, it's free and always will be
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default SignUp;
