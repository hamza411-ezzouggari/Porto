import React, { Component } from "react";
import "./Home.css";
import logo from "./image Navbar/logo_ecomblack_lg.png";
import loope from "./image Navbar/loupe.png";
import user from "./image Navbar/user.png";
import shopping from "./image Navbar/shopping-bag.png";
import shop1 from "./image Navbar/shop1_megamenu.jpg";
import banner from "./image Navbar/menu-banner.jpg";
import AutoplaySlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css";
import shop3 from "./shop3_banner1.jpg";
import chop4 from "./shop3_banner2.jpg";
class Home extends React.Component {
  render() {
    const Slider = (
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        cssModule={AwesomeSliderStyles}
      >
        <div data-src="/path/to/image-0.jpg" />
        <div data-src="/path/to/image-1.jpg" />
      </AutoplaySlider>
    );
    return (
      <div className="content-hoome">
        <div className="Navbar-general">
          <nav className="nav">
            <ul className="menu-bar">
              <div className="logo-navbar">
                <img src={logo} className="img-logo" alt="images" />
              </div>
              <li className="HOME">HOME</li>
              <li className="CATEGORIES">
                CATEGORIES
                <div class="dropdown__arrow"></div>
                <div className="menu-sub1">
                  <ul className="menu-sub">
                    <div className="content-menu">
                      <div className="product-left">
                        <h4 className="title-product">VARIATION 1</h4>
                        <li className="li-1">
                          <a href="#">FULLWIDTH BANNER</a>
                        </li>
                        <li className="li-1">
                          <a href="#">BOXED IMAGE BANNER</a>
                        </li>
                        <li className="li-1">
                          <a href="#">BOXED SLIDER BANNER</a>
                        </li>
                        <li className="li-1">
                          <a href="#">LEFT SIDEBAR</a>
                        </li>
                        <li className="li-1">
                          <a href="#">RIGHT SIDEBAR</a>
                        </li>
                        <li className="li-1">
                          <a href="#">PRODUCT FLEX GRID</a>
                        </li>
                        <li className="li-1">
                          <a href="#">PRODUCT LIST ITEM TYPES</a>
                        </li>
                      </div>
                      <div className="product-right">
                        <h4 className="title-product">VARIATIONS 2</h4>
                        <li className="li-1">
                          <a href="#">AJAX INFINITE SCROLL</a>
                          <span className="cat-label">
                            <a>* New *</a>
                          </span>
                        </li>
                        <li className="li-1">
                          <a href="#">3 COLUMNS PRODUCTS</a>
                        </li>
                        <li className="li-1">
                          <a href="#">4 COLUMNS PRODUCTS</a>
                        </li>
                        <li className="li-1">
                          <a href="#">5 COLUMNS PRODUCTS</a>
                        </li>
                        <li className="li-1">
                          <a href="#">6 COLUMNS PRODUCTS</a>
                        </li>
                        <li className="li-1">
                          <a href="#">7 COLUMNS PRODUCTS</a>
                        </li>
                        <li className="li-1">
                          <a href="#">8 COLUMNS PRODUCTS</a>
                        </li>
                      </div>
                      <div className="image-banner">
                        <img
                          src={banner}
                          className="shop1-banner"
                          alt="images"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              <li className="nav">
                PRODUCTS
                <div class="dropdown__arrow"></div>
                <div className="menu-sub1">
                  <ul className="menu-sub">
                    <div className="content-menu">
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
                      <div className="product-right">
                        <h4 className="title-product">PRODUCT LAYOUT</h4>
                        <li className="li-1">
                          <a href="#">DEFAULT LAYOUT</a>
                        </li>
                        <li className="li-1">
                          <a href="#">EXTENDED LAYOUT</a>
                          <span className="cat-label">
                            <a>* New *</a>
                          </span>
                        </li>
                        <li className="li-1">
                          <a href="#">FULL WIDTH LAYOUT</a>
                          <span className="cat-label">
                            <a>* New *</a>
                          </span>
                        </li>
                        <li className="li-1">
                          <a href="#">GRID IMAGED LAYOUT</a>
                          <span className="cat-label">
                            <a>* New *</a>
                          </span>
                        </li>
                        <li className="li-1">
                          <a href="#">STICKY RIGHT SIDE INFO</a>
                          <span className="cat-label">
                            <a>* New *</a>
                          </span>
                        </li>
                        <li className="li-1">
                          <a href="#">VERTICAL LAYOUT</a>
                          <span className="cat-label">
                            <a>* New *</a>
                          </span>
                        </li>
                        <li className="li-1">
                          <a href="#">WITH SIDEBAR</a>
                        </li>
                        <li className="li-1">
                          <a href="#">WITHOUT SIDEBAR</a>
                        </li>
                      </div>
                      <div className="image-product">
                        <img
                          src={shop1}
                          className="shop1-designe"
                          alt="images"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              <li>
                PAGES <div class="dropdown__arrow"></div>
                <div className="menu-sub1">
                  <ul className="menu-sub">
                    <div className="content-menu">
                      <div className="product-left">
                        <li className="li-2">
                          <a href="#">ABOUT US</a>
                        </li>
                        <li className="li-2">
                          <a href="#">CONTACT US</a>
                        </li>
                        <li className="li-2">
                          <a href="#">BLOG</a>
                        </li>
                        <li className="li-2">
                          <a href="#">POST</a>
                        </li>
                        <li className="li-2">
                          <a href="#">SHOPPING CART</a>
                        </li>
                        <li className="li-2">
                          <a href="#">CHECKOUT</a>
                        </li>
                        <li className="li-2">
                          <a href="#">MY ACCOUNT</a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              <li>
                FEATURES <div class="dropdown__arrow"></div>
                <div className="menu-sub1">
                  <ul className="menu-sub">
                    <div className="content-menu">
                      <div className="product-left">
                        <li className="li-2">
                          <a href="#">HEADER TYPES</a>
                        </li>
                        <li className="li-2">
                          <a href="#">FOOTER TYPES</a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
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
        <div className="AutoplaySlider-main">
          <AutoplaySlider
            className="AutoplaySlider-secend"
            play={true}
            cancelOnInteraction={true}
            interval={1000}
            bullets={false}
            organicArrows={true}
          >
            <div className="chop3">
              <img src={shop3} alt="images" className="img5" />
              <div className="porto-ibanner-layer">
                <h2>Winter Fashion Trends</h2>
                <h3>get up to 30% off</h3>
                <h4>on Jackets</h4>
                <h5>Starting at</h5>
                <h6>
                  <sup>$</sup>
                  199
                  <sup>99</sup>
                </h6>
                <div className="btn-container">
                  <button className="btn-dark">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="porto-ibanner-layer-2" data-src={chop4} id="img5">
              <div className="porto-ibanner-layer-2">
                <h2>New Season Hats</h2>
                <h3>
                  <small>UP TO</small>
                  20% OFF
                </h3>
                <div className="divider-small-align-left">
                  <hr />
                </div>
                <h5>
                  <font className="vertical-align">Starting AT $</font>
                  <em>
                    <font>19</font>
                  </em>
                  <font>99</font>
                </h5>
              </div>
            </div>
          </AutoplaySlider>
        </div>
      </div>
    );
  }
}
export default Home;
