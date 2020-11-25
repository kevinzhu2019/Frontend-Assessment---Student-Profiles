import React from "react";
import StudentsInfo from "./StudentsInfo";

export default function StudentList(props) {
  const studentResult = props.studentPropFromLoading.map(stu => {
    let count = 0;
    for (let i = 0; i < stu.grades.length; i++) {
      count += Number(stu.grades[i]);
    }
    let average = (count / stu.grades.length).toFixed(3);
    let averagePercent = average + "%";
    return (
      <StudentsInfo
        key={stu.id} 
        avatar={stu.pic}
        firstName={stu.firstName}
        lastName={stu.lastName}
        email={stu.email}
        company={stu.company}
        skill={stu.skill}
        averagePercent={averagePercent}
      />
    )
  })
  return studentResult;
}