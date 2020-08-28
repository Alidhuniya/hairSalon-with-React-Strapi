import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_homesection.scss";
import "./../sass/3-layout/_homesectiontwo.scss";

export default class Homesectiontwo extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("homesectiontwos");
			this.setState({ result: response.data[0] });
			// console.log(this.state.result);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const view = this.state.result;
		console.log(view);

		const { heading, parag, readmore } = view;

		return (
			<Fragment>
				<main className="main">
					<section className="main__leftContents">
						<h1 className="main__h1 homesectiontwo__h1">{heading}</h1>
						<p className = "main__desc homesectiontwo__desc" >{parag}</p>
						
						<div className="main__btn">
							<button className="main__callBtn">{readmore}</button>
						</div>
					</section>

					<section className="main__rightContents">
						{view && (
							<img
								className="main__barberImg homesectiontwo__img"
								src={view.hairalbum.url}
								alt="barber"
								title = "barber hair cutting"
							/>
						)}
					</section>
				</main>
			</Fragment>
		);
	}
}
