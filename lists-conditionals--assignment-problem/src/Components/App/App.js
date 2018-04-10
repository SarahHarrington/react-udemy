import React, { Component } from 'react';
import Validation from '../Validation/Validation';
import Character from '../Character/Character'

class App extends Component {
  state = {
    paragraph: '',
  }

  paragraphChangeHandler = this.paragraphChangeHandler.bind(this);
  
  paragraphChangeHandler(event) {
    this.setState({
      paragraph: event.target.value,
    })
  }

  deleteCharacterHandler(index) {
    const textArray = this.state.paragraph.split('');
    textArray.splice(index, 1);
    const updatedText = textArray.join('');
    this.setState({
      paragraph: updatedText,
    })
  }

  render() {

    const characterList = this.state.paragraph.split('').map((char, index) => {
      return <Character 
        character={char}
        key={index}
        deleteChar={ () => this.deleteCharacterHandler(index)}/>
    })

    return (
      <div className="App">
        <h1>This is the homework for lists and what not</h1>
        <input 
          type="text"
          onChange={ this.paragraphChangeHandler }
          value={ this.state.paragraph }/>
        <p>{ this.state.paragraph }</p>
        <Validation paraLength={ this.state.paragraph.length }/>
        {characterList}
      </div>
    );
  }
}

export default App;
