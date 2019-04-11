import React from 'react';
import Quiz from './Quiz';
import { random } from '../helper';
import PREPOSITIONS from '../data/prepositions';

const OPTIONS = {
  'accusative': 'Accusative',
  'dative': 'Dative',
  'genitive': 'Genitive',
  'twoWay': 'Two-way'
};

class PrepositionsQuiz extends React.Component {
  generateQuestion() {
    const correctAnswer = random(Object.keys(PREPOSITIONS));
    const preposition = random(PREPOSITIONS[correctAnswer]);

    return {question: preposition, correctAnswer, options: OPTIONS};
  }

  render() {
    return <Quiz topic="prepositions" generateQuestion={this.generateQuestion} />;
  }
}

export default PrepositionsQuiz;
