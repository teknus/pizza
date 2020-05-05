import React, { Component } from "react";
import { connect } from "react-redux";

import { updatePizzaToppings } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
     setPizzaIngredients: ingredients => dispatch(updatePizzaToppings(ingredients)),
  };
}

function mapStateToProps(state) {
    return {
        pizza: state,
    };
}

class IngredientsFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ingredients: [
            "Pepperoni",
            "Mushrooms",
            "Onions",
            "Sausage",
            "Bacon",
            "Extra Cheese",
            "Black Olives",
            "Green Peppers",
            "Pineapple",
            "Spinach",
        ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      event.preventDefault();
      let value = event.currentTarget.attributes["value"].value
      this.props.setPizzaIngredients({ value });  }

  handleSubmit(event) {
    event.preventDefault();
    let value = event.currentTarget.attributes["value"].value
    this.props.setPizzaIngredients({ value });
  }

  render() {
    const { ingredients } = this.state;
    const { pizza } = this.props;
    return (
        <div>
        <div>
          <label htmlFor="title">Select a pizza ingredients</label>
          <ul>
          {ingredients.map(ingredient => {
                  return <li key={ingredient}><span onClick={this.handleChange} value={ingredient}> {ingredient} </span></li>
          })}
          </ul>

          <ul>
              {pizza.ingredients.map(ingredient => {
                  return <li key={ingredient}><span onClick={this.handleChange} value={ingredient}> {ingredient} </span></li>
              })}
          </ul>

        </div>
       <button type="submit">SAVE</button>
      </div>
    );
  }
}

const Ingredients = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsFormComponent);

export default Ingredients;
