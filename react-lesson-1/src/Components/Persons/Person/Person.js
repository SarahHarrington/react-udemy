import React, { Component } from 'react';

import classes from './Person.css';
import WithClass from '../../../HOC/WithClass';

//arrow function and const since this won't change
class Person extends Component {
  render(props) {
    return (
      <WithClass className={classes.Person}>
        <p onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </WithClass>
      )
  }
}

export default Person; 