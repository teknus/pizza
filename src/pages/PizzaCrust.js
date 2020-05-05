import React from "react";
import CrustForm from "../components/CrustForm";

const PizzaCrust = (props) => {
    return (
          <CrustForm push={props.history.push}/>
        )
};

export default PizzaCrust;

