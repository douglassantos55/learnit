import React from 'react';
import { Link } from 'react-router-dom';

const TOPICS = {
  prepositions: 'Prepositions',
  articles: 'Articles',
  adjectives: 'Adjectives',
  adverbs: 'Adverbs',
  pronouns: 'Pronouns'
};

const TopicsPage = () => (
  <div className="topics-wrapper">
    <h1>Which topic would you like to practice?</h1>

    <ul className="topics">
      {Object.keys(TOPICS).map(
        topic => <li key={topic}>
          <Link to={`/${topic}`}>{TOPICS[topic]}</Link>
        </li>
      )}
    </ul>
  </div>
);

export default TopicsPage;
