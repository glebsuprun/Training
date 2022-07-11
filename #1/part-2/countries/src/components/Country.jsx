import React from "react";

export const Country = ({ data: { name, capital, area, flags, languages } }) => {

  return (
    <>
      <h1>{name.official}</h1>
      <p>capital {capital}</p>
      <p>area {area}</p>

      <h3>languages</h3>
      <ul>
        {Object.keys(languages).map((key) => (
          <li key={key}>{languages[key]}</li>
        ))}
      </ul>

      <img src={flags["png"]} alt="flag" />
    </>
  );
};