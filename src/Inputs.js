import React, { useState, Fragment } from "react";
import Loading from "./Loading";
import "./Inputs.css";

export default function Input() {

  const [term, setTerm] = useState("");

  return (
    <Fragment>
      <div className="search">
        <input 
          id="name-input"
          value={term}
          onChange={event => setTerm(event.target.value)}
          placeholder="Search by name"
        />
      </div>
      <Loading 
        termPropFromInput={term}
      />
    </Fragment>
  )
}