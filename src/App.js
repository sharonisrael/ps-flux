// imr shortcut
import React, { Component } from "react";
import AboutPage from "./components/AboutPage";
import NavigationBar from "./components/NavigationBar";
import CounterPage from "./components/CounterPage";
import CoursesPage from "./components/CoursesPage";
import PageNotFound from "./components/PageNotFound";
import { Route, Switch } from "react-router-dom";

// git test
// git test2
// git test3
// git test 4
class App extends Component {
  state = {};
  render() {
    // Route takes 2 props : the path which declares the URL and the component to load when path url matches
    // the exact is very important because otherwise / will be in all (/, /about and /courses)
    return (
      <div className="container-fluid">
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={CounterPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );

    // Route takes 2 props : the path which declares the URL and the component to load when path url matches
    // the exact is very important because otherwise / will be in all (/, /about and /courses)
    // return (
    //   <div className="container-fluid">
    //     <NavigationBar />
    //     <Route path="/" exact component={CounterPage} />
    //     <Route path="/about" component={AboutPage} />
    //     <Route path="/courses" component={CoursesPage} />
    //   </div>
    // );
  }
}

export default App;
