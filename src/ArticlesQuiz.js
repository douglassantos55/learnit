import React from 'react';
import ARTICLES from './data/articles';
import Quiz from './Quiz';

class ArticlesQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.randomArticle = this.randomArticle.bind(this);
  }

  randomArticle() {
    const article = this.getRandomArticle();
    const options = [article.article];

    for (let i = 0; i <= 5; i++) {
      const option = this.getRandomArticle();
      if (option !== article.article && !options.includes(option.article))
        options.push(option.article);
    }

    return {
      options: this.shuffle(options),
      correctAnswer: article.article,
      question: `${article.type} article, ${article.selectedCase}, ${article.gender}`
    };
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

    let options = {};
    array.forEach(option => options[option] = option);

    return options;
  }

  render() {
    return <Quiz topic="articles" generateQuestion={this.randomArticle} />;
  }
}

export default ArticlesQuiz;
