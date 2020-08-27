import React, { Component, Fragment } from 'react';
import Baseurl from "./Baseurl";
import "./../sass/3-layout/_navbar.scss";
import {
    Link
  } from "react-router-dom";

  const localhost = "https://hairsalon.herokuapp.com";

export default class Navbar extends Component {
   
    constructor(props) {
        super();
        this.state = {
            result: []
        }
    }
    

    async componentDidMount() {
        try {
        const response = await Baseurl.get("navbars");
        this.setState({result: response});
        console.log(this.state.result.data);

         }

         catch(error) {
             console.log(error);
         }

    }

    render() {
        return (

            <Fragment>
               <nav>
                   <li><Link  to="/">Home</Link></li>
                   <li><Link  to="/about">About</Link></li>
                   <li><Link  to="/services">Our Services</Link></li>
                   <li><Link  to="/portfolio">Portfolio</Link></li>
                   <li><Link  to="/contact">Contact</Link></li>
                   <li><Link  to="/book">Book Your Time</Link></li>
               </nav>
            </Fragment>
            
        );
    }
}
