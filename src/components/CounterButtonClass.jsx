import React, { Component } from "react";

class CounterButton extends Component {
  state = {};
  render() {
    return (
      <>
        <span className="badge badge-success m-2">
          {this.props.counter.count}
        </span>
        <button
          onClick={() => this.props.onIncrement()}
          className="btn btn-primary btn-lg m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.counter_id)}
          className="btn btn-primary btn-lg"
        >
          Delete
        </button>
      </>
    );
  }
}

export default CounterButton;
