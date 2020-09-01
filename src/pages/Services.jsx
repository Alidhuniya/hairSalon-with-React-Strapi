import React, { Component, Fragment } from 'react';
import Servicesection from './../components/Servicesection';
import Servicesectionone from './../components/Servicesectionone';
import Servicepricing from './../components/Servicepricing';
import "./../sass/4-pages/_service.scss";

export default class Services extends Component {
    render() {
        return (
           
                <Fragment>
                    <div className = "servicepage" >

                    <section>
                        <Servicesection />
                    </section>
                        
                    <section>
                    <Servicesectionone />
                        </section>
                        
                        <section className = "pricingcomp">
                        <Servicepricing  />
                        </section>

                    </div>
                </Fragment>
          
        )
    }
}
