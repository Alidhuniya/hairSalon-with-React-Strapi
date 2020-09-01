import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_navbar.scss";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("navbars");
			this.setState({ result: response.data[0] });
			// console.log(this.state.result);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const view = this.state.result;
		console.log(view);

		return (
			<Fragment>
				<header className="header">
					<div className="header__logo">
						{view && (
							<img
								className="header__navLogo"
								src={view.navbarzone[0].logo.url}
								alt="logo"
							/>
						)}
					</div>

					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" for="menu-btn">
						<span className="navicon"></span>
					</label>

					<nav className=" header__nav">
						<li className="header__navLink">
							<Link to="/">
								{view && view.navbarzone[0].navlinks[0].linkheading}
							</Link>
						</li>
						<li className="header__navLink">
							<Link to="/about">
								{view && view.navbarzone[0].navlinks[1].linkheading}
							</Link>
						</li>
						<li className="header__navLink">
							<Link to="/services">
								{view && view.navbarzone[0].navlinks[2].linkheading}
							</Link>
						</li>
						<li className="header__navLink">
							<Link to="/portfolio">
								{view && view.navbarzone[0].navlinks[3].linkheading}
							</Link>
						</li>
						<li className="header__navLink">
							<Link to="/contact">
								{view && view.navbarzone[0].navlinks[4].linkheading}
							</Link>
						</li>
						<li className="header__navLink header__navBook">
							<Link>
								{view && view.navbarzone[0].navlinks[5].linkheading}
							</Link>
						</li>
					</nav>
				</header>
			</Fragment>
		);
	}
}
