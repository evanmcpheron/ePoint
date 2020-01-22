import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Signin extends Component {
	constructor() {
		super();
		console.log("It Works from Signin");
	}
	render() {
		return (
			<div className="signin-page-wrapper">
				<h1>Sign In</h1>
				<form>
					<input type="text" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button>Sign In</button>
				</form>
				<div className="signin-base-wrapper">
					<div className="nav-link-wrapper">
						<NavLink to="/forgotpassword">Forgot Password</NavLink>
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
