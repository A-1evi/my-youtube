import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment ,index,replies) => (
    <div key={index}>
      {" "}
      <Comment  data={comment}></Comment>
      <div className="ml-8 border-l border-black pl-5">
       <CommentList comments ={comment.replies}></CommentList>
      </div>
    </div>
  ));
};

export default CommentList;
