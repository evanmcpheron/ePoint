import React, { Component } from "react";
import noCode from "../../../static/assets/img/noCode.png";
import clickIcon from "../../../static/assets/img/clickIcon.png";
import dataIcon from "../../../static/assets/img/data.png";
import inputIcon from "../../../static/assets/img/inputIcon.png";
import guiIcon from "../../../static/assets/img/guiIcon.png";

export default class Home extends Component {
	constructor() {
		super();
		console.log("It Works from Home");
	}
	render() {
		return (
			<div className="home-page-wrapper">
				<div className="home-header">
					<div className="left-side">
						<div className="left-side-container">
							<h1>ePoint.io</h1>
							<h2>
								You no longer need to fuss with the hassle of creating API
								endpoints with ePoints one click generator.
							</h2>
							<form className="subscribe-form">
								<input type="text" placeholder="Email" />
								<button>Sign Up</button>
							</form>
						</div>
					</div>
					<div className="right-side">
						<img src={noCode} />
					</div>
				</div>
				<div className="feature-wrap">
					<h2 className="section-title">Features</h2>
					<div className="feature-wrap-list">
						<div className="feature-section">
							<div className="img-container">
								<img src={clickIcon} />
							</div>
							<div className="description">
								<h2>ONE CLICK</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing
									elit. Nam cursus nunc id dui sagittis condimentum. Sed
									vel pulvinar lorem. Sed in rhoncus leo. Proin tempor
									mauris in lorem semper interdum. Mauris euismod nisi
									eu erat aliquet pretium. Curabitur venenatis luctus
									dapibus. Proin ut lorem id mi tristique lobortis.
									Vivamus et mattis purus
								</p>
							</div>
						</div>
						<div className="feature-section">
							<div className="img-container">
								<img src={inputIcon} />
							</div>
							<div className="description">
								<h2>GUIDED DESIGN</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing
									elit. Nam cursus nunc id dui sagittis condimentum. Sed
									vel pulvinar lorem. Sed in rhoncus leo. Proin tempor
									mauris in lorem semper interdum. Mauris euismod nisi
									eu erat aliquet pretium. Curabitur venenatis luctus
									dapibus. Proin ut lorem id mi tristique lobortis.
									Vivamus et mattis purus
								</p>
							</div>
						</div>
						<div className="feature-section">
							<div className="img-container">
								<img src={guiIcon} />
							</div>
							<div className="description">
								<h2>DATA GUI</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing
									elit. Nam cursus nunc id dui sagittis condimentum. Sed
									vel pulvinar lorem. Sed in rhoncus leo. Proin tempor
									mauris in lorem semper interdum. Mauris euismod nisi
									eu erat aliquet pretium. Curabitur venenatis luctus
									dapibus. Proin ut lorem id mi tristique lobortis.
									Vivamus et mattis purus
								</p>
							</div>
						</div>
						<div className="feature-section">
							<div className="img-container">
								<img src={dataIcon} />
							</div>
							<div className="description">
								<h2>FULL CRUD</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing
									elit. Nam cursus nunc id dui sagittis condimentum. Sed
									vel pulvinar lorem. Sed in rhoncus leo. Proin tempor
									mauris in lorem semper interdum. Mauris euismod nisi
									eu erat aliquet pretium. Curabitur venenatis luctus
									dapibus. Proin ut lorem id mi tristique lobortis.
									Vivamus et mattis purus
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
