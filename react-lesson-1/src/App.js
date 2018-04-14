import React, { Component } from 'react';
import classes from './App.css'; //with the changes to the config files will scope them to the js file
import Person from './Person/Person.js'; //This needs to start with an uppercase character

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28, id: 1},
      {name: 'Manu', age: 29, id: 2},
      {name: 'Stephanie', age: 26, id: 3}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //this copies the the array
    const persons = [...this.state.persons] //spreads the existing array in to a new array
    persons.splice(personIndex, 1); //splices the new array at the index and removes that one
    this.setState({persons: persons}) //sets the state with the new array
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    // const persons = Object.assign({}, this.state.persons[personIndex]); //this is an older approach

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
}
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                click={() => this.deletePersonHandler(index)}
                name={ person.name } 
                age={ person.age }
                key={ person.id }
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div> 
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //classes will be ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes will be ['red', 'bold']
    }

    return (
        <div className={classes.App}>
          <h1>Hello I'm a react app.</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonHandler}>Toggle People
          </button>
            { persons }  
        </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello, I\'m a react app'));
  }
}

export default App; //component wrapping my component, injectiong some extra syntax
