import React, { Component } from "react";

export default class Contact extends Component {
	constructor() {
		super();
		console.log("It Works");
	}
	render() {
		return (
			<div>
				<div className="signin-page-wrapper">
					<h1>Contact</h1>
					<form>
						<input type="text" placeholder="Name" />
						<input type="text" placeholder="Phone" />
						<input type="text" placeholder="Email" />
						<textarea placeholder="Message" />
						<button>Send it!</button>
					</form>
				</div>
			</div>
		);
	}
}
