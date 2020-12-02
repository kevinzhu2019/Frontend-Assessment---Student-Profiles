import React from "react";
import Tag from "./Tag";

export default function TagList(props) {
  let tagsUI = props.tagNamePropFromInputTags.map((tag) => {
    return (
      <Tag 
        key={tag}
        tagNamePropFromTagList={tag}
      />
    )
  })
  return (
    <div className="tagList">
      {tagsUI}
    </div>
  )
}