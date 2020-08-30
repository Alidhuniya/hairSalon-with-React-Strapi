import React, { Component, Fragment } from "react";
import Aboutsectiontwo from "./../components/Aboutsectiontwo";

import Aboutsectionone from "./../components/Aboutsectionone";
import Aboutsectionthree from "./../components/Aboutsectionthree";
import "./../sass/4-pages/_about.scss";

export default class About extends Component {
	render() {
		return (
			<Fragment>
				<div className="about">
				
					<div className = "aboutsectionone">
						<Aboutsectionone />
					</div>

					<div className = "ach">
						<Aboutsectiontwo />
					</div>

					<div className = "team">
						<Aboutsectionthree />
					</div>
				</div>
			</Fragment>
		);
	}
}
