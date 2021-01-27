import React from "react";
import "../styles/infohome.css";

const Infohome = () => {
  return (
    <React.Fragment>
      <div className="mainter">
        <h2 className="text-left center">Bienvenido a Rick Tok</h2>
        <h6 className="text-left">Todo sobre Rick & Morty</h6>
      </div>
      <div className="container mt-5">
        <h4 className="text-center">¡Informate sobre tu serie preferida!</h4>
        <p className="text-center">
          Este es una aplicación para buscar información
        </p>
      </div>
    </React.Fragment>
  );
};

export default Infohome;
