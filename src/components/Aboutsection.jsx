import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_aboutcarousel.scss";
import "./../sass/3-layout/_aboutsection.scss";

import { Carousel } from 'react-responsive-carousel';

export default class Aboutsection extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("aboutsections");
			this.setState({ result: response.data[0] });
			// console.log(this.state.result);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const view = this.state.result;
		console.log(this.state.result);

		// const { testimonialheading, testimonialdesc } = view;

		return (
			<Fragment>
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
						
						view && view.slider.map((item, key) => (
						<div className = "aboutSlide">

					
						<img className = "aboutSlide__img" src = {item.slide[0].url} alt = "client" />
						
						</div>
					   ))
					
					}
					</Carousel>
					
				</div>
				
			</Fragment>
		);
	}
}
