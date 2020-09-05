// imrc in the shortcut
import React, { Component } from "react";
import CounterButton from "./CounterButton";
import { Link } from "react-router-dom";

// cc in the shortcut
class Counter extends Component {
  state = {
    counter: {
      count: 0,
      counter_id: 1,
    },
  };

  render() {
    // Need <div> as otherwise babel doesn't know to compile 2 components
    return (
      // Important because otherwise JS thinks it's empty
      <div className="jumbotron">
        <h1>Hello world</h1>
        <p>Nice look and feel</p>
        <CounterButton
          counter={this.state.counter}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />
        <Link to="about" className="btn btn-secondary m-2">
          About
        </Link>
      </div>
    );
  }

  // This is the syntax to get the this object = () =>
  handleIncrement = () => {
    let newCountTotal = this.state.counter.count + 1;
    console.log("new total" + newCountTotal);
    let newCounter = { count: newCountTotal, counter_id: 1 };
    this.setState({ counter: newCounter });
  };

  // This is the syntax to get the this object = () =>
  // handleIncrement() {
  //   console.log("Clicked", this); // "this" is undefined.
  //   // You must put in the constructor
  //   //this.handleIncrement = this.handleIncrement.bind(this)
  // };

  // This is the syntax to get the this object = () =>
  handleDelete = (given_counter_id) => {
    // clone the current counter
    let newCounter = { ...this.state.counter };
    newCounter.counter_id = given_counter_id + 1;
    // clone and set the parameter
    newCounter = { ...this.state.counter, counter_id: given_counter_id + 1 };
    this.setState({ counter: newCounter });
    // logging with comma will enable printing the object. With + it will not work
    console.log("item to delete ", { newCounter });
  };
}
export default Counter;
