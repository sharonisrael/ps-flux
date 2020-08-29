// imr shortcut
import React, { Component } from "react";
import AboutPage from "./components/AboutPage";
import NavigationBar from "./components/NavigationBar";
import Counter from "./components/Counter";
import CoursesPage from "./components/CoursesPage";

// git test
class App extends Component {
  state = {};
  render() {
    // using {getPage()} the {} makes it be considered as a page
    return (
      <div className="container-fluid">
        <NavigationBar />
        {this.getPage()}
      </div>
    );
  }

  getPage() {
    if (window.location.pathname.endsWith("/about")) {
      return <AboutPage />;
    } else if (window.location.pathname.endsWith("/courses")) {
      return <CoursesPage />;
    } else {
      return <Counter />;
    }
  }
}

export default App;
