import React from 'react';

//arrow function and const since this won't change
const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
    )
}

export default person;