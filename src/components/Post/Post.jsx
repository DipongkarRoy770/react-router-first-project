import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';

const Post = () => {
  const data =useRouteLoaderData()
  console.log(data)
  return (
    <div>
      
    </div>
  );
};

export default Post;