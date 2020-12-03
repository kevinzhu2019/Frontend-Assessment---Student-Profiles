import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";

export default function Loading(props) {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get(`https://www.hatchways.io/api/assessment/students`)
    .then((result) => {
      setStudents(result.data.students);
    })
  }, [])

  const addTags = (id, tagArray) => {
    console.log(tagArray);
    let studentsTemp = [...students];
    studentsTemp[Number(id) - 1] = {...studentsTemp[Number(id) - 1], tags: tagArray};
    setStudents(studentsTemp);
  }

  console.log(students);

  return (
    <Search 
      studentPropFromLoading={students}
      termPropFromLoading={props.termPropFromInput}
      addTagsPropFromLoading={addTags}
    />
  )
}