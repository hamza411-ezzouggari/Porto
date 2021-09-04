import React from "react";
import "./Home.css";
import logo from "./image Navbar/logo_ecomblack_lg.png";
const Home = () => {
  return (
    <div className="content-hoome">
      <div className="Navbar-general">
        <div className="logo-navbar">
          <img src={logo} className="img-logo" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Home;
