import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {

  state = {
    username: 'Sarah'
  }

  changeUsernameHandler = (event) => {
    this.setState({username: 'Sarah is Super'})
  };

  newUsernameHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    const style = {
      border: '1px solid red',
      padding: '10px'
    }

    return (
      <div className="App">
        <h1 style={style}>React Assignment One</h1>
        <UserInput 
          change={this.newUsernameHandler}
          username={this.state.username}/>
        <UserOutput 
          username={this.state.username}/>
        <UserOutput 
          click={this.changeUsernameHandler.bind(this, 'Sarah is Super cool!')}/>
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
