import React from "react";
import "./StudentsInfo.css";

export default function StudentsInfo(props) {
  return (
    <article className="students">
      <div className="studentPhoto">
        <img 
          className="student_photo"
          src={props.avatar}
          alt="userPhoto"
        />
      </div>
      <div className="studentInfo">
        <div className="studentName">
          <h1 className="name">{props.firstName} {props.lastName}</h1>
        </div>
        <div className="studentDetail">
          <p className="email">Email: {props.email}</p>
          <p className="company">Company: {props.company}</p>
          <p className="skill">Skill: {props.skill}</p>
          <p className="average">Average: {props.averagePercent}</p>
        </div>
      </div>
      <div className="switchButton">
        <button onClick={props.switchToFull}>+</button>
      </div>
    </article>
  )
}