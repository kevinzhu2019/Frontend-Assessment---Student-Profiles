import React from "react";
import TagList from "./TagList";

export default function InputTags(props) {

  const onKeyUp = (e) => {
    console.log(e.which);
    if(e.which === 13) {
      let input = e.target.value.trim();
      if(input.length === 0) return;
      props.addTagsPropFromStudentsInfoFull(input);
      e.target.value = "";
    }
  }

  return (
    <div className="tags">
      <form className="tagForm" onSubmit={(event) => event.preventDefault()}>
        <div>
          <TagList tagNamePropFromInputTags = {props.tagPropFromStudentsInfoFull} />
        </div>
        <input 
          id="tag-input" 
          className="add-tag-input" 
          placeholder="Add a tag"
          onKeyUp={(e) => (onKeyUp(e))}
        />
      </form>
    </div>
  )
}