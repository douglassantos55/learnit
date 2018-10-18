import React from 'react';
import { Link } from 'react-router-dom';

const PREPOSITIONS = {
  accusative: ['um', 'bis', 'für', 'ohne', 'gegen', 'wider', 'durch', 'entlang'],
  dative: ['ab', 'zu', 'bei', 'mit', 'aus', 'außer', 'seit', 'von', 'nach', 'gegenüber'],
  genitive: ['trotz', 'unweit', 'wegen', 'während', 'diesseits', 'jenseits', 'innerhalb', 'außerhalb', 'statt', 'anstatt'],
  twoWay: ['in', 'an', 'auf', 'über', 'unter', 'hinter', 'zwischen', 'vor', 'neben']
};

const OPTIONS = {
  'accusative': 'Accusative',
  'dative': 'Dative',
  'genitive': 'Genitive',
  'twoWay': 'Two-way'
};

class PrepositionsQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      preposition: '',
      answer: '',
      correctAnswer: '',
      checking: false,
      total: 0,
      right: 0,
      timer: 60,
      timesup: false
    };

    this.selectOption = this.selectOption.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  selectOption(evt) {
    this.setState({ answer: evt.target.value });
  }

  randomPreposition() {
    const cases = Object.keys(PREPOSITIONS);
    const correctAnswer = cases[Math.floor(Math.random() * cases.length)];

    const prepositions = PREPOSITIONS[correctAnswer];
    const preposition = prepositions[Math.floor(Math.random() * prepositions.length)];

    this.setState({ preposition, correctAnswer, answer: '', total: this.state.total + 1 });
  }

  componentDidMount() {
    this.randomPreposition();
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    let { timer } = this.state;

    if (timer <= 0) {
      this.setState({ timesup: true }); 
      clearInterval(this.interval);
    } else {
      this.setState({ timer: --timer });
    }
  }

  checkAnswer(evt) {
    evt.preventDefault();
    let { right, answer, correctAnswer } = this.state;

    this.setState({ checking: !this.state.checking }, () => {
      if (this.state.checking && answer === correctAnswer) 
        this.setState({ right: ++right });
      if (!this.state.checking) this.randomPreposition();
    });
  }

  render() {
    const { right, total, answer, timer, timesup, preposition, checking, correctAnswer } = this.state;

    return <form onSubmit={this.checkAnswer}>
      <Link to="/">&lt;-</Link>

      <h1>{right} / {total} - {timer}</h1>
      
      <h2>{preposition}</h2>

      <div className="options">
        {Object.keys(OPTIONS).map(option => { 
          let classname = '';

          if (checking) {
            if (answer !== correctAnswer && answer === option) {
              classname = 'wrong';
            }

            if (correctAnswer === option) {
              classname = 'correct';
            }
          }

          return <label key={option} className={classname}>
            <input type="radio" name="anwser" 
              value={option} 
              disabled={timesup}
              checked={answer === option}
              onChange={this.selectOption} />
            {OPTIONS[option]}
          </label>
        })}
      </div>

      <button 
        type="submit"
        disabled={!answer || timesup}>{checking ? 'Next': 'Check'}</button>
    </form>;
  }
}

export default PrepositionsQuiz;
