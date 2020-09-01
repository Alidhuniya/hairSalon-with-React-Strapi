import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_stylegrid.scss";


export default class Othergrid extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("portfoliosections");
			this.setState({ result: response.data[0] });
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
					
            {
						
						view && view.other.map((item, key) => (
						<div className = "grid">

					
						<img className = "grid__img" src = {item.styleimg.url} alt = "team" title = {item.name} />
						
						</div>
					   ))
					
					}
				</header>
			</Fragment>
		);
	}
}
