import React, { Component } from "react";
import { connect } from "react-redux";
import { setPizzaCrust } from "../actions/index";
import "./ingredients.css";

function mapDispatchToProps(dispatch) {
  return {
      setPizzaCrust: crust => dispatch(setPizzaCrust(crust))
  };
}

function mapStateToProps(state) {
    return {
        pizza: state,
    };
}

class SizeFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crust: "thin"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPizzaCrust = props.setPizzaCrust;
  }
  handleChange(event) {
      console.log( event.currentTarget.attributes["value"].value );
      this.setState({ crust: event.currentTarget.attributes["value"].value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { crust } = this.state;
    this.props.setPizzaCrust({ crust });
    this.props.push("/ingredients");
  }
  render() {
    const { crust } = this.state;
    const { pizza } = this.props;
    return (
      <div className="page">
          <div className="nav">
              <h2>Pizza Crust</h2>
              <div className="msg">
                  <button onClick={this.handleSubmit}>I want a {this.state.crust} crust </button>
              </div>
          </div>
          <hr/>
          <div className="gallery">
              {pizza.crusts.map( c => {
                  let selected = c === crust;
                  return <div
                             className={ selected ? "image selected" :"image"}
                             key={c}
                             value={c}
                             onClick={this.handleChange}>
                      <span className={"description"}>{c}</span>
                  </div>
              })}

          </div>

      </div>
    );
  }
}

const SizeForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SizeFormComponent);

export default SizeForm;
