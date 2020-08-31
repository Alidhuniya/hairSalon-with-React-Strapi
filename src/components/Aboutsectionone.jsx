import React, { Component, Fragment } from "react";
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_aboutsectionone.scss";



export default class Aboutsectionone extends Component {
	constructor(props) {
		super();
		this.state = {
			result: "",
		};
	}

	async componentDidMount() {
		try {
			const response = await Baseurl.get("aboutsectionones");
			this.setState({ result: response.data[0] });
			// console.log(this.state.result);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const view = this.state.result;
		console.log(this.state.result);

		const { heading, desc } = view;

		return (
			<Fragment>
          <div className = "aboutsectionone">
              <div className = "aboutsectionone__container">
                  <div className = "aboutsectionone__leftcontainer">
                    <h1 className = "aboutsectionone__h1">{heading}</h1>
                    <p className = "aboutsectionone__desc">{desc}</p>
                    <div className = " icon social-icons">
                    <i className=" icon fab fa-facebook fa-2x "></i>
                    <i className=" icon fab fa-twitter fa-2x "></i>
                    <i className="icon fab fa-instagram fa-2x "></i>
                    </div>
                  </div>

                  {/* <div className = "aboutsectionone__rightcontainer">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/pSLrFrv3OvU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                  </div> */}

              </div>
          </div>
			</Fragment>
		);
	}
}
