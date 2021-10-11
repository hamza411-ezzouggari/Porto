import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useContext } from "react";
import Basket from "./Basket/Basket";
import AppContext from "./appContext";

function App() {
  const [cart, setCart] = useState([]);

  const onAddToCart = (item) => {
    var newCart = cart.map((item) => item);
    newCart.push(item);
    setCart(newCart);
  };

  const onRemoveItemFromCart = (item) => {
    var newCart = cart.filter((element) => {
      return element != item;
    });
    setCart(newCart);
  };

  return (
    <AppContext.Provider value={{ cart, onRemoveItemFromCart, onAddToCart }}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Basket" component={Basket} />
      </Router>
    </AppContext.Provider>
  );
}
export default App;
