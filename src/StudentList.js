import React, { useState } from "react";
import StudentIndex from "./StudentIndex";

export default function StudentList(props) {

  const [tags, setTags] = useState([]);

  const addTags = (tag) => {
    setTags([...tags, tag]);
  }

  const studentResult = props.studentPropFromSearch.map(stu => {
    let count = 0;
    let testResult = [];
    for (let i = 0; i < stu.grades.length; i++) {
      count += Number(stu.grades[i]);
      testResult.push(`Test${i + 1} ${stu.grades[i]}%`);
    }
    let average = (count / stu.grades.length).toFixed(3);
    let averagePercent = average + "%";
    return (
      <StudentIndex
        key={stu.id} 
        avatarPropFromStudentList={stu.pic}
        firstNamePropFromStudentList={stu.firstName}
        lastNamePropFromStudentList={stu.lastName}
        emailPropFromStudentList={stu.email}
        companyPropFromStudentList={stu.company}
        skillPropFromStudentList={stu.skill}
        averagePercentPropFromStudentList={averagePercent}
        allTestResultsPropFromStudentList={testResult}
        tagNamesPropFromStudentList={tags}
        setTagPropFromStudentsList={addTags}
      />
    )
  })
  return studentResult;
}