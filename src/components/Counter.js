import React from 'react';
import { formatPercentage } from '../helper';

const percentage = (correct, total) => {
  if (!total) return formatPercentage(0);

  return formatPercentage(correct / total);
};

const Counter = ({ correct, total }) => (
  <div className="counter">
    <span className="percentage">{percentage(correct, total)}</span>
    {correct} / {total}
  </div>
);

export default Counter;
