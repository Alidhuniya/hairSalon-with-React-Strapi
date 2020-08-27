import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
  

class Error extends Component {
      render() {
          return (
            <div >
            <h1 >Ooops ! Page Not Found</h1>
            <Link to="/"> Return to Home page</Link>
            </div>
          );
      }
  }

    
  export default Error;
  
