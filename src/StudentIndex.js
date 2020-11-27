import React from "react";
import StudentsInfo from "./StudentsInfo";
import StudentsInfoFull from "./StudentsInfoFull";
import useVisualMode from "./useVisualMode";

export default function StudentIndex(props) {
  const NORMAL = "NORMAL";
  const FULL = "FULL";
  const { mode, transition } = useVisualMode(NORMAL);

  return (
    <article className="studentList">
      {mode === NORMAL && <StudentsInfo
        avatar={props.avatarPropFromStudentList}
        firstName={props.firstNamePropFromStudentList}
        lastName={props.lastNamePropFromStudentList}
        email={props.emailPropFromStudentList}
        company={props.companyPropFromStudentList}
        skill={props.skillPropFromStudentList}
        averagePercent={props.averagePercentPropFromStudentList}
        switchToFull={() => transition(FULL)}
        />
      }
      {mode === FULL && <StudentsInfoFull
        avatar={props.avatarPropFromStudentList}
        firstName={props.firstNamePropFromStudentList}
        lastName={props.lastNamePropFromStudentList}
        email={props.emailPropFromStudentList}
        company={props.companyPropFromStudentList}
        skill={props.skillPropFromStudentList}
        averagePercent={props.averagePercentPropFromStudentList}
        allTestResults={props.allTestResultsPropFromStudentList}
        switchToNormal={() => transition(NORMAL)}
        />
      }
    </article>
  )
}