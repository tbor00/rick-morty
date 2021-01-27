import React from "react";
import Home from "./pages/home.js";
import Navbar from "./components/navbar";
import Personajes from "./pages/personajes";
import Episodios from "./pages/episodios";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/personajes" component={Personajes} />
        <Route exact path="/episodios" component={Episodios} />
      </Switch>
    </Router>
  );
}

export default App;
