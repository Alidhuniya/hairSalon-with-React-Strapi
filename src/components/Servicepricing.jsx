import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_servicepricing.scss";




export default class Servicepricing extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("pricings");
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
              <div className = "pricing">
              <h1 className = "pricing__h1">Our Services</h1>
                    <div className = "pricing__container">

                        <div className = "pricing__tableone">
                        {
						
						view && view.pricing.map((item, key) => (
						<div className = "table1">

					
						
						<h3 className = "pricing__h3" key={item.id}> {[item.heading]} </h3>
						<p className = "pricing__rupee">{item.price}</p>

						</div>
					   ))
					
					}
                        </div>

                        <div className = "pricing__tabletwo">
                        {
						
						view && view.tables.map((item, key) => (
						<div className = "table1">

					
						
						<h3 className = "pricing__h3" key={item.id}> {[item.heading]} </h3>
						<p className = "pricing__rupee">{item.price}</p>

						</div>
					   ))
					
					}
                            </div>
                       
                    </div>
              </div>
			</Fragment>
		);
	}
}
