import TopicsPage from './TopicsPage';
import PrepositionsQuiz from './PrepositionsQuiz';
import ArticlesQuiz from './ArticlesQuiz';

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
  }
];

export default routes;
