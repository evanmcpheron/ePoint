import React, { Component } from "react";
import Navigation from "./navigation/navigation";
import { Route, Switch } from "react-router";
import Signin from "./Auth/signin";
import Signup from "./Auth/signup";
import ForgotPassword from "./Auth/forgotpassword";
import CatchAll from "./catchall";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";

export default class App extends Component {
	render() {
		return (
			<div className="app">
                <div className="background"></div>
				<Navigation />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/faq" component={Faq} />
					<Route path="/signin" component={Signin} />
					<Route path="/signup" component={Signup} />
					<Route path="/forgotpassword" component={ForgotPassword} />
					<Route component={CatchAll} />
				</Switch>
			</div>
		);
	}
}
