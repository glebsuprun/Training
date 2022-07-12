import React from "react";

export const Persons = ({ personsFilter, deletePerson }) => {
  return personsFilter.map((person) => (
    <p key={person.id}>
      {person.name} <span>{person.number}</span>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => deletePerson(person)}
      >
        delete
      </button>
    </p>
  ));
};
