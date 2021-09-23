import React, { useState, useEffect } from "react";
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
import right from "./right.png";
import product8 from "./image-product/product-20.jpg";
import headphone1 from "./image-product/headphone-1.jpg";
import headphone3 from "./image-product/headphone-3.jpg";
import product21 from "./image-product/product-21.jpg";
import product89 from "./image-product/product-89-2.jpg";
import shoes16 from "./image-product/shoes-16-2.jpg";
import menCap from "./image-product/product-31_6.jpeg";
import menShoes from "./image-product/shoes.jpeg";
import dron from "./image-product/dron.jpeg";
import product72 from "./image-product/product-79-2_1.jpeg";
import portofull from "./image-product/product-83-2.jpeg";
import skirt from "./image-product/product-18-2-grey.jpeg";
import jacket from "./image-product/product-9-grey_8.jpeg";
import time from "./image-product/product-21.jpg";
import headphoneicon from "./icon-premiem page/headphones.png";
import credit from "./icon-premiem page/credit-card.png";
import undo from "./icon-premiem page/undo.png";
import delevery from "./icon-premiem page/delivery-truck.png";
import payment from "./image Navbar/shop2_payment_logo.png";
import { BsBarChartFill } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import Modal from "react-modal";
import shoes00 from "./girl Shoes/shoes-16-2_9.jpeg";
import shoes000 from "./girl Shoes/shoes-16-2_9-1.jpeg";
import shoes11 from "./girl Shoes/shoes-2_1.jpeg";
import shoes111 from "./girl Shoes/shoes-2_1-2.jpeg";
import shoes12 from "./girl Shoes/shoes-13.jpeg";
import shoes122 from "./girl Shoes/shoes-13-1.jpeg";
import shoes13 from "./girl Shoes/shoes-8-2_1.jpeg";
import shoes133 from "./girl Shoes/shoes-8-2_1-1.jpeg";
import product205 from "./image glass/product-20_5.jpeg";
import product2055 from "./image glass/product-20_5-1.jpeg";
import product48 from "./image glass/product-48.jpeg";
import product488 from "./image glass/product-48-1.jpeg";
import product888 from "./image glass/product-48-2.jpeg";
import product8888 from "./image glass/product-48-2-1.jpeg";
import ideapad from "./img ideapad/ideapad-modal.jpeg";
import { BsX } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Home() {
  const [Navbar, setNav] = useState(false);
  const [Count, setCount] = useState(1);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [glassmodal, setGlassmodal] = React.useState(false);
  const [ideapadmodal, setIdeapadmodal] = React.useState(false);

  function openglassmodal(e) {
    e.preventDefault();
    setGlassmodal(true);
  }
  function closeglassmodal(e) {
    e.preventDefault();
    setGlassmodal(false);
  }

  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  function openIdeapadmodal(e) {
    e.preventDefault();
    setIdeapadmodal(true);
  }
  function closeIdeapadmodal(e) {
    e.preventDefault();
    setIdeapadmodal(false);
  }

  function AddNumber(e) {
    if (Count > 11) {
      e.stopPropagation(setCount);
      alert(" out of stock ");
    } else {
      setCount(Count + 1);
    }
  }
  function subtract(e) {
    if (Count < 2) {
      e.stopPropagation(setCount);
    } else {
      setCount(Count - 1);
    }
  }

  return (
    <div className="content-hoome">
      <div className={Navbar ? "Navbar-general active" : "Navbar-general"}>
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
          cssModule={AwesomeSliderStyles}
          interval={1000}
          bullets={false}
          organicArrows={true}
        >
          <div className="chop3">
            <img src={shop3} alt="images" id="img5" />
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
              <div className="btn-container-h5">
                <button calssName="btn-modern">
                  <font>
                    Shop Now{" "}
                    <img src={right} alt="images" className="logo-right" />
                  </font>
                </button>
              </div>
            </div>
          </div>
        </AutoplaySlider>
      </div>
      <div className="porto-products">
        <div className="porto-title-product">
          <h2>SHOP BY CATEGORIES</h2>
        </div>
        <div className="all-item-actived">
          <div className="owl-item-active">
            <lu className="product-col">
              <a href="#">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <img
                      src={product8}
                      alt="images"
                      className="image-productive"
                    />
                  </span>
                  <span className="thumb-info-title">
                    <h3>Accessories</h3>
                  </span>
                  <span className="thumb-info-type">
                    <mark>8</mark>
                    PRODUCTS
                  </span>
                </span>
              </a>
            </lu>
          </div>
          <div className="owl-item-active">
            <lu className="product-col">
              <a href="#">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <img
                      src={product89}
                      alt="images"
                      className="product-image"
                    />
                  </span>
                  <span className="thumb-info-title">
                    <h3>BAGS</h3>
                  </span>
                  <span className="thumb-info-type">
                    <mark>4</mark>
                    PRODUCTS
                  </span>
                </span>
              </a>
            </lu>
          </div>
          <div className="owl-item-active">
            <lu className="product-col">
              <a href="#">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <img
                      src={headphone3}
                      alt="images"
                      className="product-image"
                    />
                  </span>
                  <span className="thumb-info-title">
                    <h3>ELECTRONICS</h3>
                  </span>
                  <span className="thumb-info-type">
                    <mark>8</mark>
                    PRODUCTS
                  </span>
                </span>
              </a>
            </lu>
          </div>
          <div className="owl-item-active">
            <lu className="product-col">
              <a href="#">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <img
                      src={product21}
                      alt="images"
                      className="product-image"
                    />
                  </span>
                  <span className="thumb-info-title">
                    <h3>FASHION</h3>
                  </span>
                  <span className="thumb-info-type">
                    <mark>11</mark>
                    PRODUCTS
                  </span>
                </span>
              </a>
            </lu>
          </div>
          <div className="owl-item-active">
            <lu className="product-col">
              <a href="#">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <img
                      src={headphone1}
                      alt="images"
                      className="product-image"
                    />
                  </span>
                  <span className="thumb-info-title">
                    <h3>HEADPHONE</h3>
                  </span>
                  <span className="thumb-info-type">
                    <mark>3</mark>
                    PRODUCTS
                  </span>
                </span>
              </a>
            </lu>
          </div>
          <div className="owl-item-active">
            <lu className="product-col">
              <a href="#">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <img src={shoes16} alt="images" className="product-image" />
                  </span>
                  <span className="thumb-info-title">
                    <h3>SHOES</h3>
                  </span>
                  <span className="thumb-info-type">
                    <mark>4</mark>
                    PRODUCTS
                  </span>
                </span>
              </a>
            </lu>
          </div>
        </div>
        <div className="porto-inner-container">
          <div className="Container-Inner">
            <span className="span-inner">
              <h2>POPULAR PRODUCTS</h2>
            </span>
          </div>
          <div className="all-item-actived">
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={shoes16}
                        alt="images"
                        className="image-productive"
                      />
                      <div class="portfolioDisc" onClick={openModal}>
                        Quickview
                      </div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Girl Shoes
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="price-premier">$101.00</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={product8}
                        alt="images"
                        className="image-productive"
                      />
                      <div class="portfolioDisc" onClick={openglassmodal}>
                        Quickview
                      </div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Glasses
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="price-premier">$101.00</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={headphone3}
                        alt="images"
                        className="image-productive"
                      />
                      <div class="portfolioDisc" onClick={openIdeapadmodal}>
                        Quickview
                      </div>
                      <div className="product-labels">
                        <div className="sale-label">-20%</div>
                      </div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Ideapad
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="old-price-wrapper">$299.00</span>
                      <span className="price-premier">$239.00</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={menCap}
                        alt="images"
                        className="image-productive"
                      />
                      <div class="portfolioDisc">Quickview</div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Men Cap
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="price-premier">$199.00</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={menShoes}
                        alt="images"
                        className="image-productive"
                      />
                      <div class="portfolioDisc">Quickview</div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Men Shoes
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="price-premier">$39.00</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={dron}
                        alt="images"
                        className="image-productive"
                      />
                      <div class="portfolioDisc">Quickview</div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Porto Both Sticky Info
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="price-premier">$79.00</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
          </div>
          <div className="all-item-actived">
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={product72}
                        alt="images"
                        className="image-productive"
                      />
                      <div className="portfolioDisc">Quickview</div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Girl Shoes
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="price-premier">$69.00</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={portofull}
                        alt="images"
                        className="image-productive"
                      />
                      <div class="portfolioDisc">Quickview</div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Glasses
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="price-premier">$100.00</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={jacket}
                        alt="images"
                        className="image-productive"
                      />
                      <div class="portfolioDisc">Quickview</div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Ideapad
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="price-premier">$259.10</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={product89}
                        alt="images"
                        className="image-productive"
                      />
                      <div class="portfolioDisc">Quickview</div>
                      <div className="product-labels">
                        <div className="sale-label">-13%</div>
                      </div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Men Cap
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="old-price-wrapper">$299.00</span>
                      <span className="price-premier">$259.00</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={skirt}
                        alt="images"
                        className="image-productive"
                      />
                      <div class="portfolioDisc">Quickview</div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Men Shoes
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="price-premier">$49.00</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
            <div className="owl-item-active">
              <lu className="product-col">
                <span className="thumb-info">
                  <span className="thumb-info-wrapper">
                    <a href="#" className="popular-image-a">
                      <div className="icon-product">
                        <div className="icon-bagfill">
                          <a href="#">
                            <BsBag />
                          </a>
                        </div>
                        <div className="icon-chartfill">
                          <a href="#">
                            <BsBarChartFill />
                          </a>
                        </div>
                      </div>
                      <img
                        src={time}
                        alt="images"
                        className="image-productive"
                      />
                      <div class="portfolioDisc">Quickview</div>
                      <div className="product-labels">
                        <div className="sale-label">-13%</div>
                      </div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Porto Both Sticky Info
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" value="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" value="5" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                      </form>
                    </span>
                    <span
                      id="product-price-3382"
                      className="price-wrapper"
                      data-price-amount="101"
                      data-price-type="finalPrice"
                    >
                      <span className="old-price-wrapper">$299.00</span>
                      <span className="price-premier">$259.00</span>
                    </span>
                  </div>
                </span>
              </lu>
            </div>
          </div>
        </div>
        <div className="porto-separator-taller">
          <hr className="align_center-hr" />
        </div>
        <div className="row-mb-4">
          <div className="col-sm-6-md-3">
            <div className="vc_column_inner">
              <div className="porto-sicon-icon">
                <i>
                  <img
                    className="simple-line-icon-alt"
                    src={headphoneicon}
                    alt="images"
                  />
                </i>
              </div>
              <div className="porto-sicon-header">
                <h3>CUSTOMER SUPPORT</h3>
                <p>Need Assistence?</p>
              </div>
              <div className="porto-sicon-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec vestibulum magna, et dapib.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6-md-3">
            <div className="vc_column_inner">
              <div className="porto-sicon-icon">
                <i>
                  <img
                    className="simple-line-icon-alt"
                    src={credit}
                    alt="images"
                  />
                </i>
              </div>
              <div className="porto-sicon-header">
                <h3>SECURED PAYMENT</h3>
                <p>Safe & Fast</p>
              </div>
              <div className="porto-sicon-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6-md-3">
            <div className="vc_column_inner">
              <div className="porto-sicon-icon">
                <i>
                  <img
                    className="simple-line-icon-alt"
                    src={undo}
                    alt="images"
                  />
                </i>
              </div>
              <div className="porto-sicon-header">
                <h3>FREE RETURNS</h3>
                <p>Easy & Free</p>
              </div>
              <div className="porto-sicon-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec vestibulum magna, et dapib.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6-md-3">
            <div className="vc_column_inner">
              <div className="porto-sicon-icon">
                <i>
                  <img
                    className="simple-line-icon-alt"
                    src={delevery}
                    alt="images"
                  />
                </i>
              </div>
              <div className="porto-sicon-header">
                <h3>FREE SHIPPING</h3>
                <p>Orders Over $99</p>
              </div>
              <div className="porto-sicon-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec vestibulum magna, et dapib.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="porto-separator-taller-tow">
          <hr className="align_center-hr" />
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
        <div>
          <div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content">
                <div className="bsx">
                  <BsX className="Bsk" onClick={closeModal} />
                </div>
                <div className="column-main">
                  <section className="gallery">
                    <div className="gallery__item">
                      <input
                        type="radio"
                        id="img-1"
                        checked
                        name="gallery"
                        className="gallery__selector"
                      />
                      <img className="gallery__img" src={shoes00} alt="" />
                      <label for="img-1" className="gallery__thumb">
                        <img src={shoes000} alt="" />
                      </label>
                    </div>
                    <div className="gallery__item">
                      <input
                        type="radio"
                        id="img-2"
                        checked
                        name="gallery"
                        className="gallery__selector"
                      />
                      <img className="gallery__img" src={shoes11} alt="" />
                      <label for="img-2" className="gallery__thumb">
                        <img src={shoes111} alt="" />
                      </label>
                    </div>
                    <div cclassName="gallery__item">
                      <input
                        type="radio"
                        id="img-3"
                        checked
                        name="gallery"
                        className="gallery__selector"
                      />
                      <img className="gallery__img" src={shoes12} alt="" />
                      <label for="img-3" className="gallery__thumb">
                        <img src={shoes122} alt="" />
                      </label>
                    </div>
                    <div className="gallery__item">
                      <input
                        type="radio"
                        checked
                        id="img-4"
                        name="gallery"
                        className="gallery__selector"
                      />
                      <img className="gallery__img" src={shoes13} alt="" />
                      <label for="img-4" className="gallery__thumb">
                        <img src={shoes133} alt="" />
                      </label>
                    </div>
                  </section>
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base" itemProp="name">
                        Girl Shoes
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" value="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="5" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                        </form>
                      </span>
                    </div>
                    <hr className="align_hr" />
                    <div className="product-info-price">
                      <div
                        className="price-box-final-price"
                        data-role="priceBox"
                      >
                        <span
                          id="product-price-3382"
                          data-price-amount="101"
                          data-price-type="finalPrice"
                          className="price-wrapper "
                        >
                          $101.00
                        </span>
                      </div>
                    </div>
                    <div className="product-attribute">
                      <div className="value" itemProp="description">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                      </div>
                    </div>
                    <div className="product-info-stock">
                      <div className="stock-available">
                        <span className="label">Availability : </span>
                        <span className="stoker">In stock</span>
                      </div>
                      <div className="product-attribute-sku">
                        <strong className="type"> SKU : </strong>
                        <div className="value"> 4234623 </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1" />
                    <div className="product-add-from">
                      <div className="fieldset">
                        <div className="control">
                          <input
                            type="number"
                            name="qty"
                            id="qty"
                            maxlength="12"
                            value={Count}
                            title="qty"
                            className="input-text-qty"
                          />
                          <div className="qty-changer">
                            <a className="qty-inc">
                              <BsPlus className="plus" onClick={AddNumber} />
                            </a>
                            <a className="qty-dec" onClick={subtract}>
                              <BsDash className="BsDash" />
                            </a>
                          </div>
                        </div>
                        <div className="action">
                          <button
                            type="submit"
                            title="Add to Cart"
                            className="action-primary-tocart"
                            id="add-tocart"
                          >
                            <BsBag className="bs-bag-modal" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1" />
                    <div className="fieldset">
                      <div className="action2">
                        <a
                          target="_parent"
                          href="#"
                          title="Go To Product"
                          className="action-primary"
                          id="product-gotoproduct"
                        >
                          <span>Go To Product</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <div>
            <Modal
              isOpen={glassmodal}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content">
                <div className="bsx">
                  <BsX className="Bsk" onClick={closeglassmodal} />
                </div>
                <div className="column-main">
                  <section className="gallery">
                    <div className="gallery__item">
                      <input
                        type="radio"
                        id="img-1"
                        checked
                        name="gallery"
                        className="gallery__selector"
                      />
                      <img className="gallery__img" src={product205} alt="" />
                      <label for="img-1" className="gallery__thumb">
                        <img src={product2055} alt="" />
                      </label>
                    </div>
                    <div className="gallery__item">
                      <input
                        type="radio"
                        id="img-2"
                        checked
                        name="gallery"
                        className="gallery__selector"
                      />
                      <img className="gallery__img" src={product48} alt="" />
                      <label for="img-2" className="gallery__thumb">
                        <img src={product488} alt="" />
                      </label>
                    </div>
                    <div cclassName="gallery__item">
                      <input
                        type="radio"
                        id="img-3"
                        checked
                        name="gallery"
                        className="gallery__selector"
                      />
                      <img className="gallery__img" src={product888} alt="" />
                      <label for="img-3" className="gallery__thumb">
                        <img src={product8888} alt="" />
                      </label>
                    </div>
                  </section>
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base" itemProp="name">
                        Glasses
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" value="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="5" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                        </form>
                      </span>
                    </div>
                    <hr className="align_hr" />
                    <div className="product-info-price">
                      <div
                        className="price-box-final-price"
                        data-role="priceBox"
                      >
                        <span
                          id="product-price-3382"
                          data-price-amount="101"
                          data-price-type="finalPrice"
                          className="price-wrapper "
                        >
                          $101.00
                        </span>
                      </div>
                    </div>
                    <div className="product-attribute">
                      <div className="value" itemProp="description">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                      </div>
                    </div>
                    <div className="product-info-stock">
                      <div className="stock-available">
                        <span className="label">Availability : </span>
                        <span className="stoker">In stock</span>
                      </div>
                      <div className="product-attribute-sku">
                        <strong className="type"> SKU : </strong>
                        <div className="value"> 42346423 </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1" />
                    <div className="product-add-from">
                      <div className="fieldset">
                        <div className="control">
                          <input
                            type="number"
                            name="qty"
                            id="qty"
                            maxlength="12"
                            value={Count}
                            title="qty"
                            className="input-text-qty"
                          />
                          <div className="qty-changer">
                            <a className="qty-inc">
                              <BsPlus className="plus" onClick={AddNumber} />
                            </a>
                            <a className="qty-dec" onClick={subtract}>
                              <BsDash className="BsDash" />
                            </a>
                          </div>
                        </div>
                        <div className="action">
                          <button
                            type="submit"
                            title="Add to Cart"
                            className="action-primary-tocart"
                            id="add-tocart"
                          >
                            <BsBag className="bs-bag-modal" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1" />
                    <div className="fieldset">
                      <div className="action2">
                        <a
                          target="_parent"
                          href="#"
                          title="Go To Product"
                          className="action-primary"
                          id="product-gotoproduct"
                        >
                          <span>Go To Product</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <div>
            <Modal
              isOpen={ideapadmodal}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content-3">
                <div className="bsx">
                  <BsX className="Bsk" onClick={closeIdeapadmodal} />
                </div>
                <div className="column-main">
                  <section className="gallery-9">
                    <div className="gallery__item-5">
                      <input
                        type="radio"
                        id="img-2"
                        checked
                        name="gallery"
                        className="gallery__selector"
                      />
                      <img
                        for="img-2"
                        className="gallery__img__ideapad"
                        src={ideapad}
                        alt=""
                      />{" "}
                    </div>
                  </section>
                  <div className="product-main-info-3">
                    <div className="page-title-wrapper">
                      <h1 className="base" itemProp="name">
                        Ideapad
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" value="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" value="5" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                        </form>
                      </span>
                    </div>
                    <hr className="align_hr" />
                    <div className="product-info-price">
                      <div
                        className="price-box-final-price"
                        data-role="priceBox"
                      >
                        <span
                          id="product-price-3382"
                          data-price-amount="101"
                          data-price-type="finalPrice"
                          className="price-wrapper "
                        >
                          <span className="old-price-wrapper">$299.00</span>
                          <span className="price-premier">$259.00</span>
                        </span>
                      </div>
                    </div>
                    <div className="product-attribute">
                      <div className="value" itemProp="description">
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante. Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend
                        leo.
                      </div>
                    </div>
                    <div className="product-info-stock">
                      <div className="stock-available">
                        <span className="label">Availability : </span>
                        <span className="stoker">In stock</span>
                      </div>
                      <div className="product-attribute-sku">
                        <strong className="type"> SKU : </strong>
                        <div className="value"> 42346423 </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1" />
                    <div className="product-add-from">
                      <div className="fieldset">
                        <div className="control">
                          <input
                            type="number"
                            name="qty"
                            id="qty"
                            maxlength="12"
                            value={Count}
                            title="qty"
                            className="input-text-qty"
                          />
                          <div className="qty-changer">
                            <a className="qty-inc">
                              <BsPlus className="plus" onClick={AddNumber} />
                            </a>
                            <a className="qty-dec" onClick={subtract}>
                              <BsDash className="BsDash" />
                            </a>
                          </div>
                        </div>
                        <div className="action">
                          <button
                            type="submit"
                            title="Add to Cart"
                            className="action-primary-tocart"
                            id="add-tocart"
                          >
                            <BsBag className="bs-bag-modal" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1" />
                    <div className="fieldset">
                      <div className="action2">
                        <a
                          target="_parent"
                          href="#"
                          title="Go To Product"
                          className="action-primary"
                          id="product-gotoproduct"
                        >
                          <span>Go To Product</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
