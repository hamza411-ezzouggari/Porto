import React from "react";
import "./Home.css";
import logo from "./image Navbar/logo_ecomblack_lg.png";
const Home = () => {
  return (
    <div className="content-hoome">
      <div className="Navbar-general">
        <nav className="nav">
          <ul className="menu-bar">
            <div className="logo-navbar">
              <img src={logo} className="img-logo" alt="images" />
            </div>
            <li>HOME</li>
            <li>CATEGORIES</li>
            <li>PRODUCTS</li>
            <li>PAGES</li>
            <li>FEATURES</li>
            <li>BLOG</li>
            <li>BUY PORTO!</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Home;
