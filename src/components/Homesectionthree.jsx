import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_homesection3.scss";

export default class Homesectionthree extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("homesectionthrees");
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
				<section className = "homesectionthree">
                   { view && <img className = "homesectionthree__img"  src = {view.hairstyles[0].styleimg.url} alt="hair-style" /> }
                   { view && <img className = "homesectionthree__img" src = {view.hairstyles[1].styleimg.url} alt="hair-style" /> }
                   { view && <img className = "homesectionthree__img" src = {view.hairstyles[2].styleimg.url} alt="hair-style" /> }
                   
                </section>
			</Fragment>
		);
	}
}
