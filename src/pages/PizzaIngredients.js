import React, { Component } from "react";
import { connect } from "react-redux";

import { updatePizzaToppings } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    setPizzaIngredients: ingredients => dispatch(setPizzaIngredients(ingredients))
  };
}

class PizzaIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: "thin"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
     console.log(event.target.value);
    this.setState({ ingredients: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { ingredients } = this.state;
    this.props.setPizzaIngredients({ ingredients });
    this.props.history.push("/ingredients");
  }
  render() {
    const { ingredients } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Select a pizza ingredients</label>
          <select
              value={ingredients}
              onChange={this.handleChange}>
              <option value="thin">Thin</option>
              <option value="thick">Thick</option>
          </select>
        </div>
          <button type="submit">SAVE</button>
      </form>
    );
  }
}

const IngredientsForm = connect(
  null,
  mapDispatchToProps
)(PizzaIngredients);

export default IngredientsForm;
