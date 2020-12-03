import React from "react";
import StudentList from "./StudentList"

export default function SearchByTag(props) {

  let tagSearchResult = props.studentPropFromSearch.map((item) => {
    return item
  })
  return (
    <StudentList
      studentPropFromSearchByTag={(tagSearchResult.length === 0) ? props.studentPropFromSearch : tagSearchResult}
      addTagsPropFromSearchByTag={props.addTagsPropFromSearch}
    />
  )
}