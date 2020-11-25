import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';

import Loading from './Loading';

import { useState, useEffect } from 'react';
import axios from 'axios';

// function Loading() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     axios.get(`https://www.hatchways.io/api/assessment/students`)
//     .then((result) => {
//       setStudents(result.data.students);
//     })
//   }, [])

//   console.log(students);

//   return (
//     <StudentList 
//       student={students}
//     />
//   );
// }

// function StudentsInfo(props) {
//   return (
//     <article className="students">
//       <div className="studentPhoto">
//         <img 
//           className="student_photo"
//           src={props.avatar}
//           alt="userPhoto"
//         />
//       </div>
//       <div className="studentInfo">
//         <div className="studentName">
//           <h1 className="name">{props.firstName} {props.lastName}</h1>
//         </div>
//         <div className="studentDetail">
//           <p className="email">Email: {props.email}</p>
//           <p className="company">Company: {props.company}</p>
//           <p className="skill">Skill: {props.skill}</p>
//           <p className="average">Average: {props.averagePercent}</p>
//         </div>
//       </div>
//     </article>
//   )
// }

function Search(props) {
  const [name, setName] = useState('');
  return (
    <div className="search">
      <input 
        id="name-input"
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Search by name"
      />
      {/* {name && <h1>Hello, {name}!</h1>} */}
    </div>
  )
}

// function StudentList(props) {
//   const studentResult = props.student.map(stu => {
//     let count = 0;
//     for (let i = 0; i < stu.grades.length; i++) {
//       count += Number(stu.grades[i]);
//     }
//     let average = (count / stu.grades.length).toFixed(3);
//     let averagePercent = average + "%";
//     return (
//       <StudentsInfo
//         key={stu.id} 
//         avatar={stu.pic}
//         firstName={stu.firstName}
//         lastName={stu.lastName}
//         email={stu.email}
//         company={stu.company}
//         skill={stu.skill}
//         averagePercent={averagePercent}
//       />
//     )
//   })
//   return studentResult;
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <Search /> */}
    <Loading />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
