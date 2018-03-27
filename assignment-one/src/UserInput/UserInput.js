import React from 'react';

const UserInput = (props) => {
  return (
    <div>
      <p>Username: {props.username}</p>
      <input 
        type="text" 
        onChange={props.change} 
        value={props.username}/>
    </div>
  )
};

export default UserInput;