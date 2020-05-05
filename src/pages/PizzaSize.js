import React from "react";
import SizeForm from "../components/SizeForm";

const PizzaSize = (props) => {
    return (
                <SizeForm push={props.history.push}/>
        );
};

export default PizzaSize;
