import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_homesectionone.scss";



export default class Homesectionone extends Component {
	constructor(props) {
		super();
		this.state = {
			result: ""
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("homesectionones");
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
				<section className = "homeSection1">
                <div className = "homeSection1__container">
                    <div className ="homeSection1__icon">
                    <i className="far fa-clock fa-4x"></i>
                    </div>

                    <div className = "homeSection1__contents">
                        <h3 className = "homeSection1__h3">{view && view.detail[0].heading}</h3>
                        <p className = "homeSection1__prg">{view && view.detail[0].desc}</p>
                    </div>

                    </div>

                    <div className = "homeSection1__container">
                    <div className ="homeSection1__icon">
                    <i className="fas fa-home fa-4x"></i>
                    </div>

                    <div className = "homeSection1__contents">
                        <h3 className = "homeSection1__h3">{view && view.detail[1].heading}</h3>
                        <p className = "homeSection1__p">{view && view.detail[1].desc}</p>
                    </div>

                    </div>

                    <div className = "homeSection1__container">
                    <div className ="homeSection1__icon">
                    <i className="fas fa-calendar-alt fa-4x"></i>
                    </div>

                    <div className = "homeSection1__contents">
                        <h3 className = "homeSection1__h3">{view && view.detail[2].heading}</h3>
                        <p className = "homeSection1__p">{view && view.detail[2].desc}</p>
                    </div>

                    </div>

                </section>
			</Fragment>
		);
	}
}
