import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import "./../sass/3-layout/_footer.scss";


export default class Footer extends Component {
    render() {
        return (

            <Fragment>
               <footer>
                   <div className = "footer__nav">
                       <Navbar />
                   </div>

                   <div className = "footer__btmContents">

                    <div className = "footer__socialLinks">

                    <i className="fab fa-facebook fa-2x footer__icon"></i>
                    <i className="fab fa-twitter fa-2x footer__icon"></i>
                    <i className="fab fa-instagram fa-2x footer__icon"></i>
                    <i className="fab fa-youtube fa-2x footer__icon"></i>

                    </div>

                    <div className = "claims">

                    <h4 className = "claims__h40">Design and Developed by Ali Dhuniya</h4>
                    <h4 className = "claims__h41">&copy;All Right Reserved</h4>

                    </div>
                      
                   </div>
               </footer>
            </Fragment>
            
        );
    }
}
