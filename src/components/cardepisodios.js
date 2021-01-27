import React from "react";
import "../styles/cardpersonajes.css";

class Cardepisodios extends React.Component {
  render() {
    return (
      <div className="col-xl-4 col-md-6 col-lg-4 col-sm-12">
        <div className="card">
          <img src={this.props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text text-black">
              <span className="block">Nombre: {this.props.name}</span>
              <br />
              <span className="block">Salió al aire: {this.props.date}</span>
              <br />
              <span className="block">Episodio: {this.props.episodio}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardepisodios;
