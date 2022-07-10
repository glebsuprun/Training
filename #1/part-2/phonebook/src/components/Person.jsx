import React from 'react';

export const Person = ({persons}) => {
  return (
    persons.map(person => <div key={person.id}>{person.name} {person.number}</div>)
  );
};
