import React from "react";
import "../styles/home.css";
import Personajes from "./personajes.js";
import Infohome from "../components/infohome";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Infohome />
      </React.Fragment>
    );
  }
}

export default Home;
