import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  render() {
    let className = 'timer';
    const seconds = this.props.timer;
    const total = this.props.total;

    if (seconds < (total * 0.1)) {
      className += ' danger';
    } else if (seconds < (total * 0.5)) {
      className += ' alert';
    }

    return <div className={className}>
      <span className="seconds">{this.props.timer}</span>
      seconds

      <div>
        <button type="button" onClick={this.props.changeTimer}>Change timer</button>
      </div>
    </div>;
  }
}

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  changeTimer: PropTypes.func.isRequired
};

export default Timer;
