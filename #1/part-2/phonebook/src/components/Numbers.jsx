import React from 'react';

import { Person } from './Person';

export const Numbers = ({persons, searchPerson}) => {
  const filteredPersons = persons.filter(person => person.name.toLowerCase().substring(0, searchPerson.length) === searchPerson.toLowerCase());

  return (
    <>
      <h2>Numbers</h2>
      <div>
        {
          searchPerson === '' 
            ? <Person persons={persons} />
            : <Person persons={filteredPersons} />
        }
      </div>
    </>
  );
};
