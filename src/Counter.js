import React from 'react';
import { formatPercentage } from './helper';

const percentage = (correct, total) => {
  if (!total) return formatPercentage(0);

  return formatPercentage(correct / total);
};

const Counter = ({ correct, total }) => (
  <h1>{correct} / {total} - {percentage(correct, total)}</h1>
);

export default Counter;
