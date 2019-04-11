import TopicsPage from './components/TopicsPage';
import AdverbsQuiz from './components/AdverbsQuiz';
import ArticlesQuiz from './components/ArticlesQuiz';
import PronounsQuiz from './components/PronounsQuiz';
import AdjectivesQuiz from './components/AdjectivesQuiz';
import PrepositionsQuiz from './components/PrepositionsQuiz';

const routes = [
  {
    path: '/',
    component: TopicsPage,
    exact: true
  },
  {
    path: '/prepositions',
    component: PrepositionsQuiz
  },
  {
    path: '/articles',
    component: ArticlesQuiz
  },
  {
    path: '/adjectives',
    component: AdjectivesQuiz
  },
  {
    path: '/adverbs',
    component: AdverbsQuiz
  },
  {
    path: '/pronouns',
    component: PronounsQuiz
  }
];

export default routes;
