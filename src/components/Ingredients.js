import React, { Component } from "react";
import { connect } from "react-redux";

import { updatePizzaToppings } from "../actions/index";
import "./ingredients.css"
import pepperoni from "../icons/png/009-pepperoni.png";
import mushrooms from "../icons/png/008-mushroom.png";
import onions  from "../icons/png/007-onion.png";
import sausage from "../icons/png/006-sausage.png";
import bacon from "../icons/png/005-bacon.png";
import cheese from "../icons/png/004-cheese.png";
import olives from "../icons/png/003-olive.png";
import greenpeppers from "../icons/png/010-pepper.png";
import pineapple from "../icons/png/002-pineapple.png";
import spinach from "../icons/png/001-spinach.png";

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

    imageIcon(topping){
        switch(topping){
            case "Pepperoni":
                return {icon: pepperoni, alt:"Peperoni icon"};
            case "Mushrooms":
                return {icon: mushrooms, alt:"Mushrooms icon"};
            case "Onions":
                return {icon: onions, alt:"Onions icon"};
            case "Sausage":
                return {icon: sausage, alt: "Sausage icon"};
            case "Bacon":
                return {icon: bacon, alt:"Bacon icon"};
            case "Extra Cheese":
                return {icon: cheese, alt:"Extra icon" };
            case "Black Olives": 
                return {icon: olives, alt:"Black olives icon"};
            case "Green Peppers":
                return {icon: greenpeppers, alt:"Green peppers icon"};
            case "Pineapple":
                return {icon: pineapple, alt: "Pineapple icon"};
            default:
                return {icon: spinach, alt: "Spinach icon"};
        }
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
              let imageData = this.imageIcon(ingredient);
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
