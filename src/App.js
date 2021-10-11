import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useContext } from "react";
import Basket from "./Basket/Basket";
import AppContext from "./appContext";
function App() {
  const { Cart, setCart } = useState([]);
  const onAddToCart = (item) => {
    var newCart = Cart.concat(Cart);
    setCart = newCart;
  };
  const onRemoveItemFromCart = (item) => {
    var newCart = Cart.filter((element) => {
      return element != item;
    });
    setCart(newCart);
  };
  return (
    <AppContext.Provider value={{ Cart, onRemoveItemFromCart, onAddToCart }}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Basket" component={Basket} />
      </Router>
    </AppContext.Provider>
  );
}
export default App;
