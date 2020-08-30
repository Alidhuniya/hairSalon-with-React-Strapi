import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_aboutsectionthree.scss";



export default class Aboutsectionthree extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("aboutsectionthrees");
			this.setState({ result: response.data[0] });
			console.log(this.state.result);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const view = this.state.result;
		// console.log(this.state.result);

		const { heading, parag } = view;

		return (
			<Fragment>
                <div className = "aboutsectionthree">
              <h1 className = "aboutsectionthree__h1">{heading}</h1>
              <p className = "aboutsectionthree__parag">{parag}</p>

              <div className = "aboutsectionthree__container">

              {
						
						view && view.team.map((item, key) => (
						<div className = "team">

					
						<img className = "team__img" src = {item.teampic.url} alt = "team" title = {item.name} />
						<h1 className = "team__h1" key={item.id}> {[item.name]} </h1>
						<p className = "team__title">{item.title}</p>

						</div>
					   ))
					
					}

              </div>


                </div>
			</Fragment>
		);
	}
}
