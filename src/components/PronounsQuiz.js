import React from 'react';
import Quiz from './Quiz';
import PRONOUNS from '../data/pronouns';
import { random, shuffle } from '../helper';

const RELATIVE_OPTIONS = {
  der: 'Der',
  die: 'Die',
  das: 'Das',
  den: 'Den',
  dem: 'Dem',
  denen: 'Denen',
  dessen: 'Dessen',
  deren: 'Deren'
};

const POSSESSIVE_OPTIONS = {
  mein: 'Mein',
  dein: 'Dein',
  'sein, ihr': 'Sein, ihr',
  unser: 'Unser',
  euer: 'Euer',
  ihr: 'Ihr'
};

class PronounsQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.randomizePronoun = this.randomizePronoun.bind(this);
  }

  randomizePronoun() {
    const type = random(Object.keys(PRONOUNS));

    if (type === 'possessive') {
      return this.randomPossessivePronoun();
    } else if (type === 'relative') {
      return this.randomRelativePronoun();
    }

    return this.randomPersonalPronoun();
  }

  randomPossessivePronoun() {
    const pronouns = PRONOUNS['possessive'];
    const quantifier = random(Object.keys(pronouns));
    const person = random(Object.keys(pronouns[quantifier]));

    return {
      question: `Possessive, ${person}º person, ${quantifier}:`,
      correctAnswer: pronouns[quantifier][person].toLowerCase(),
      options: POSSESSIVE_OPTIONS
    };
  }

  randomRelativePronoun() {
    const pronouns = PRONOUNS['relative'];
    const randomCase = random(Object.keys(pronouns));
    const gender = random(Object.keys(pronouns[randomCase]));

    return {
      options: RELATIVE_OPTIONS,
      correctAnswer: pronouns[randomCase][gender],
      question: `Relative pronoun, ${randomCase}, ${gender}:`
    };
  }

  randomPersonalPronoun() {
    const pronoun = this.getRandomPersonalPronoun();
    const options = this.generateOptions(pronoun.pronoun);

    return {
      options: options,
      correctAnswer: pronoun.pronoun,
      question: `Personal, ${pronoun.randomCase}, ${pronoun.person}º person, ${pronoun.quantifier}:`,
    };
  }

  getRandomPersonalPronoun() {
    const pronouns = PRONOUNS['personal'];
    const randomCase = random(Object.keys(pronouns));
    const quantifier = random(Object.keys(pronouns[randomCase]));
    const person = random(Object.keys(pronouns[randomCase][quantifier]));

    return {
      person,
      quantifier,
      randomCase,
      pronoun: pronouns[randomCase][quantifier][person]
    };
  }

  generateOptions(correctOption) {
    const options = [ correctOption ];

    for (let i = 0; i <= 5; i++) {
      const option = this.getRandomPersonalPronoun();

      if (!options.includes(option.pronoun)) {
        options.push(option.pronoun);
      }
    }

    return shuffle(options);
  }

  render() {
    return <Quiz topic="pronouns" generateQuestion={this.randomizePronoun} />
  }
}

export default PronounsQuiz;
