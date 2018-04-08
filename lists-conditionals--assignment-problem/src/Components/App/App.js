import React, { Component } from 'react';

class App extends Component {
  state = {
    paragraph: '',
  }

  paragraphChangeHandler = this.paragraphChangeHandler.bind(this);
  
  paragraphChangeHandler(event) {
    console.log(event.target.value)
    this.setState({
      paragraph: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
      <h1>This is the homework for lists and what not</h1>
      <input 
        onChange={this.paragraphChangeHandler}
        value={this.state.paragraph}/>
      <p>{this.state.paragraph}</p>
      </div>
    );
  }
}

export default App;
