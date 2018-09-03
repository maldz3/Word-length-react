import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char';

class App extends Component {
    state = {
      textWords: ''
    }

  textLengthHandler = (event) => {
    if (event) {
      const text = event.target.value
      this.setState({ textWords: text });
    };

  }

  deleteCharHandler = (index) => {
    const chars = this.state.textWords.split('');
    chars.splice(index, 1);
    const updatedChars = chars.join('');
    this.setState({textWords: updatedChars});
  }

  render() {
    let chars = this.state.textWords.split('').map( (ch, index) => {
      return <Char char={ch} key={index} clicked={() => this.deleteCharHandler(index)}/>
    })

    return (
      <div className="App">
        <input type='text'
              onChange={this.textLengthHandler}
              value={this.state.textWords}/>
            <p>length is {this.state.textWords.length}</p>
        <Validation textLength={this.state.textWords.length}/>
        {chars}
      </div>
    );
  }
}

export default App;
