import React, { Component } from 'react';
import './App.css';
import Question from './components/Question'
import Capital from './components/Capital'
import * as CountryAPI from './CountryAPI'
import { random, split } from './helpers'

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
        
    // split capital string to array
        this.setState({ capital: split(response["capital"])}) 
        this.setState({ country: response["name"]})
        console.log(this.state.capital)
      })
  }


  render() {
    return (
      <div className="App">
        <Question country={this.state.country}/>
        <Capital capital= {this.state.capital} />
      </div>
    );
  }
}

export default App;
