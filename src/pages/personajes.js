import { useState, useEffect } from "react";
import React from "react";
import Cardpersonajes from "../components/cardpersonajes";
import "../styles/personajes.css";

//

const Personajes = () => {
  const [person, SetPerson] = useState();

  const Getdatos = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    SetPerson(data);
  };

  useEffect(() => {
    Getdatos();
  }, []);

  return (
    <div>
      <div className="personajes">
        <h3 className="text-center center">Personajes</h3>
        <h6 className="text-center">Algunos personajes</h6>
      </div>
      <div className="container">
        <div className="row">
          {person &&
            person.results.map((item, id) => (
              <Cardpersonajes
                key={id}
                img={item.image}
                name={item.name}
                especie={item.species}
                status={item.status}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Personajes;
