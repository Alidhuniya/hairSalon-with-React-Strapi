import React, { Component, Fragment } from 'react';
import "./../sass/3-layout/_footer.scss";





const spanStyle = {
    fontWeight: "300",
    fontSize: "25px",
    lineHeight: "29px",
    letterSpacing: "0.05em",
    color: "#000000"
}

const icon = {
    color: "#716565",
    marginTop: "1rem"
}



export default class Contact extends Component {
    render() {
        return (
           
                <Fragment>
                <div className = "contact">
                    <div className = "contact__div">
                        <h1>Email: <span style = {spanStyle}>silver_bhw@gmail.com</span></h1>
                    </div>
                    <div>
                    <h1>PhoneNo: <span style = {spanStyle}>9887567856</span></h1>
                    </div>
                    <div>
                    <h1>Youtube: <span ><i style = {icon} className = "fab fa-youtube "></i></span></h1>
                    </div>
                </div>
                </Fragment>
          
        )
    }
}
