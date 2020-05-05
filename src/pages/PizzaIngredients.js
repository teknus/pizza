import React from "react";
import Ingedients from "../components/Ingredients";

const PizzaIngredients = (props) => {
    return (
        <div>
            <div>
                <h2>Select Pizza Ingedients</h2>
                <Ingedients push={props.history.push}/>
            </div>
        </div>);
};

export default PizzaIngredients;
