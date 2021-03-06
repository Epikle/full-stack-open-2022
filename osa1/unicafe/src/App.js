import { useState } from 'react';

import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const results = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  const goodHandler = () => {
    setGood(good + 1);
  };
  const neutralHandler = () => {
    setNeutral(neutral + 1);
  };
  const badHandler = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={goodHandler} text="good" />
      <Button handleClick={neutralHandler} text="neutral" />
      <Button handleClick={badHandler} text="bad" />
      <h2>statistics</h2>
      <Statistics stats={results} />
    </div>
  );
};

export default App;
