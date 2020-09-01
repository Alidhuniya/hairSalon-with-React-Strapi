import React, { Component, Fragment } from "react";
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stylegrid from './Stylegrid';
import Color from './Color';
import Othergrid from './Othergrid';
import Gridnav from './Gridnav';

const portfoliocomp = {

    marginTop: "7rem",
    marginBottom: "5rem"

};

class Portfoliosectionone extends Component {
	render() {
		return (
			<Fragment>
			<div  style = {portfoliocomp}>
                <Router>
                <Gridnav />
				<Switch>
					<Route path="/portfolio/" exact>
						<Stylegrid />
					</Route>

					<Route path="/portfolio/color" exact>
						<Color />
					</Route>

					<Route path="/portfolio/others" exact>
						<Othergrid />
					</Route>
				</Switch>

                </Router>
                </div>
			</Fragment>
            
		);
	}
}

export default Portfoliosectionone;
