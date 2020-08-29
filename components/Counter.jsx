// imrc in the shortcut
import React, { Component } from "react";

// cc in the shortcut
class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    // Need <div> as otherwise babel doesn't know to compile 2 components
    return (
      // Important because otherwise JS thinks it's empty
      <div className="jumbotron">
        <h1>Hello world</h1>
        <p>Nice look and feel</p>
        <span className="badge badge-success m-2">{this.state.count}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary btn-lg"
        >
          Button
        </button>
      </div>
    );
  }

  // This is the syntax to get the this object = () =>
  handleIncrement = () => {
    let newTotal = this.state.count + 1;
    console.log("new total" + newTotal);
    this.setState({ count: newTotal });
  };
}

export default Counter;
