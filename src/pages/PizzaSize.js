import React from "react";
import SizeForm from "../components/SizeForm";

const PizzaSize = (props) => {
    return (
        <div>
            <div>
                <h2>Select Pizza Size</h2>
                <SizeForm push={props.history.push}/>
            </div>
        </div>);
};

export default PizzaSize;
