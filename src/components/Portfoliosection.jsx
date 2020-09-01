import React, { Component, Fragment } from 'react';
import "./../sass/3-layout/_portfoliosection.scss";


export default class Portfoliosection extends Component {
    render() {
        return (
           <Fragment>

            <h1 className = "portfoiliosection__h1">Our Portfolio</h1>
            <p className = "portfoliosection__p">Check out the full portfolio of our works including haircuts, custom makeup, exclusive manicure and pedicure, and more. All these works were performed by our skilled estheticians, manicurists, and cosmetologists.</p>

           </Fragment>
        )
    }
}
