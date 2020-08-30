import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Prompt } from "react-router-dom";

// Prompt is good for Link objects. It's not good for Navigation bar
class AboutPage extends Component {
  state = {
    name: "",
  };
  render() {
    return (
      <div>
        <Prompt
          when={!!this.state.name}
          message={(location) =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <div>
          <div>Nice looking profile! What's your name?</div>
          <input
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <Link to="courses" className="btn btn-secondary m-2">
          Go to courses
        </Link>
      </div>
    );
  }
}

export default AboutPage;
