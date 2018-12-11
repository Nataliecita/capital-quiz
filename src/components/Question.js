import React, { Component } from 'react'; 
// import * as CountryAPI from '../../CountryAPI'


class Question extends Component {

  render(){
    return (
      <p>What is the capital of {this.props.country} ?</p>
    )
  }
}

export default Question