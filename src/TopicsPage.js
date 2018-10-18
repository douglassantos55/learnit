import React from 'react';
import { Link } from 'react-router-dom';

const TOPICS = { 
  prepositions: 'Prepositions',
  articles: 'Articles',
  adjectives: 'Adjectives'
};

const TopicsPage = () => (
  <div>
    <h1>Topics</h1>

    {Object.keys(TOPICS).map(
      topic => <li key={topic}>
        <Link to={`/${topic}`}>{TOPICS[topic]}</Link>
      </li>
    )}
  </div>
);

export default TopicsPage;
