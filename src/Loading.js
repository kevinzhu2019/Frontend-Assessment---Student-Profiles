import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "./StudentList";

export default function Loading(props) {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get(`https://www.hatchways.io/api/assessment/students`)
    .then((result) => {
      setStudents(result.data.students);
    })
  }, [])

  console.log(students);

  return (
    <StudentList 
      studentPropFromLoading={students}
    />

  )
}