import React from "react";
import Ingedients from "../components/Ingredients";

const PizzaIngredients = (props) => {
    return (
                <Ingedients push={props.history.push}/>
        );
};

export default PizzaIngredients;
