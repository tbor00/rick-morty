import React from "react";
import "../styles/cardpersonajes.css";

class Cardpersonajes extends React.Component {
  render() {
    return (
      <div className="col-xl-4 col-md-6 col-lg-4 col-sm-12">
        <div className="card">
          <img src={this.props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text text-black">
              <span className="block">Nombre: {this.props.name}</span>
              <br />
              <span className="block">Especie: {this.props.especie}</span>
              <br />
              <span className="block">Status: {this.props.status}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardpersonajes;
