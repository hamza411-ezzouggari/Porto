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
            <li className="HOME">HOME</li>
            <li>
              CATEGORIES <div class="dropdown__arrow"></div>
            </li>
            <li className="nav">
              PRODUCTS
              <div class="dropdown__arrow"></div>
              <div className="menu-sub1">
                <ul className="menu-sub">
                  <div className="product-left">
                    <h4 className="title-product">PRODUCT PAGES</h4>
                    <li className="li-1">
                      <a href="#">SIMPLE PRODUCT</a>
                    </li>
                    <li className="li-1">
                      <a href="#">CONFIGURABLE PRODUCT</a>
                    </li>
                    <li className="li-1">
                      <a href="#">BUNDLE PRODUCT</a>
                    </li>
                    <li className="li-1">
                      <a href="#">GROUPED PRODUCT</a>
                    </li>
                    <li className="li-1">
                      <a href="#">DOWNLOADABLE PRODUCT</a>
                    </li>
                    <li className="li-1">
                      <a href="#">ADDTOCART STICKY</a>
                    </li>
                    <li className="li-1">
                      <a href="#">VERTICAL TABS</a>
                    </li>
                    <li className="li-1">
                      <a href="#">ACCORDION TABS</a>
                    </li>
                    <li className="li-1">
                      <a href="#">STICKY TABS</a>
                    </li>
                  </div>
                  <div className="product-right"></div>
                </ul>
              </div>
            </li>
            <li>
              PAGES <div class="dropdown__arrow"></div>
            </li>
            <li>
              FEATURES <div class="dropdown__arrow"></div>
            </li>
            <li className="BLOG">BLOG</li>
            <li className="BUY">BUY PORTO !</li>
            <div className="element-left">
              <li className="img-loope">
                <img src={loope} alt="images" />
              </li>
              <li className="img-user">
                <img src={user} alt="images" />
              </li>
              <li className="img-user">
                <img src={shopping} alt="images" />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Home;
