import React from 'react';
import './comment.css'

const Comments = ({comment}) => {
  console.log(comment)
  return (
    <div className='comment'>
       <h3>{comment.id}</h3>
       <h3>{comment.title}</h3>
       <h4>{comment.userId}</h4>
       <p>{comment.body}</p>
    </div>
  );
};

export default Comments;