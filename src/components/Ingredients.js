import React, { Component } from "react";
import { connect } from "react-redux";

import { updatePizzaToppings } from "../actions/index";
import "./ingredients.css"

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      event.preventDefault();
      console.log(event.currentTarget.attributes["value"].value);
      let value = event.currentTarget.attributes["value"].value;
      this.props.setPizzaIngredients({ value });  }

  handleSubmit(event) {
    event.preventDefault();
    let value = event.currentTarget.attributes["value"].value;
    this.props.setPizzaIngredients({ value });
  }

  render() {
    const { pizza } = this.props;
    console.log(pizza.maxToppings);
    return (
        <div className="page">
            <div className="nav">
                <h2>Pizza Ingredients</h2>
                <div className={"order" }>
                    { pizza.ingredients.length <= pizza.maxToppings
                           ? <span> Select at least 3 toppings</span>
                      : <span> You could select a max of {pizza.maxToppings} toppings</span>
                    }<br/>
        <button type="submit" disabled={ pizza.ingredients.length > pizza.maxToppings || pizza.ingredients.length < 3}> <span> I want to order </span>
                    </button>
                </div>
            </div>
        <hr/>
        <div className="gallery">
          {pizza.toppings.map(ingredient => {
                  let clName = pizza.ingredients.includes(ingredient);
              return (<div
                         className={clName ? "image selected" :"image"}
                         key={ingredient}
                         value={ingredient}
                         onClick={this.handleChange}>
				          <img src={"https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/03/29/pepperoni.jpg"} alt={ingredient} />
                  <span className={"description"}>{ingredient}</span>
              </div>)
          })}

        </div>
      </div>
    );
  }
}

const Ingredients = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsFormComponent);

export default Ingredients;
