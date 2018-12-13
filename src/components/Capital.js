import React, { Component} from 'react';

class Capital extends Component {
  render(){
    return (
      <div>
        <p>{this.props.capital}</p>
      </div>
    )
  }
}

export default Capital