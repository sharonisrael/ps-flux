import React, { Component } from "react";
import { getCourses } from "../api/courseApi";
import CoursesTable from "./CoursesTable";

// Smart component
// Sets all data and send it down below to mark up using props
class CoursesPage extends Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    // then will be called after API call is complete
    // the courses object comes from db.json file
    // setState updates only the items you tell it to update
    getCourses().then((courses) => this.setState({ courses: courses }));

    // other options
    // getCourses().then(courses => {
    //     this.setState({ courses: courses });
    //   });

    // getCourses().then(function (courses) {
    //   this.setState({ courses: courses });
    // });
  }

  render() {
    // Moving props to child component to be dump component
    return (
      <div>
        <h1>Courses Page</h1>
        <CoursesTable courses={this.state.courses} />
      </div>
    );
  }
}

export default CoursesPage;
