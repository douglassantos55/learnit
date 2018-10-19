import React from 'react';
import storage from './storage';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatPercentage } from './helper';

const Progress = ({ topic, handleRepeat }) => {
  const scores = storage.getByTopic(topic).slice(0, 4);
  const latestScore = scores.shift();
  console.log(scores);

  return <div className="progress">
    <h2>{formatPercentage(latestScore.percentage)}</h2>

    {scores.length > 0 && <div>
      <h4>Last results</h4>
      <div className="last-results">
        {scores.map((score, i) => <h3 key={i}>{formatPercentage(score.percentage)}</h3>)}
      </div>
    </div>}

    <div className="actions">
      <button type="button" onClick={handleRepeat}>Repeat</button>
      <Link to="/">Return to topics</Link>
    </div>
  </div>;
};

Progress.propTypes = {
  topic: PropTypes.string.isRequired,
  handleRepeat: PropTypes.func.isRequired
};

export default Progress;
