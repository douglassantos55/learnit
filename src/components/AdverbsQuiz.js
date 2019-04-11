import React from 'react';
import Quiz from './Quiz';
import ADVERBS from '../data/adverbs';
import { random, shuffle } from '../helper';

class AdverbsQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.randomizeAdverb = this.randomizeAdverb.bind(this);
  }

  randomizeAdverb() {
    const adverb = this.getRandomAdverb();
    let options = [ adverb.translation ];

    for (let i = 0; i <= 4; i++) {
      const option = this.getRandomAdverb();

      if (!options.includes(option.translation)) {
        options.push(option.translation);
      }
    }

    return {
      question: `What does ${adverb.adverb} mean?`,
      correctAnswer: adverb.translation,
      options: shuffle(options)
    };
  }

  getRandomAdverb() {
    const adverb = random(Object.keys(ADVERBS));

    return {
      adverb,
      translation: ADVERBS[adverb]
    };
  }

  render() {
    return <Quiz topic="adverbs" generateQuestion={this.randomizeAdverb} />
  }
}

export default AdverbsQuiz;
