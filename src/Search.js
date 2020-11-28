import React from "react";
import StudentList from "./StudentList";

export default function Search(props) {


  let filteredStudentList = props.studentPropFromLoading.filter((item) => {
    if (item.firstName.toLowerCase().includes(props.termPropFromLoading.toLowerCase()) || item.lastName.toLowerCase().includes(props.termPropFromLoading.toLowerCase())) {
      return item;
    }
  })
  
  return (
    <StudentList
      studentPropFromSearch={(filteredStudentList.length === 0) ? props.studentPropFromLoading : filteredStudentList}
    />
  )
}