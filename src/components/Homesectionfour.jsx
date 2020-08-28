import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_homesectionfour.scss";

export default class Homesectiontfour extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("homesectionfours");
			this.setState({ result: response.data[0] });
			// console.log(this.state.result);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const view = this.state.result;
		console.log(view);

		const { ourservice, servicebtn } = view;

		return (
			<Fragment>
				<section className = "homesectionfour">
                  <h1 className = "homesectionfour__h1">{ourservice}</h1>
                   <div className = "homesectionfour__btn">
                       <button className = "homesectionfour__btnBlock">{servicebtn}</button>
                   </div>
                </section>
			</Fragment>
		);
	}
}
