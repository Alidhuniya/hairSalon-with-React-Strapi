import React, { Component, Fragment } from 'react';
import {
    Link
  } from "react-router-dom";


export default class Navbar extends Component {
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
