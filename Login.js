import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div id="wrapper">
                <div className="title">SIGN IN</div>
                <div className="email">
                    <span className="text">EMAIL ADDRESS</span>
                    <input type="email"/>
                </div>
                <div className="pass">
                    <span className="text">PASSWORD</span>
                    <input type="password"/>
                </div>
                <div className="btn">
                    <button>SIGN IN</button>
                </div>
            </div>
        );
    }
}

export default Login;
