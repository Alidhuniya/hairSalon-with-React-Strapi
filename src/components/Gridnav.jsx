import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import { NavLink } from "react-router-dom";
import "./../sass/3-layout/_gridnav.scss";

export default class Gridnav extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("portfoliosections");
			this.setState({ result: response.data[0].portfolionav });
			console.log(this.state.result);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const view = this.state.result;
		// console.log(this.state.result);

		return (
			<Fragment>
				<header className="grid">
					<nav className=" grid__nav">
						<li className="grid__navLink ">
							<NavLink
								exact
								to="/portfolio/"
								activeStyle={{ background: "#6C63FF", padding: "0.7rem" }}
							>
								{view && view[0].heading}
							</NavLink>
						</li>
						<li className="grid__navLink">
							<NavLink
								to="/portfolio/color"
								activeStyle={{ background: "#6C63FF", padding: "0.7rem" }}
							>
								{view && view[1].heading}
							</NavLink>
						</li>
						<li
							className="grid__navLink"
							
						>
							<NavLink to="/portfolio/others" activeStyle={{ background: "#6C63FF", padding: "0.7rem" }}>
								{view && view[2].heading}
							</NavLink>
						</li>
					</nav>
				</header>
			</Fragment>
		);
	}
}
