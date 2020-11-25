import React, { useState } from "react";

export default function Search(props) {

  const [term, setTerm] = ("");

  return (
    <div className="search">
      <input 
        id="name-input"
        value={term}
        onChange={event => setTerm(event.target.value)}
        placeholder="Search by name"
      />
      {/* {name && <h1>Hello, {name}!</h1>} */}
    </div>
  )
}