import React, { Component } from "react";
import { getCourses } from "../api/courseApi";
import CoursesTable from "./CoursesTable";
import { Link } from "react-router-dom";

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

  // Another example of get
  // The getCourses actually calls inside the fetch and rsp.json
  fetchCoursesFromJson = () => {
    fetch("./tools/db.json")
      .then((rsp) => rsp.json())
      .then((allCourses) => {
        // storing the allCourses in the CoursesPage object
        this._allCourses = allCourses;
      });
  };

  render() {
    // Moving props to child component to be dump component
    return (
      <div>
        <Link className="btn btn-primary" to="/new_course">
          Add course
        </Link>
        <h1>Courses Page</h1>
        <CoursesTable courses={this.state.courses} />
      </div>
    );
  }
}

export default CoursesPage;
