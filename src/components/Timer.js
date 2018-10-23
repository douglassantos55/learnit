import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  render() {
    let className = 'timer';
    const seconds = this.props.timer;
    if (!this.total) this.total = seconds;

    if (seconds < (this.total * 0.1)) {
      className += ' danger';
    } else if (seconds < (this.total * 0.5)) {
      className += ' alert';
    }

    return <div className={className}>
      <span className="seconds">{this.props.timer}</span>
      seconds
    </div>;
  }
}

Timer.propTypes = {
  timer: PropTypes.number
};

export default Timer;
