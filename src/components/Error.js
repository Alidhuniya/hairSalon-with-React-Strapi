import React from 'react';
import {
    Link
  } from "react-router-dom";
  

  const Error = () => {
    return (
      <div >
      <h1 >Ooops ! Page Not Found</h1>
      <Link to="/"> Return to Home page</Link>
      </div>
    );
  };
  
  export default Error;
  
