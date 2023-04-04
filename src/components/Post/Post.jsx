import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comments from '../Comments/Comments';

const Post = () => {
  const data =useLoaderData()
  return (
    <div>
       <h1>amar sonar bangla mi tomay valobasi</h1>
       {
        data.map(comment=> <Comments 
        key={comment.id}
        comment={comment}
        ></Comments>)
       }
    </div>
  );
};

export default Post;