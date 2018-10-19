import React from 'react';
import Quiz from './Quiz';
import PREPOSITIONS from './data/prepositions';

const OPTIONS = {
  'accusative': 'Accusative',
  'dative': 'Dative',
  'genitive': 'Genitive',
  'twoWay': 'Two-way'
};

class PrepositionsQuiz extends React.Component {
  generateQuestion() {
    const cases = Object.keys(PREPOSITIONS);
    const correctAnswer = cases[Math.floor(Math.random() * cases.length)];

    const prepositions = PREPOSITIONS[correctAnswer];
    const preposition = prepositions[Math.floor(Math.random() * prepositions.length)];

    return {question: preposition, correctAnswer, options: OPTIONS};
  }

  render() {
    return <Quiz topic="prepositions" generateQuestion={this.generateQuestion} />;
  }
}

export default PrepositionsQuiz;
