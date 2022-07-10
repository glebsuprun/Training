import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Filter } from './components/Filter';
import { Form } from './components/Form';
import { Numbers } from './components/Numbers';

export default function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchPerson, setSearchPerson] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, []);
  

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };
    
    if(persons.every(person => person.name !== personObject.name)){
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${personObject.name} is already added to phonebook`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  
  const handleSearchPersonChange = (event) => {
    setSearchPerson(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchPersonChange={handleSearchPersonChange} />
      <Form addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Numbers persons={persons} searchPerson={searchPerson} />
    </div>
  );
};