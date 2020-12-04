import React, { useState, Fragment } from "react";
import Loading from "./Loading";
import "./Inputs.css";

export default function Input() {

  const [term, setTerm] = useState("");
  const [tagterm, setTagterm] = useState("");

  return (
    <Fragment>
      <div className="search">
        <input 
          id="name-input"
          value={term}
          onChange={event => setTerm(event.target.value)}
          placeholder="Search by name(Warning: search by name may remove tags)"
        />
      </div>
      <div className="searchTag">
        <input 
          value={tagterm}
          onChange={e => setTagterm(e.target.value)}
          placeholder="Search by tag"
        />
      </div>
      <Loading 
        termPropFromInput={term}
        tagtermPropFromTagInput={tagterm}
      />
    </Fragment>
  )
}