import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

function ManageCoursePage(props) {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  // can also be function handleChange({target}) { deconstruction
  function handleChange(event) {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ManageCoursePage;
