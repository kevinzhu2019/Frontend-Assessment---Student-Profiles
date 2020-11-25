import React, {useState, useEffect} from "react";
import StudentList from "./StudentList";

export default function Search(props) {
  let massagedStudentList = props.studentPropFromLoading;
  
  return (
    <StudentList 
      studentPropFromSearch={massagedStudentList}
    />
  )
}