import React, { useMemo } from "react";
import StudentList from "./StudentList";

export default function Search(props) {

  let searchResult = useMemo(() => {
    let massagedStudentList = props.studentPropFromLoading.filter((item) => {
      if (item.firstName.toLowerCase().includes(props.termPropFromLoading.toLowerCase()) || item.lastName.toLowerCase().includes(props.termPropFromLoading.toLowerCase())) {
        return item;
      }
    })
    return massagedStudentList;
  }, [props.termPropFromLoading])

  console.log(searchResult);
  
  return (
    <StudentList 
      studentPropFromSearch={(searchResult.length === 0) ? props.studentPropFromLoading : searchResult}
    />
  )
}