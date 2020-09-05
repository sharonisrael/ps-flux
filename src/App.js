// imr shortcut
import React, { Component } from "react";
import AboutPage from "./components/AboutPage";
import NavigationBar from "./components/NavigationBar";
import CounterPage from "./components/CounterPage";
import CoursesPage from "./components/CoursesPage";
import PageNotFound from "./components/PageNotFound";
import { Route, Switch } from "react-router-dom";
import ManageCoursePage from "./components/ManageCoursePage";

// git test
// git test2
// git test3
// git test 4
class App extends Component {
  state = {};
  render() {
    // Route takes 2 props : the path which declares the URL and the component to load when path url matches
    // the exact is very important because otherwise / will be in all (/, /about and /courses)
    // container is bootstrap component
    return (
      <div className="container-fluid">
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={CounterPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/new_course" component={ManageCoursePage} />
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

const x_value = 10;
console.log("x_value in App.js " + x_value);

// Export in the class enables other places to import the class
// The default enables importing
export default App;

// Export additional function, classes and consts
export { x_value };
