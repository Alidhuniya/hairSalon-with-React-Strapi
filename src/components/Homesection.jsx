import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_homesection.scss";
import ReactMarkdown from "react-markdown";

export default class Homesection extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("homesections");
			this.setState({ result: response.data[0] });
			// console.log(this.state.result);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const view = this.state.result;
		console.log(view);

		const { heading, h3, desc, callnow } = view;

		return (
			<Fragment>
				<main className="main">
					<section className="main__leftContents">
						<h1 className="main__h1">{heading}</h1>
						<h3 className="main__h3">{h3}</h3>
						{/* <p className = "main__desc" >{desc}</p> */}
						<ReactMarkdown
							className="main__desc"
							source={desc}
							escapeHtml={false}
						/>
						<div className="main__btn">
							<button className="main__callBtn">{callnow}</button>
						</div>
					</section>

					<section className="main__rightContents">
						{view && (
							<img
								className="main__barberImg"
								src={view.barber.url}
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
