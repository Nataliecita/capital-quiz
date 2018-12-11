import React, { Component } from 'react';
import './App.css';
import Question from './components/Question'
import * as CountryAPI from './CountryAPI'


class App extends Component {

  state = {
    country: ""
  }  


  componentDidMount(){
    CountryAPI.get()
      .then(response =>{
        this.setState({ country: response}) 
      })
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
