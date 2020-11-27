import React from "react";
import StudentIndex from "./StudentIndex";

export default function StudentList(props) {

  const studentResult = props.studentPropFromSearch.map(stu => {
    let count = 0;
    let testResult = [];
    for (let i = 0; i < stu.grades.length; i++) {
      count += Number(stu.grades[i]);
      testResult.push(`Test${i + 1}  ${stu.grades[i]}%`);
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
      />
    )
  })

  // const studentResultFull = props.studentPropFromSearch.map(stu => {
  //   let count = 0;
  //   let testResult = [];
  //   for (let i = 0; i < stu.grades.length; i++) {
  //     count += Number(stu.grades[i]);
  //     testResult.push(`Test${i + 1}  ${stu.grades[i]}%`);
  //   }
  //   let average = (count / stu.grades.length).toFixed(3);
  //   let averagePercent = average + "%";
  //   return (
  //     <StudentsInfoFull
  //       key={stu.id} 
  //       avatar={stu.pic}
  //       firstName={stu.firstName}
  //       lastName={stu.lastName}
  //       email={stu.email}
  //       company={stu.company}
  //       skill={stu.skill}
  //       averagePercent={averagePercent}
  //       allTestResults={testResult}
  //       switchToNormal={() => transition(NORMAL)}
  //     />
  //   )
  // })
  // return (<>
  //           {mode === NORMAL && studentResult}
  //           {mode === FULL && studentResultFull} 
  //         </>);
  return studentResult;
}