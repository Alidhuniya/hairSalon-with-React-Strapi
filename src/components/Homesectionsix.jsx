import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_homesectionfour.scss";
import "./../sass/3-layout/_homesectionsix.scss";

export default class Homesectionsix extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("homesectionsixes");
			this.setState({ result: response.data[0] });
			// console.log(this.state.result);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const view = this.state.result;
		console.log(view);

		const { callnow, number } = view;

		return (
			<Fragment>
				<section className = "homesectionfour">
                  <h1 className = "homesectionfour__h1 homesection6__h1">{callnow}</h1>
                   <h5 className = "homesection6__h5">{number}</h5>
                </section>
			</Fragment>
		);
	}
}
