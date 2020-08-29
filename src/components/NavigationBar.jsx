import React, { Component } from "react";

class NavigationBar extends Component {
  state = {};
  render() {
    // {" "} is a extra space in navigation bar because we are in multiple rows
    return (
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a> |{" "}
        <a href="/courses">Courses</a>
      </nav>
    );
  }
}

export default NavigationBar;
