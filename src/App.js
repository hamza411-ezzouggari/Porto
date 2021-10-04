import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Basket from "./basket/Basket";
class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.setState({ books: nextProps.books });
  }
  state = {
    AddProduct: [],
  };
  onAdd = (productbasket) => {
    var { AddProduct } = this.state;
    var NewProduct = AddProduct.map((r) => {
      return r;
    });
    NewProduct.push(AddProduct);
    this.setState({ AddProduct: NewProduct });
  };
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route
          path="/Basket"
          exact
          component={Basket}
          onAdd={this.onAdd}
          AddProduct={this.state.AddProduct}
        />
      </Router>
    );
  }
}
export default App;
