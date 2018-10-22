import React from 'react';
import Quiz from './Quiz';
import { random, shuffle } from '../helper';
import ARTICLES from '../data/articles';

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
      options: shuffle(options),
      correctAnswer: article.article,
      question: `${article.type} article, ${article.selectedCase}, ${article.gender}`
    };
  }

  getRandomArticle() {
    const type = random(Object.keys(ARTICLES));
    const selectedCase = random(Object.keys(ARTICLES[type]));
    const gender = random(Object.keys(ARTICLES[type][selectedCase]));

    return {
      type,
      gender,
      selectedCase,
      answer: '',
      article: ARTICLES[type][selectedCase][gender]
    };
  }

  render() {
    return <Quiz topic="articles" generateQuestion={this.randomArticle} />;
  }
}

export default ArticlesQuiz;
