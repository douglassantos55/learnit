import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  render() {
    return <h1>{this.props.timer}</h1>;
  }
}

Timer.propTypes = {
  timer: PropTypes.number
};

export default Timer;
