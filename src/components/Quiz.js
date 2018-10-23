import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Timer from './Timer';
import Counter from './Counter';
import storage from '../storage';
import Progress from './Progress';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: '',
      correctAnswer: '',
      checking: false,
      total: 0,
      correct: 0,
      timer: 180,
      timesUp: false,
      options: {}
    };

    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.generateQuestion());
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    let { timer } = this.state;

    if (timer <= 0) {
      clearInterval(this.interval);
      this.stop();
    } else {
      this.setState({ timer: --timer });
    }
  }

  reset() {
    this.setState(Object.assign({}, this.props.generateQuestion(), {
      total: 0,
      correct: 0,
      timesUp: false,
      checking: false,
      answer: '',
      timer: 60
    }));

    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  stop() {
    const { correct, total } = this.state;
    storage.setItem(this.props.topic, correct / total);

    this.setState({ timesUp: true });
  }

  selectOption(evt) {
    this.setState({ answer: evt.target.value });
  }

  checkAnswer(evt) {
    evt.preventDefault();
    let { correct, answer, correctAnswer } = this.state;

    this.setState({ checking: !this.state.checking }, () => {
      if (this.state.checking) {
        this.setState({ total: ++this.state.total });

        if (answer === correctAnswer) {
          this.setState({ correct: ++correct });
        }
      } else {
        this.setState(Object.assign({}, this.props.generateQuestion(), {answer: ''}));
      }
    });
  }

  render() {
    const { options, correct, total, answer, timer, timesUp, question, checking, correctAnswer } = this.state;

    return <form onSubmit={this.checkAnswer}>
      <div className="header">
        <Link to="/" className="back">&laquo;</Link>

        <Counter correct={correct} total={total} />

        <Timer timer={timer} />
      </div>

      <h2>{question}</h2>

      <div className="options">
        {Object.keys(options).map((option, i) => {
          let classname = '';

          if (checking) {
            if (answer !== correctAnswer && answer === option) {
              classname = 'wrong';
            }

            if (correctAnswer === option) {
              classname = 'correct';
            }
          }

          return <label key={i} className={classname}>
            <input type="radio"
              value={option}
              disabled={timesUp || checking}
              checked={answer === option}
              onChange={this.selectOption} />
            {options[option]}
            <div className="check"></div>
          </label>
        })}
      </div>

      <button
        type="submit"
        disabled={!answer || timesUp}
      >{checking ? 'Next': 'Check'}</button>

      {timesUp && <Progress topic={this.props.topic} handleRepeat={this.reset} />}
    </form>;
  }
}

Quiz.propTypes = {
  topic: PropTypes.string.isRequired,
  generateQuestion: PropTypes.func.isRequired
};

export default Quiz;
