import React, { Component} from 'react';
import PropTypes from 'prop-types';


class Capital extends Component {
  render(){
    return (
      <div>
        <p>{this.props.capital}</p>
      </div>
    )
  }
}

// proptype for validation it's an array
Capital.propTypes = {
  capital: PropTypes.array
};

export default Capital