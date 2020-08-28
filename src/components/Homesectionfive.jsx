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
		console.log(this.state.result);

		const { testimonialheading, testimonialdesc } = view;

		return (
			<Fragment>
				<section className="homesectionfive">
					<div>
						<h1>{testimonialheading}</h1>
						<p>{testimonialdesc}</p>
					</div>
				</section>

				<div>
					{
						view && view.testimonialscomp.map((item, key) => (
						<div>

						<div>
						<img className = "client__img" src = {item.img.url} alt = "client" />
						<h1 key={item.id}> {[item.name]} </h1>
						</div>

						<p>{item.comment}</p>
						
						</div>
					   ))
					
					}
				</div>
			</Fragment>
		);
	}
}
