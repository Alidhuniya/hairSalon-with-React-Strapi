import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_aboutsectiontwo.scss";



export default class Aboutsectiontwo extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("aboutsectiontwos");
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
                <div className = "aboutsectiontwo">
                {
						
						view && view.achieve.map((item, key) => (
						<div className = "aboutsectiontwo__container">

                        <img className = "aboutsection__img" src= {item.icon.url} />
						<h1 className = "aboutsectiontwo__h1" key={item.id}> {[item.heading]} </h1>
						<p className = "aboutsectiontwo__prg">{item.parag}</p>

                        </div>

						
					   ))
					
					}
                </div>
			</Fragment>
		);
	}
}
