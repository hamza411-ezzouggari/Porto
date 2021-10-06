import React, { useState } from "react";
import logo from "../Home/image Navbar/logo_ecomblack_lg.png";
import shop1 from "../Home/image Navbar/shop1_megamenu.jpg";
import banner from "../Home/image Navbar/menu-banner.jpg";
import loope from "../Home/image Navbar/loupe.png";
import user from "../Home/image Navbar/user.png";
import shopping from "../Home/image Navbar/shopping-bag.png";
import payment from "../Home/image Navbar/shop2_payment_logo.png";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import "./Basket.css";
import "../Home/Home.css";
function basket() {
  return (
    <div className="Basket">
      <div className="Navbar-general-2">
        <nav className="nav">
          <ul className="menu-bar">
            <div className="logo-navbar">
              <img src={logo} className="img-logo" alt="images" />
            </div>
            <li className="HOME">HOME</li>
            <li className="CATEGORIES">
              CATEGORIES
              <div className="dropdown__arrow"></div>
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
                      <img src={banner} className="shop1-banner" alt="images" />
                    </div>
                  </div>
                </ul>
              </div>
            </li>
            <li className="nav">
              PRODUCTS
              <div className="dropdown__arrow"></div>
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
                      <img src={shop1} className="shop1-designe" alt="images" />
                    </div>
                  </div>
                </ul>
              </div>
            </li>
            <li>
              PAGES <div className="dropdown__arrow"></div>
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
              FEATURES <div className="dropdown__arrow"></div>
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
                <span className="lengthofbasket">0</span>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <div className="section">
        <section></section>
      </div>
      <div className="fother-Section-principal-basket">
        <div className="porto-separator-taller-tow">
          <hr className="align_center-hr-basket" />
        </div>
        <div className="col-lg-12">
          <div className="widget_text">
            <div className="textwidget">
              <h5>Subscribe newsletter</h5>
              <p>Get all the latest information on Events, Sales and Offers.</p>
            </div>
            <div className="block-newsletter">
              <div className="add55">
                <input
                  className="input-add55"
                  name="email"
                  type="email"
                  id="footer_newsleter"
                  data-validate="{required:true,'validate-email':true}"
                  placeholder="Email Address"
                />
              </div>
              <div className="action34">
                <button
                  className="action34 subscribe primary"
                  title="Subscribe"
                  type="submit"
                >
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
          <div className="widget-follow-us">
            <div className="Share-liks">
              <a href="#" target="_blank" title="facebook">
                <ImFacebook className="share-facebook" />
              </a>
              <a href="#" target="_blank" title="twitter">
                <ImTwitter className="share-twitter" />
              </a>
              <a href="#" target="_blank" title="Instegram">
                <ImInstagram className="share-Instegram" />
              </a>
            </div>
          </div>
        </div>
        <div className="porto-separator-taller-tree">
          <hr className="align_center-hr" />
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="widgete__text">
                  <h3>CONTACT INFO</h3>
                </div>
                <div className="contact-info-block">
                  <ul className="contact-name-block">
                    <li className="far-fa-dot-circle">
                      <strong>ADDRESS :</strong>
                      <span> 123 Street name, City, England</span>
                    </li>
                    <li className="fab-fa-whatsapp">
                      <strong>PHONE :</strong>
                      <span> (123) 456-789 </span>
                    </li>
                    <li className="far-fa-envelope">
                      <strong>Email :</strong>
                      <span>
                        <a href="mailto:mail@example.com">mail@example.com</a>
                      </span>
                    </li>
                    <li className="far-fa-clock">
                      <strong>WORKING DAY/HOURS :</strong>
                      <span>Mon - Sun / 9:00 AM 8:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="widgete__text">
                  <h3>MY ACCOUNT</h3>
                </div>
                <div className="textwidget">
                  <div className="row-d-inline-flex">
                    <div className="colx-xl-6">
                      <ul>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">My Account</a>
                        </li>
                      </ul>
                    </div>
                    <div className="colx-xl-6">
                      <ul className="order-history">
                        <li>
                          <a href="#">Orders history</a>
                        </li>
                        <li>
                          <a href="#">advanced Search</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="widgete__text">
                  <h3>Main Features</h3>
                  <div className="textwidget_6">
                    <div className="row-d-inline-flex_7">
                      <div className="colx-xl-7">
                        <ul>
                          <li>
                            <a href="#">Super Fast WordPress Theme</a>
                          </li>
                          <li>
                            <a href="#">1st Fully working Ajaz Them</a>
                          </li>
                          <li>
                            <a href="#">36 unique Shop Layouts </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="colx-xl-7">
                      <ul className="order-history_7">
                        <li>
                          <a href="#">Powerful Admin Panel</a>
                        </li>
                        <li>
                          <a href="#">Mobile & Ratina Optimized</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="porto-separator-taller-foor">
          <hr className="align_center-hr" />
        </div>
        <div className="footer-middle">
          <div className="container-footer">
            <address>©Copyright 2021 by PORTO. All Rights Reserved.</address>
            <div className="custom-block-right">
              <img className="bottom-payment-icon" src={payment} alt="imges" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default basket;
