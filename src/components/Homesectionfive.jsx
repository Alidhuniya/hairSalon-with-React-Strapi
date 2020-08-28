import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_homesectionfive.scss";

export default class Homesectiontfive extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("homesectionfives");
			this.setState({ result: response.data[0] });
			// console.log(this.state.result);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const view = this.state.result;
		console.log(view);

		// const { ourservice, servicebtn } = view;

		return (
			<Fragment>
				<section className = "homesectionfive">
                  
                </section>
			</Fragment>
		);
	}
}
