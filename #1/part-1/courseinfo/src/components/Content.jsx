import React from 'react'

import { Part } from './Part';

export const Content = ({ parts }) => {
  return (
    parts.map((part, i) => (
      <Part key={i} part={part.name} exercises={part.exercises} />
    ))
  );
};
