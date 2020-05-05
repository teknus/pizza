import React, { Component } from "react";
import { connect } from "react-redux";
import { setPizzaSize } from "../actions/index";
import "./ingredients.css";
import large from '../icons/svg/001-pizza-1.svg';
import medium from '../icons/svg/002-pizza.svg';
import small from '../icons/svg/003-pizza-2.svg';

function mapDispatchToProps(dispatch) {
  return {
      setPizzaSize: size => dispatch(setPizzaSize(size)),
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

    componentDidMount(){
        let { size } = this.state;
        this.props.setPizzaSize({ size });
    }

  handleChange(event) {
      let size = event.currentTarget.attributes["value"].value 
      this.props.setPizzaSize({ size });
      this.setState({ size: size });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { size } = this.state;
    this.props.setPizzaSize({ size });
    this.props.push("/crust");
  }


    imageSize(size){
        switch (size){
            case "small":
                return {size: small, alt: "small pizza icon"};
            case "medium":
                return {size: medium, alt: "medium pizza icon"};
            default:
                return {size: large, alt: "large pizza icon"};
        }
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
          <p> Price: {pizza.totalPrice} </p>
          <hr/>
          <div className="gallery">
              {pizza.sizes.map( s => {
                  let selected = s === size;
                  let imageData = this.imageSize(s);
                  return <div
                             className={ selected ? "image selected" :"image"}
                             key={s}
                             value={s}
                             onClick={this.handleChange}>
                      <img src={imageData.size} alt={imageData.alt}/>
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
