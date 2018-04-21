import React, { PureComponent } from 'react';
import classes from './App.css'; //with the changes to the config files will scope them to the js file
import Persons from '../Components/Persons/Persons'; //This needs to start with an uppercase character
import Cockpit from '../Components/Cockpit/Cockpit';
import WithClass from '../HOC/WithClass';

class App extends PureComponent {
  constructor(props) { //if we implement our own constructor, we have to call super(props)
    super(props);
    console.log('[App.js] Inside Constuctor', props);

    //you can initialize state in the constructor
    this.state = {
      persons: [
        {name: 'Max', age: 28, id: 1},
        {name: 'Manu', age: 29, id: 2},
        {name: 'Stephanie', age: 26, id: 3}
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount')
  }

  // shouldComponentUpdate() {
  //   return true;
  // }

  //this is realatively new for React
  // state = {
  //   persons: [
  //     {name: 'Max', age: 28, id: 1},
  //     {name: 'Manu', age: 29, id: 2},
  //     {name: 'Stephanie', age: 26, id: 3}
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  deletePersonHandler = (personIndex) => {
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

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
}
  togglePersonHandler = () => {
    console.log('clicked button')
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    console.log('[App.js] inside render()')
    let persons = null;

    if (this.state.showPersons === true) {
      persons = <Persons
          persons={ this.state.persons }
          clicked={ this.deletePersonHandler }
          changed={ this.nameChangedHandler }
          />
    }

    return (
        <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
            showPersons={this.state.showPersons} 
            persons={this.state.persons} 
            clicked={this.togglePersonHandler}/>
            { persons }   
        </WithClass>
    );
  }
}

export default App; //component wrapping my component, injectiong some extra syntax
