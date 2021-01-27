import React, { useState, useEffect } from "react";
import "../styles/personajes.css";
import Cardepisodios from "../components/cardepisodios";

const Episodios = () => {
  const [episodies, setEpisodies] = useState();
  let url = "https://rickandmortyapi.com/api/episode";

  const GetEpisodios = async () => {
    let response = await fetch(url);
    const data = await response.json();
    setEpisodies(data);
  };

  useEffect(() => {
    GetEpisodios();
  }, []);

  return (
    <div>
      <div className="header">
        <h3 className="text-center center">Episodios</h3>
        <h6 className="text-center">Algunos episodios</h6>
      </div>
      <div className="container">
        <div className="row">
          {episodies &&
            episodies.results.map((e) => (
              <Cardepisodios
                img={
                  "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/10/rick-morty-serie-tv-cartel.jpg?itok=jCAfMn7j"
                }
                name={e.name}
                key={e.id}
                date={e.air_date}
                episodio={e.episode}
              />
            ))}
        </div>
      </div>
      <button>2</button>
    </div>
  );
};

export default Episodios;
