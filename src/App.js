import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";
import Basket from "./Basket/Basket";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/Basket" component={Basket} />
    </Router>
  );
}
export default App;
