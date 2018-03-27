import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {

  state = {
    username: 'Sarah',
  }


  render() {
    return (
      <div className="App">
        <h1>React Assignment One</h1>
        <UserInput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
