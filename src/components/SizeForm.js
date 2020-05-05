import React, { Component } from "react";
import { connect } from "react-redux";
import { setPizzaSize } from "../actions/index";
import "./ingredients.css";

function mapDispatchToProps(dispatch) {
  return {
    setPizzaSize: size => dispatch(setPizzaSize(size))
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
      size: "small"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPizzaSize = props.setPizzaSize;
  }
  handleChange(event) {
      console.log( event.currentTarget.attributes["value"].value );
      this.setState({ size: event.currentTarget.attributes["value"].value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { size } = this.state;
    this.props.setPizzaSize({ size });
    this.props.push("/crust");
  }
  render() {
    const { size } = this.state;
    const { pizza } = this.props;
    return (
      <div className="page">
          <div className="nav">
              <h2>Pizza Size</h2>
              <div className="msg">
                  <button onClick={this.handleSubmit}>I want a {this.state.size} pizza</button>
              </div>
          </div>
          <div className="gallery">
              {pizza.sizes.map( s => {
                  let selected = s === size;
                  return <div
                             className={ selected ? "image selected" :"image"}
                             key={s}
                             value={s}
                             onClick={this.handleChange}>
                      <span className={"description"}>{s}</span>
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
