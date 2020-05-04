import React from "react";
import CrustForm from "../components/CrustForm";

const PizzaCrust = (props) => {
    return (
        <div>
            <div>
                <h2>Select Pizza Curst</h2>
                <CrustForm push={props.history.push}/>
            </div>
        </div>)
};

export default PizzaCrust;

