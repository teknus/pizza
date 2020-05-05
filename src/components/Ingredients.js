import React, { Component } from "react";
import { connect } from "react-redux";

import { updatePizzaToppings } from "../actions/index";
import {imageIcon} from "../utils/index";
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
    this.handleClick = this.handleClick.bind(this);
  }

    componentDidMount(){
        const { pizza } = this.props;
        let value = pizza.toppings[0];
        this.props.setPizzaIngredients({ value });
        this.props.setPizzaIngredients({ value });
    }

  handleChange(event) {
      event.preventDefault();
      let value = event.currentTarget.attributes["value"].value;
      this.props.setPizzaIngredients({ value });  }

  handleClick(event) {
    event.preventDefault();
    this.props.push("/checkout");
  }

  render() {
    const { pizza } = this.props;
    return (
        <div className="page">
            <div className="nav">
                <h2>Pizza Ingredients</h2>
                <div className={"order" }>
                    { pizza.ingredients.length <= pizza.maxToppings
                           ? <span> Select at least 3 toppings</span>
                           : <span> You could select a max of {pizza.maxToppings} toppings</span>
                    }<br/>
        <button onClick={this.handleClick}  disabled={ pizza.ingredients.length > pizza.maxToppings || pizza.ingredients.length < 3}> <span> I want to order </span>
                    </button>
                </div>
            </div>
        <p className={"left-message"}> { pizza.ingredients.length > 3 ? "   Each additional topping costs $ 0,50" : '' } </p>
        <p> Price: {pizza.totalPrice} </p>
        <hr/>
        <div className="gallery">
          {pizza.toppings.map(ingredient => {
              let clName = pizza.ingredients.includes(ingredient);
              let imageData = imageIcon(ingredient);
              return (<div
                         className={clName ? "image selected" :"image"}
                         key={ingredient}
                         value={ingredient}
                         onClick={this.handleChange}>
				          <img src={imageData.icon} alt={imageData.alt} />
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
