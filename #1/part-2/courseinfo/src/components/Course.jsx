import React from 'react';

import { Content } from './Content';
import { Header } from './Header';
import { Total } from './Total';

export const Course = ({course}) => {
  const TOTAL = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={TOTAL} />
    </>
  );
};
