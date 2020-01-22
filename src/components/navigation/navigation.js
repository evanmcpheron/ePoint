import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
	constructor() {
		super();
		console.log("It Works from Navigation");
	}
	render() {
		return (
			<div className="nav-wrapper">
				<div className="left-side">
					<div className="oneRem"> </div>
					<div className="nav-link-wrapper">
						<NavLink exact to="/">
							Home
						</NavLink>
						<span className="animated-underline"></span>
					</div>

					<div className="oneRem"> </div>

					<div className="nav-link-wrapper">
						<NavLink to="/dashboard">Dashboard</NavLink>
						<span className="animated-underline"></span>
					</div>

					<div className="oneRem"> </div>

					<div className="nav-link-wrapper">
						<NavLink to="/about">About</NavLink>
						<span className="animated-underline"></span>
					</div>

					<div className="oneRem"> </div>

					<div className="nav-link-wrapper">
						<NavLink to="/faq">FAQ</NavLink>
						<span className="animated-underline"></span>
					</div>

					<div className="oneRem"> </div>

					<div className="nav-link-wrapper">
						<NavLink to="/contact">Contact</NavLink>
						<span className="animated-underline"></span>
					</div>

					<div className="oneRem"> </div>
				</div>
				<div className="right-side">
					<div className="nav-link-wrapper">
						<NavLink to="/signin">Sign in</NavLink>
						<span className="animated-underline"></span>
					</div>

					<div className="oneRem"> </div>
					<div className="nav-link-wrapper">
						<NavLink to="/signup">Sign up</NavLink>
						<span className="animated-underline"></span>
					</div>

					<div className="oneRem"> </div>
				</div>
			</div>
		);
	}
}
