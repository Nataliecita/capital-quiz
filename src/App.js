import React, { Component } from 'react';
import './App.css';
import Question from './components/Question'

class App extends Component {

  state = {
    country: "meow"
  }  
  render() {
    return (
      <div className="App">
        <Question country={this.state.country}/>
      </div>
    );
  }
}

export default App;
