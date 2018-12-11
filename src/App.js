import React, { Component } from 'react';
import './App.css';
import Question from './components/Question'
import * as CountryAPI from './CountryAPI'
import { random } from './helpers'

class App extends Component {

  state = {
    country: null,
    capital: null,
    randomNum: null
  }  

  componentWillMount(){  
    // set random number
    this.setState({randomNum: random()})
  }

  componentDidMount(){    
    // set random country and grab its capital
    CountryAPI.getRandomCountry(this.state.randomNum)
      .then(response =>{
        this.setState({ capital: response["capital"]}) 
        this.setState({ country: response["name"]})
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
