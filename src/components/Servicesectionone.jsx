import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_servicesectionone.scss";
import serviceIcon1 from "../assets/haircut.svg";
import serviceIcon2 from "../assets/hairspa.svg";
import serviceIcon3 from "../assets/facial.svg";
import serviceIcon4 from "../assets/manicure.svg";
import serviceIcon5 from "../assets/haircoloring.svg";
import serviceIcon6 from "../assets/beauty.svg";
import serviceIcon7 from "../assets/dryshampoo.svg";
import serviceIcon8 from "../assets/hairesucation.svg";
import serviceIcon9 from "../assets/hairstyling.svg";



export default class Servicesectionone extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("servicesectionones");
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
              <div className = "services">
              <h1 className = "services__h1">Our Services</h1>
                    <div className = "services__container">

                    {/* I can add map function to iterate this request but I forget to add image model in Strapi cms */}

                        <div className = "services__offer">
                           <img className = "icon-img" src = {serviceIcon1}   alt="icon-services" title = "symbol" />
                            <h3 className = "services__h3">{view && view.serviceoffer[0].heading}</h3>
                            <p className = "services__p">{view && view.serviceoffer[0].desc}</p>
                        </div>

                        <div className = "services__offer">
                           <img className = "icon-img" src = {serviceIcon2} alt="icon-services" title = "symbol" />
                            <h3 className = "services__h3">{view && view.serviceoffer[1].heading}</h3>
                            <p className = "services__p">{view && view.serviceoffer[1].desc}</p>
                        </div>

                        <div className = "services__offer">
                           <img className = "icon-img" src = {serviceIcon3} alt="icon-services" title = "symbol" />
                            <h3 className = "services__h3">{view && view.serviceoffer[2].heading}</h3>
                            <p className = "services__p">{view && view.serviceoffer[2].desc}</p>
                        </div>

                        <div className = "services__offer">
                           <img className = "icon-img" src = {serviceIcon4} alt="icon-services" title = "symbol" />
                            <h3 className = "services__h3">{view && view.serviceoffer[3].heading}</h3>
                            <p className = "services__p">{view && view.serviceoffer[3].desc}</p>
                        </div>

                        <div className = "services__offer">
                           <img className = "icon-img" src = {serviceIcon5} alt="icon-services" title = "symbol" />
                            <h3 className = "services__h3">{view && view.serviceoffer[4].heading}</h3>
                            <p className = "services__p">{view && view.serviceoffer[4].desc}</p>
                        </div>

                        <div className = "services__offer">
                           <img className = "icon-img" src = {serviceIcon6} alt="icon-services" title = "symbol" />
                            <h3 className = "services__h3">{view && view.serviceoffer[5].heading}</h3>
                            <p className = "services__p">{view && view.serviceoffer[5].desc}</p>
                        </div>

                        <div className = "services__offer">
                           <img className = "icon-img" src = {serviceIcon7} alt="icon-services" title = "symbol" />
                            <h3 className = "services__h3">{view && view.serviceoffer[6].heading}</h3>
                            <p className = "services__p">{view && view.serviceoffer[6].desc}</p>
                        </div>

                        <div className = "services__offer">
                           <img className = "icon-img" src = {serviceIcon8} alt="icon-services" title = "symbol" />
                            <h3 className = "services__h3">{view && view.serviceoffer[7].heading}</h3>
                            <p className = "services__p">{view && view.serviceoffer[7].desc}</p>
                        </div>

                        <div className = "services__offer">
                           <img className = "icon-img"  src = {serviceIcon9} alt="icon-services" title = "symbol" />
                            <h3 className = "services__h3">{view && view.serviceoffer[8].heading}</h3>
                            <p className = "services__p">{view && view.serviceoffer[8].desc}</p>
                        </div>

                    </div>
              </div>
			</Fragment>
		);
	}
}
