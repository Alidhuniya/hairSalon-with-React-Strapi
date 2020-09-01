import React, { Component, Fragment } from 'react';
import Portfoliosection from './../components/Portfoliosection';
import Portfoliosectionone from './../components/Portfoliosectionone';

export default class Portfolio extends Component {
    render() {
        return (
           
                <Fragment>
                    <div>
                        <section>
                    <Portfoliosection />
                        </section>

                        <section>
                            <Portfoliosectionone />
                            </section>

                    </div>
                </Fragment>
          
        )
    }
}
