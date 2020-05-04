import React, { Component } from "react";
import { connect } from "react-redux";
import { setPizzaSize } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    setPizzaSize: size => dispatch(setPizzaSize(size))
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
     console.log(event.target.value);
    this.setState({ size: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { size } = this.state;
    this.props.setPizzaSize({ size });
    this.props.push("/crust");
  }
  render() {
    const { size } = this.state;
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor="page-title">Size selected {size} </label>
          <select
              value={size}
              onChange={this.handleChange}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
          </select>
          <br/>
        </div>
          <button type="submit">SAVE</button>
          <br/>
      </form>
      </div>
    );
  }
}

const SizeForm = connect(
  null,
  mapDispatchToProps
)(SizeFormComponent);

export default SizeForm;
