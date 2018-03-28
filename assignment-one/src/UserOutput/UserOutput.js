import React from 'react';

const UserOutput = (props) => {
  return (
    <div>
      <p>The username is: {props.username}</p>
      <p onClick={props.changeUsernameHandler}>Bacon ipsum dolor amet pancetta dolore aute ut.</p>
      <p>Spicy jalapeno bacon ipsum dolor amet beef pork brisket turkey.</p>
    </div>
  )
};

export default UserOutput;