import React, { Component } from "react";
import { connect } from "react-redux";
import { add, subtract, multiply, divide, clear } from "../redux/action";
import "./calculator.css";

class Calculator extends Component {
  state = { input: "" };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleOperation = (operation) => {
    const value = parseFloat(this.state.input);
    if (!isNaN(value)) {
      operation(value);
      this.setState({ input: "" });
    } else {
      alert("Please enter a valid number");
    }
  };

  render() {
    const { result, clear } = this.props;

    return (
      <div className="container" >
        <h1>CALCULATOR</h1> 
        <h1>Result: {result}</h1>
        <input
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Enter a number"
        />
        <br />
        <div className="button-container">
        <button className="button" onClick={() => this.handleOperation(this.props.add)}>Add</button>
        <button className="button"  onClick={() => this.handleOperation(this.props.subtract)}>Subtract</button>
        <button className="button" onClick={() => this.handleOperation(this.props.multiply)}>Multiply</button>
        <button className="button" onClick={() => this.handleOperation(this.props.divide)}>Divide</button>
        <button className="button"  onClick={clear}>Clear</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  result: state.result,
});

const mapDispatchToProps = {
  add,
  subtract,
  multiply,
  divide,
  clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
