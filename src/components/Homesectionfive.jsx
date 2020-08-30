import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_homesectionfive.scss";
import "./../sass/3-layout/_carousel.scss";
// import "react-responsive-carousel/lib/styles/carousel.css"; //link of tutorial: https://dev.to/aryaziai/modern-testimonials-in-react-tutorial-cn1

import { Carousel } from 'react-responsive-carousel';

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
						<h1 className = "homesectionfive__heading">{testimonialheading}</h1>
						<p className = "homesectionfive__desc">{testimonialdesc}</p>
					</div>
				</section>
				
				<div>
				<Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
				
					{
						
						view && view.testimonialscomp.map((item, key) => (
						<div className = "testi">

					
						<img className = "client__img" src = {item.img.url} alt = "client" />
						<h1 key={item.id}> {[item.name]} </h1>
						

						<p className = "testi__comnt">{item.comment}</p>

						</div>
					   ))
					
					}
					</Carousel>
					
				</div>
				
			</Fragment>
		);
	}
}
