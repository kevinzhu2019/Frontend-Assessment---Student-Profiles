import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "./StudentList";
import Search from "./Search";

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
    <Search 
      studentPropFromLoading={students}
      termPropFromLoading={props.TermPropFromInput}
    />

  )
}