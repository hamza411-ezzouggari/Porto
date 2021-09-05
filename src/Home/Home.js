import React from "react";
import "./Home.css";
import logo from "./image Navbar/logo_ecomblack_lg.png";
import loope from "./image Navbar/loupe.png";
import user from "./image Navbar/user.png";
import shopping from "./image Navbar/shopping-bag.png";
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
            <div className="element-left">
              <li>
                <img src={loope} className="img-loope" alt="images" />
              </li>
              <li>
                <img src={user} className="img-user" alt="images" />
              </li>
              <li>
                <img src={shopping} className="img-user" alt="images" />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Home;
