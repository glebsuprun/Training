import React from 'react'

import { Content } from './components/Content';
import { Header } from './components/Header'
import { Total } from './components/Total';

export default function App() {
  const COURSE = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const TOTAL = COURSE.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <>
      <Header course={COURSE.name} />
      <Content parts={COURSE.parts} />
      <Total exercises={TOTAL} />
    </>
  );
}
