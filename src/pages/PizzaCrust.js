import React, { Component } from "react";
import { connect } from "react-redux";

import { setPizzaCrust } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    setPizzaCrust: crust => dispatch(setPizzaCrust(crust))
  };
}

class PizzaCrust extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crust: "thin"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
     console.log(event.target.value);
    this.setState({ crust: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { crust } = this.state;
    this.props.setPizzaCrust({ crust });
    this.props.history.push("/ingredients");
  }
  render() {
    const { crust } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Select a pizza crust</label>
          <select
              value={crust}
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

const CrustForm = connect(
  null,
  mapDispatchToProps
)(PizzaCrust);

export default CrustForm;
