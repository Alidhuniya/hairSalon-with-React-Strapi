import React, { Component, Fragment } from 'react';
import Homesection from './../components/Homesection';
import Homesectionone from './../components/Homesectionone';
import Homesectiontwo from './../components/Homesectiontwo';
import Homesectionthree from './../components/Homesectionthree';
import Homesectionfour from './../components/Homesectionfour';
import Homesectionfive from './../components/Homesectionfive';
import Homesectionsix from './../components/Homesectionsix';


import "./../sass/4-pages/_home.scss";

export default class Home extends Component {
    render() {
        return (
           
                <Fragment>
                <div className = "home">

                <div className = "homesection">
                    <Homesection />
                </div>

                <div className = "homesectionone">
                    <Homesectionone />
                </div>

                <div className = "homesectiontwo">
                    <Homesectiontwo />
                </div>

                <div className = "homethree">
                    <Homesectionthree />
                </div>

                <div className = "homesectionfour">
                    <Homesectionfour />
                </div>

                <div>
                    <Homesectionfive />
                </div>

                <div className = "homesectionsix">
                    <Homesectionsix  />
                </div>

                </div>

                </Fragment>
          
        )
    }
}
