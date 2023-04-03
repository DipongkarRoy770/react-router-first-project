import React from 'react';
import './SingleFriends.css'
import { Link } from 'react-router-dom';

const SingleFriends = ({friend}) => {
  const {id}=friend
  return (
    <div className='friends'>
       <h2>name : {friend.name}</h2>
       <h5>email : {friend.email}</h5>
       <p>website link:{friend.website}</p>
       <h4>company:{friend.company.catchPhrase}</h4>
       <p><Link to ={`/singleFriend/${id}`}>Show more details</Link></p>
    </div>
  );
};

export default SingleFriends;