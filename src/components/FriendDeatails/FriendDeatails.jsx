import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './friendDetails.css'


const FriendDeatails = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className='box'>
      <h1>{data.name}</h1>
      <h2>single person deatils for user-{data.email}</h2>
      <p>single Data phone Number :{data.phone}</p>
      <h3>...be happay go shoppping :{data.company.catchPhrase}</h3>
    </div>
  );
};

export default FriendDeatails;