// imrc in the shortcut
import React from "react";
import CounterButton from "./CounterButton";
import { Link } from "react-router-dom";
import { useState } from "react";

// cc in the shortcut
function Counter(props) {
  const [counter, setCounter] = useState({
    count: 0,
    counter_id: 1,
    // Example of method in object
    //console.log("counter show message: " + counter.showInfo(14));
    // showInfo: function (realCount) {
    //   console.log(this.count + " " + realCount);
    // },
  });

  // Need <div> as otherwise babel doesn't know to compile 2 components
  return (
    // Important because otherwise JS thinks it's empty
    <div className="jumbotron">
      <h1>Hello world</h1>
      <p>Nice look and feel</p>
      <CounterButton
        counter={counter}
        onIncrement={handleIncrement}
        onDelete={handleDelete}
      />
      <Link to="about" className="btn btn-secondary m-2">
        About
      </Link>
    </div>
  );

  // This is the syntax to get the this object = () =>
  function handleIncrement() {
    let newCountTotal = counter.count + 1;
    console.log("new total" + newCountTotal);
    const newCounter = { count: newCountTotal, counter_id: 1 };
    setCounter(newCounter);
  }

  // This is the syntax to get the this object = () =>
  // handleIncrement() {
  //   console.log("Clicked", this); // "this" is undefined.
  //   // You must put in the constructor
  //   //this.handleIncrement = this.handleIncrement.bind(this)
  // };

  // This is the syntax to get the this object = () =>
  function handleDelete(given_counter_id) {
    // clone the current counter
    let newCounter = { ...counter };
    newCounter.counter_id = given_counter_id + 1;
    // clone and set the parameter
    newCounter = { ...counter, counter_id: given_counter_id + 1 };
    // set value in an object
    newCounter["count"] = 99;
    setCounter(newCounter);
    // logging with comma will enable printing the object. With + it will not work
    console.log("item to delete ", { newCounter });
  }
}

export default Counter;
