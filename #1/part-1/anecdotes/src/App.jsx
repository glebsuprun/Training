import React, { useState } from 'react';

import { Button } from './components/Button';
import { Title } from './components/Title';

export default function App({anecdotes}) {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const addVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  const getRandomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const getBest = () => {
    let indexBest = 0;
    let max = 0;

    points.forEach((item, index) => {
      if (item > max) {
        max = item;
        indexBest = index;
      }
    });

    return indexBest;
  };

  return (
    <>
      <Title>Anecdote of the day</Title>
      <div>{anecdotes[selected]}</div>
      <p>has {points[selected]} votes</p>
      <Button text="vote" action={addVote} />
      <Button text="next anecdote" action={getRandomAnecdote} />

      <Title>Anecdote with most votes</Title>
      <div>{anecdotes[getBest()]}</div>
      <p>has {points[getBest()]} votes</p>
    </>
  );
}
