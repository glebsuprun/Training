import React from 'react';
import { StatisticLine } from './StatisticLine';

export const Statistics = ({good, neutral, bad}) => {
  function numberOfReviews() {
    return good + neutral + bad;
  }

  function average() {
    return numberOfReviews() > 0 ? +(((good + -bad) / numberOfReviews()).toFixed(2)) : 0;
  }

  function percentageOfPositiveFeedback() {
    return good > 0 ? `${+((good / numberOfReviews() * 100).toFixed(2))}%` : 0;
  }

  if(numberOfReviews()) {
    return (
      <>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={numberOfReviews()} />
            <StatisticLine text="average" value={average()} />
            <StatisticLine text="positive" value={percentageOfPositiveFeedback()} />
          </tbody>
        </table>
      </>
    );
   } else {
    return (
      <p>No feedback given</p>
    )
   }
};
