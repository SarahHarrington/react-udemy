import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'; //This needs to start with an uppercase character

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }
  //use handler to show that this is a method you're no actively calling
  //it's an event handler
  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    //DON"T DO THIS   this.state.persons[0].name = 'Maximillian'
    this.setState({persons: [
      {name: newName, age: 28},
      {name: '', age: 29},
      {name: 'Stephanie', age: 35}
    ]
  })
    //setState() - will merge this with the state that was previously defined
}

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 35}
    ]
  })
}
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello I'm a react app.</h1>
        <p>This is really working!</p>
        <button 
          onClick={this.togglePersonHandler}
          style={style} >Switch Name </button>
          { 
          this.state.showPersons === true ? 
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!')}
                changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div> 
            :null
          }
        
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello, I\'m a react app'));
  }
}

export default App;
