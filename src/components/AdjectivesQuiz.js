import React from 'react';
import Quiz from './Quiz';
import { random } from '../helper';
import ADJECTIVES from '../data/adjectives';

const OPTIONS = {
  er: 'er',
  e: 'e',
  es: 'es',
  en: 'en',
  em: 'em',
  er: 'er'
};

class AdjectivesQuiz extends React.Component {
  randomizeAdjective() {
    const declension = random(Object.keys(ADJECTIVES));
    const selectedCase = random(Object.keys(ADJECTIVES[declension]));
    const gender = random(Object.keys(ADJECTIVES[declension][selectedCase]));

    return {
      options: OPTIONS,
      correctAnswer: ADJECTIVES[declension][selectedCase][gender],
      question: `${declension} inflection, ${selectedCase}, ${gender}`
    };
  }

  render() {
    return <Quiz generateQuestion={this.randomizeAdjective} topic="adjectives" />
  }
}

export default AdjectivesQuiz;
