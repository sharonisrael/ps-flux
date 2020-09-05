import React from "react";

function CounterButton(props) {
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
}

export default CounterButton;
