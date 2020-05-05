import React, { Component } from "react";
import { connect } from "react-redux";
import "../components/ingredients.css";
import {imageIcon, imageSize} from "../utils/index";

function mapStateToProps(state) {
    return {
        pizza: state,
    };
}


class CheckoutPage extends Component {
    render() {
        const { pizza } = this.props;
        const imageData  = imageSize(pizza.size);
        return (
            <div className="page">
                <div className="nav">
                    <h2>Checkout</h2>
                    <div className="msg">
                        <p>Total Price: {pizza.totalPrice} </p>
                    </div>
                </div>

                <p> Size: {pizza.size} </p>
                <hr/>
                <div className="gallery">
                        <div
                            className={"image"}
                            key={pizza.size}
                            value={pizza.size}
                            onClick={this.handleChange}>
                            <img src={imageData.size} alt={imageData.alt}/>
                            <span className={"description"}>{pizza.size}</span>
                        </div>
                </div>
                <p> crust : {pizza.crust} </p>
                <hr/>
                <div className="gallery">
                    <div
                        className={"image"}
                        key={pizza.crust}
                        value={pizza.crust}>
                        <span className={"description"}>{pizza.crust}</span>
                    </div>
                </div>
                <p> Toppings </p>
                <hr/>
                <div className="gallery">
                    {pizza.ingredients.map(ingredient => {
                        let imageDataToppings = imageIcon(ingredient)
                        return (<div
                                    className={"image"}
                                    key={ingredient}
                                    value={ingredient}
                                    onClick={this.handleChange}>
                            <img src={imageDataToppings.icon} alt={imageDataToppings.alt} />
                            <span className={"description"}>{ingredient}</span>
                        </div>)
                    })}
                </div>
            </div>
        );
    }
}

const Checkout = connect(
    mapStateToProps
)(CheckoutPage);

export default Checkout;
