import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";
import Basket from "./Basket";
import AppContext from "./appContext";

function App() {
  const [Cart, setCart] = useState([]);
  const AddToCart = (items) => {
    Cart = setCart.emp(items);
  };

  return (
    <AppContext.Provider value={{ Cart, AddToCart }}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Basket" component={Basket} />
      </Router>
    </AppContext.Provider>
  );
}
export default App;
