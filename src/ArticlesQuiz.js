import React from 'react';

const ARTICLES = {
  definite: {
    nominative: {
      masc: 'der',
      fem: 'die',
      neuter: 'das',
      plural: 'die'
    },
    accusative: {
      masc: 'den',
      fem: 'die',
      neuter: 'das',
      plural: 'die'
    },
    dative: {
      masc: 'dem',
      fem: 'der',
      neuter: 'dem',
      plural: 'den'
    },
    genitive: {
      masc: 'des',
      fem: 'der',
      neuter: 'des',
      plural: 'der'
    }
  },
  indefinite: {
    nominative: {
      masc: 'ein',
      fem: 'eine',
      neuter: 'ein'
    },
    accusative: {
      masc: 'einen',
      fem: 'eine',
      neuter: 'ein'
    },
    dative: {
      masc: 'einem',
      fem: 'einer',
      neuter: 'einem'
    },
    genitive: {
      masc: 'eines',
      fem: 'einer',
      neuter: 'eines'
    }
  }
};

class ArticlesQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      correctAnswer: '',
      answer: '',
      options: [],
      question: '',
      total: 0,
      correct: 0
    };

    this.selectOption = this.selectOption.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  componentDidMount() {
    this.randomArticle();
  }

  selectOption(evt) {
    this.setState({ answer: evt.target.value });
  }

  checkAnswer(evt) {
    evt.preventDefault();
    const { answer, correctAnswer } = this.state;

    if (answer === correctAnswer) {
      this.setState({ correct: ++this.state.correct });
    }

    this.randomArticle();
  }

  randomArticle() {
    const article = this.getRandomArticle(); 
    const options = [article.article];

    for (let i = 0; i <= 5; i++) {
      const option = this.getRandomArticle();
      if (option.article !== article.article && !options.includes(option.article)) 
        options.push(option.article);
    }

    this.setState({
      answer: '',
      total: ++this.state.total,
      options: this.shuffle(options),
      correctAnswer: article.article,
      question: `${article.type} article, ${article.selectedCase}, ${article.gender}`
    });
  }

  getRandomArticle() {
    const types = Object.keys(ARTICLES);
    const type = types[Math.floor(Math.random() * types.length)];

    const cases = Object.keys(ARTICLES[type]);
    const selectedCase = cases[Math.floor(Math.random() * cases.length)];

    const genders = Object.keys(ARTICLES[type][selectedCase]);
    const gender = genders[Math.floor(Math.random() * genders.length)];

    return {
      type,
      gender,
      selectedCase,
      answer: '',
      article: ARTICLES[type][selectedCase][gender]
    };
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    const { question, answer, options, correct, total } = this.state;

    return <form onSubmit={this.checkAnswer}>
      <h1>{correct} / {total}</h1>

      <h2>{question}</h2>

      <div className="options">
        {options.map((option, i) => <label key={i}>
          <input type="radio" value={option} checked={answer === option} onChange={this.selectOption} />
          {option}
        </label>)}
      </div>

      <button type="submit" disabled={!answer}>Check</button>
    </form>;
  }
}

export default ArticlesQuiz;
