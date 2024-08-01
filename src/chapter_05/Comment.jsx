import React from "react";

function Comment(props) {
  return (
    <div>
      <span>{props.name}<br/></span>
      <span>{props.comment}</span>
    </div>
  )
}

export default Comment;