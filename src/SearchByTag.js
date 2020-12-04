import React, { useMemo } from "react";
import StudentList from "./StudentList"

export default function SearchByTag(props) {

  // console.log(props.studentPropFromSearch);
  let studentsWithTag = useMemo(() => {
    let studentsWithTag = props.studentPropFromSearch.filter((item) => {
      if(item.hasOwnProperty("tags") && item.tags.length !== 0) {
        return item;
      }
    })
    return studentsWithTag;
  },[props.studentPropFromSearch])

  // console.log("studentsWithTag:", studentsWithTag);

  let tagSearchResult = useMemo(() => {
    let tagSearchResult = studentsWithTag.filter((item) => {
      if(item.tags && item.tags.includes(props.tagTermPropFromSearch.toLowerCase())) {
        return item
      }
    })
    return tagSearchResult;
  }, [studentsWithTag]);

  return (
    <StudentList
      studentPropFromSearchByTag={(tagSearchResult.length === 0) ? props.studentPropFromSearch : tagSearchResult}
      addTagsPropFromSearchByTag={props.addTagsPropFromSearch}
    />
  )
}