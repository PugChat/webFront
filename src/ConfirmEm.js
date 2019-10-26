import React from 'react';
import pug from './pug.png';
import './ConfirmEm.css';
import App from "./App";
import ReactDOM from "react-dom";

function ConfirmEm() {
    function login() {
        ReactDOM.render(< App/>, document.getElementById('root'));
    }
    return (
        <header className="CE-header">
            <div className="container">
                <div className="row" style={{paddingLeft: '1%', marginLeft: '32%',marginRight: '32%'}}>
                    <img src={pug} className="App-logo" alt="logo" />
                </div>
                <div className="row">
                    <div className="col-xs-15 col-sm-11 col-md-9 col-sm-offset-5 col-md-offset-6" style={{textAlign:'center',marginLeft: '12%',marginRight: '10%'}}>
                        <h1>Thanks for joining Pug Chat!</h1>
                        <p>
                            Please check your inbox for a confirmation email. Click the link in the email to confirm your
                            address.
                        </p>
                        <p>
                            After you confirm click Continue.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3" style={{paddingLeft: '20%',paddingRight: '2%'}}>
                        <input onClick={() => login()} type="submit" className="btn btn-lg btn-primary btn-block" value="Continue"/>
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3" style={{paddingLeft: '2%',paddingRight: '20%'}}>
                        <input type="submit" className="btn btn-lg btn-primary btn-block" value="Re-send confirmation email"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default ConfirmEm;
