import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'; //This needs to start with an uppercase character

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }
  //use handler to show that this is a method you're no actively calling
  //it's an event handler
  switchNameHandler = () => {
    // console.log('Was clicked!')
    //DON"T DO THIS   this.state.persons[0].name = 'Maximillian'
    this.setState({})
    //setState() - will merge this with the state that was previously defined
  }

  render() {
    return (
      <div className="App">
        <h1>Hello I'm a react app.</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[0].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[0].age} />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello, I\'m a react app'));
  }
}

export default App;
