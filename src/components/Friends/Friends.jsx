import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFriends from '../SingleFriends/SingleFriends';
import './Friends.css'

const Friends = () => {
  const friends =useLoaderData()
  //console.log(friends)
  return (
    <div>
      <h3>This is my avable Friends list for react :{friends.length}</h3>
    <div className='items'>
        
      {
       friends.map(friend =><SingleFriends 
        key={friend.id}
        friend={friend}
        ></SingleFriends>)
      }
    </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed voluptas, quasi obcaecati facere eius atque voluptate libero dolore deserunt necessitatibus totam porro pariatur et temporibus? Dolores natus vitae aut possimus!</p>
      <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, facere earum. Consectetur tempore consequatur repudiandae! Voluptatem saepe laudantium facere fuga eos ea tempore explicabo repellat, reiciendis asperiores repudiandae veniam minus.</h5>
    </div>
  );
};

export default Friends;