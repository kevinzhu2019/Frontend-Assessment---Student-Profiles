import React from "react";
import StudentsInfo from "./StudentsInfo";
import StudentsInfoFull from "./StudentsInfoFull";
import useVisualMode from "./useVisualMode";

export default function StudentList(props) {
  const NORMAL = "NORMAL";
  const FULL = "FULL";
  const { mode, transition } = useVisualMode(NORMAL);

  const studentResult = props.studentPropFromSearch.map(stu => {
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
        switchToFull={() => transition(FULL)}
      />
    )
  })

  const studentResultFull = props.studentPropFromSearch.map(stu => {
    let count = 0;
    let testResult = [];
    for (let i = 0; i < stu.grades.length; i++) {
      count += Number(stu.grades[i]);
      testResult.push(`Test${i + 1}  ${stu.grades[i]}%`);
    }
    let average = (count / stu.grades.length).toFixed(3);
    let averagePercent = average + "%";
    return (
      <StudentsInfoFull
        key={stu.id} 
        avatar={stu.pic}
        firstName={stu.firstName}
        lastName={stu.lastName}
        email={stu.email}
        company={stu.company}
        skill={stu.skill}
        averagePercent={averagePercent}
        allTestResults={testResult}
        switchToNormal={() => transition(NORMAL)}
      />
    )
  })
  return (<>
            {mode === NORMAL && studentResult}
            {mode === FULL && studentResultFull} 
          </>);
}