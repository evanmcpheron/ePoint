import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ForgotPassword extends Component {
constructor() {
    super();
    console.log('It Works from ForgotPassword');
}
        render() {
        return (
            <div className="signin-page-wrapper">
            <h1>Forgot Password</h1>
            <form>
                <h2 style={{margin:"0 0 2rem 0"}}>Enter your email to change your password</h2>
                <input type="text" placeholder="Email" />
                <button>Change Password</button>
            </form>
            <div className="signin-base-wrapper">
                <div className="nav-link-wrapper">
                    <NavLink to="/signin">Sign In</NavLink>
                    <span className="animated-underline"></span>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/signup">Sign Up</NavLink>
                    <span className="animated-underline"></span>
                </div>
            </div>
        </div>
        );
    }
}