import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        pizza: state,
    };
}


class CheckoutPage extends Component {
    render() {
        const { pizza } = this.props;
        return (
            <div>
                {pizza.totalPrice}
            </div>
        );
    }
}

const Checkout = connect(
    mapStateToProps
)(CheckoutPage);

export default Checkout;
