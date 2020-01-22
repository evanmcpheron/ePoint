import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Signup extends Component {
	constructor() {
		super();
		console.log("It Works from Signup");
	}
	render() {
		return (
			<div>
				<div className="signin-page-wrapper">
					<h1>Sign Up</h1>
					<form>
						<input type="text" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<input type="password" placeholder="Confirm Password" />
						<button>Sign Up</button>
					</form>
					<div className="signin-base-wrapper">
						<div className="nav-link-wrapper">
							<NavLink to="/forgotpassword">Forgot Password</NavLink>
							<span className="animated-underline"></span>
						</div>
						<div className="nav-link-wrapper">
							<NavLink to="/signup">Sign In</NavLink>
							<span className="animated-underline"></span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
