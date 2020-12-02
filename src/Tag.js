import React from "react";
import "./Tag.css";

export default function Tag(props) {
  return (
    <div className="displayTags">
      {props.tagNamePropFromTagList}
    </div>
  )
}