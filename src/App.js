import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Basket from "./Basket";
import { basketProvider } from "./Home/Home";
function App() {
  return (
    <basketProvider>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Basket" component={Basket} />
      </Router>
    </basketProvider>
  );
}
export default App;
