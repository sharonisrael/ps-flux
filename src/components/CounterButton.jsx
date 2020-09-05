import React from "react";

// There are two options:
// function component
// function CounterButton(props) {
// Arrow function component
const CounterButton = (props) => {
  return (
    <>
      <span className="badge badge-success m-2">{props.counter.count}</span>
      <button
        onClick={() => props.onIncrement()}
        className="btn btn-primary btn-lg m-2"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDelete(props.counter.counter_id)}
        className="btn btn-primary btn-lg"
      >
        Delete
      </button>
    </>
  );
};

export default CounterButton;
