import React from "react";
import "./loader.css";
// import PropTypes from "prop-types";

const Loader = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center align-super">
       <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> 
    </div>
    
  );
};

// name.propTypes = {};

export default Loader;
