import React, { Component } from "react";

class CoursesTable extends Component {
  state = {};
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {this.props.courses.map((course) => {
            return (
              // Each row should have a key of id incase someone is ordering the table
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default CoursesTable;
