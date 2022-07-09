import React, { useState } from 'react';

import { Button } from './components/Button';
import { Statistics } from './components/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleGoodClick() {
    return setGood(good + 1);
  }

  function handleNeutralClick() {
    return setNeutral(neutral + 1);
  }

  function handleBadClick() {
    return setBad(bad + 1);
  }

  return (
   <>
      <h2>give feedback</h2>
      <Button name="good" handleClick={handleGoodClick}/>
      <Button name="neutral" handleClick={handleNeutralClick}/>
      <Button name="bad" handleClick={handleBadClick}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
   </>
  );
};
