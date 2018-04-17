import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../HOC/Aux';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = classes.button;

  if (props.showPersons) {
    btnClass = [classes.button, classes.Red].join(' ');
  }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes will be ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes will be ['red', 'bold']
    }

  return (
    <Aux>
      <h1>Hello I'm a react app.</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle People
      </button>
    </Aux>
  );
};

export default cockpit;