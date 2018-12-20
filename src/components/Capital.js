import React, { Component} from 'react';
import PropTypes from 'prop-types';

import Char from './Char';


class Capital extends Component {
  render(){
    return (
      <ul className="char-grid">
      {
        this.props.capital && this.props.capital.map((char, key) => <Char char={char} key={key} />)
      }
    </ul> 

    )
  }
}

// proptype for validation it's an array
Capital.propTypes = {
  capital: PropTypes.array
};

export default Capital