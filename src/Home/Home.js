import React, { useState, useContext, createContext } from "react";
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
import menCap3 from "./men cap/cap-cap.jpeg";
import menshoes1 from "./Men Shoes/menshoes1.jpeg";
import menshoes1_1 from "./Men Shoes/menshoes1_1.jpeg";
import menshoes2 from "./Men Shoes/menshoes2.jpeg";
import menshoes2_2 from "./Men Shoes/menshoes2_2.jpeg";
import menshoes3 from "./Men Shoes/menshoes3.jpeg";
import menshoes3_3 from "./Men Shoes/menshoes3_3.jpeg";
import menshoes4 from "./Men Shoes/menshoes4.jpeg";
import menshoes4_4 from "./Men Shoes/menshoes4_4.jpeg";
import dron11 from "./Porto both/dron11.jpeg";
import dron111 from "./Porto both/dron111.jpeg";
import dron2 from "./Porto both/dron2.jpeg";
import dron22 from "./Porto both/dron22.jpeg";
import dron33 from "./Porto both/dron33.jpeg";
import dron333 from "./Porto both/dron333.jpeg";
import shoesclassy11 from "./Porto-Ectanded-Layout/shoeslassy11.jpeg";
import shoesclassy111 from "./Porto-Ectanded-Layout/shoesclassy111.jpeg";
import shoesclassy22 from "./Porto-Ectanded-Layout/shoes-classy22.jpg";
import shoesclassy222 from "./Porto-Ectanded-Layout/shoesclassy222.jpg";
import shoesclassy33 from "./Porto-Ectanded-Layout/shoes-classy33.jpg";
import shoesclassy333 from "./Porto-Ectanded-Layout/shoesclassy333.jpg";
import shoesclassy44 from "./Porto-Ectanded-Layout/shoes-classy44.jpg";
import shoesclassy444 from "./Porto-Ectanded-Layout/shoesclassy444.jpg";
import portofullwidth from "./porto-full-width/porto-full-width.jpeg";
import leftSlider from "./left-sider/left-slider.jpeg";
import suitcase from "./suitcase/suitcase.jpeg";
import transparentimages from "./transparentImage1/1portotransparentimages.jpeg";
import watch from "./sport watch/product-21.jpeg";
import { BsX } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
import appContext from "../appContext";
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
  const [Count, setCount] = useState(0);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [glassmodal, setGlassmodal] = React.useState(false);
  const [ideapadmodal, setIdeapadmodal] = React.useState(false);
  const [menCapmodal, setMenCapmodal] = React.useState(false);
  const [MenSHose, setMenSHose] = React.useState(false);
  const [portoBoth, setPortoBoth] = React.useState(false);
  const [ExtendedLayout, setExtendedLayout] = React.useState(false);
  const [Portowidth, setPortowidth] = React.useState(false);
  const [leftSlidebar, setleftSlidebar] = React.useState(false);
  const [RightSidebar, setRightSidebar] = React.useState(false);
  const [Transparentimage, setTransparentimage] = React.useState(false);
  const [SportsWatch, setSportsWatch] = React.useState(false);
  const [Size, setSize] = useState();
  const [Size2, setSize2] = useState();
  const [Size3, setSize3] = useState();
  const [Size4, setSize4] = useState();
  const [Sizeclothes, setSizeclothes] = useState();
  const [Sizeclothes2, setSizeclothes2] = useState();
  const [Sizeclothes3, setSizeclothes3] = useState();
  const [Sizeclothes4, setSizeclothes4] = useState();
  const [ClickSize, setClickSize] = useState(false);
  const [ClickSize2, setClickSize2] = useState(false);
  const [ClickSize3, setClickSize3] = useState(false);
  const [ClickSize4, setClickSize4] = useState(false);
  const [proceGirlShouse, setproceGirlShouse] = useState(101.01);
  const [priceGlasses, setPriceGlasses] = useState(101.0);
  const [priceIdeapad, setPriceIdeapad] = useState(259.0);
  const [priceMenCap, setPriceMenCap] = useState(199.01);
  const [priceMenshouse, setpriceMenshouse] = useState(39.99);
  const [priceStickyInfo, setpriceStickyInfo] = useState(79.0);
  const [priceExtandlayout, setPriceExtandlayout] = useState(69.0);
  const [PricePortoFullWidth, setPricePOrtoFullwidth] = useState(100.0);
  const [pricePortoSidebar, setpricePortoSidebar] = useState(259.1);
  const [priceRightsidebar, setpriceRightsidebar] = useState(259.0);
  const [priceTransparent, setpriceTransparent] = useState(49.0);
  const [priceSportwatch, setpriceSportwatch] = useState(259.0);
  const [Basket, setBasket] = useState(0);

  const { onAddToCart, cart } = useContext(appContext);

  function ClickSizeclothes(e) {
    e.preventDefault();
    if (Sizeclothes) {
      setSizeclothes();
    } else {
      setSizeclothes("XS");
    }
    ClickSizeclothes = !ClickSizeclothes;
  }
  function ClickSizeclothes2(e) {
    e.preventDefault();
    if (Sizeclothes2) {
      setSizeclothes2();
    } else {
      setSizeclothes2("S");
    }
    ClickSizeclothes2 = !ClickSizeclothes2;
  }
  function ClickSizeclothes3(e) {
    e.preventDefault();
    if (Sizeclothes3) {
      setSizeclothes3();
    } else {
      setSizeclothes3("M");
    }
    ClickSizeclothes3 = !ClickSizeclothes3;
  }
  function ClickSizeclothes4(e) {
    e.preventDefault();
    if (Sizeclothes4) {
      setSizeclothes4();
    } else {
      setSizeclothes4("L");
    }
    ClickSizeclothes4 = !ClickSizeclothes4;
  }
  function Clicker(e) {
    e.preventDefault();
    if (ClickSize) {
      setClickSize(false);
    } else {
      setClickSize(true);
    }
    Clicker = !Clicker;
  }
  function SizeClick(e) {
    e.preventDefault();
    if (Size) {
      setSize();
    } else {
      setSize(37);
    }
    SizeClick = !SizeClick;
  }
  function Clicker2(e) {
    e.preventDefault();
    if (ClickSize2) {
      setClickSize2(false);
    } else {
      setClickSize2(true);
    }
    Clicker2 = !Clicker2;
  }
  function SizeClick2(e) {
    e.preventDefault();
    if (Size2) {
      setSize();
    } else {
      setSize2(38);
    }
    SizeClick2 = !SizeClick2;
  }
  function Clicker3(e) {
    e.preventDefault();
    if (ClickSize3) {
      setClickSize3(false);
    } else {
      setClickSize3(true);
    }
    Clicker3 = !Clicker3;
  }
  function SizeClick3(e) {
    e.preventDefault();
    if (Size3) {
      setSize3();
    } else {
      setSize3(39);
    }
    SizeClick3 = !SizeClick3;
  }
  function Clicker4(e) {
    e.preventDefault();
    if (ClickSize4) {
      setClickSize4(false);
    } else {
      setClickSize4(true);
    }
    Clicker3 = !Clicker3;
  }
  function SizeClick4(e) {
    e.preventDefault();
    if (Size4) {
      setSize4();
    } else {
      setSize4(40);
    }
    SizeClick3 = !SizeClick3;
  }

  function openTransparentimage(e) {
    e.preventDefault();
    setTransparentimage(true);
  }
  function closeTransparentimage(e) {
    e.preventDefault();
    setTransparentimage(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }
  function openSportsWatch(e) {
    e.preventDefault();
    setSportsWatch(true);
  }
  function closeSportsWatch(e) {
    e.preventDefault();
    setSportsWatch(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }
  function openRightSidebar(e) {
    e.preventDefault();
    setRightSidebar(true);
  }
  function closeRightSidebar(e) {
    e.preventDefault();
    setRightSidebar(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }
  function openleftSlidebar(e) {
    e.preventDefault();
    setleftSlidebar(true);
  }
  function closeleftSlidebar(e) {
    e.preventDefault();
    setleftSlidebar(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }
  function openPortowidth(e) {
    e.preventDefault();
    setPortowidth(true);
  }
  function closePortowidth(e) {
    e.preventDefault();
    setPortowidth(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }
  function openExtendedLayout(e) {
    e.preventDefault();
    setExtendedLayout(true);
  }
  function closeExtendedLayout(e) {
    e.preventDefault();
    setExtendedLayout(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }
  function openglassmodal(e) {
    e.preventDefault();
    setGlassmodal(true);
  }
  function closeglassmodal(e) {
    e.preventDefault();
    setGlassmodal(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }

  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }
  function openIdeapadmodal(e) {
    e.preventDefault();
    setIdeapadmodal(true);
  }
  function closeIdeapadmodal(e) {
    e.preventDefault();
    setIdeapadmodal(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }
  function openMencap(e) {
    e.preventDefault();
    setMenCapmodal(true);
  }
  function closeMencap(e) {
    e.preventDefault();
    setMenCapmodal(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }
  function openMenShouse(e) {
    e.preventDefault();
    setMenSHose(true);
  }
  function clouseMenShouse(e) {
    e.preventDefault();
    setMenSHose(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }
  function openportoboth(e) {
    e.preventDefault();
    setPortoBoth(true);
  }
  function closeportoboth(e) {
    e.preventDefault();
    setPortoBoth(false);
    setCount(0);
    setBasket(0);
    setClickSize(false);
    setClickSize2(false);
    setClickSize3(false);
    setClickSize4(false);
  }
  function AddNumber(e) {
    if (Count > 11) {
      e.stopPropagation(setCount);
      alert(" out of stock ");
    } else {
      setCount(Count + 1);
      setBasket(Basket + 1);
    }
  }
  function subtract(e) {
    if (Count < 1) {
      e.stopPropagation(setCount);
    } else {
      setCount(Count - 1);
      setBasket(Basket - 1);
    }
  }
  function OnclickGirlShouse(e) {
    e.preventDefault();
    onAddToCart(
      Count,
      priceGlasses,
      [Sizeclothes, Sizeclothes2, Sizeclothes3, Sizeclothes4],
      proceGirlShouse
    );
    console.log(onAddToCart);
  }

  function AddtocartGlasses(e) {
    e.preventDefault();
    console.log(Count);
  }
  function Addtocartideapad(e) {
    e.preventDefault();
    console.log(Count);
  }
  function ADDTOCARTMENCAP(e) {
    e.preventDefault();
    console.log([
      Count,
      "hamza",
      [Sizeclothes, Sizeclothes2, Sizeclothes3, Sizeclothes4],
      priceExtandlayout,
    ]);
  }
  function OnclickMenShoes(e) {
    e.preventDefault();
    console.log([Count, "hamza", [Size4, Size3, Size2, Size], priceMenshouse]);
  }
  function ADDtocartPOrtoDron(e) {
    e.preventDefault();
    console.log(Count);
  }
  function PortoExtandlayout(e) {
    e.preventDefault();
    console.log([
      Count,
      "hamza",
      [Size4, Size3, Size2, Size],
      priceExtandlayout,
    ]);
  }
  function ADDTOCARTPORTOWIDTH(e) {
    e.preventDefault();
    console.log([
      Count,
      "hamza",
      [Sizeclothes, Sizeclothes2, Sizeclothes3, Sizeclothes4],
      priceExtandlayout,
    ]);
  }
  function ADDTOCARTPORTOLEFTSIDEBAR(e) {
    e.preventDefault();
    console.log([
      Count,
      "hamza",
      [Sizeclothes, Sizeclothes2, Sizeclothes3, Sizeclothes4],
      priceExtandlayout,
    ]);
  }
  function ADDtocartPortoRightsidebar(e) {
    e.preventDefault();
    console.log(Count);
  }
  function ADDtocarttransparentImages(e) {
    e.preventDefault();
    console.log(Count);
  }
  function ADDtocartSportWatch(e) {
    e.preventDefault();
    console.log(Count);
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
                <span className="lengthofbasket">{Basket}</span>
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
                <button className="btn-modern">
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
                      <div className="portfolioDisc" onClick={openModal}>
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
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">${proceGirlShouse}</span>
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
                      <div className="portfolioDisc" onClick={openglassmodal}>
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
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">${priceGlasses}.00</span>
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
                      <div className="portfolioDisc" onClick={openIdeapadmodal}>
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
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">${priceIdeapad}.00</span>
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
                      <div className="portfolioDisc" onClick={openMencap}>
                        Quickview
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
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">${priceMenCap}</span>
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
                      <div className="portfolioDisc" onClick={openMenShouse}>
                        Quickview
                      </div>
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
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">${priceMenshouse}</span>
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
                      <div className="portfolioDisc" onClick={openportoboth}>
                        Quickview
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
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">
                        ${priceStickyInfo}.00
                      </span>
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
                      <div
                        className="portfolioDisc"
                        onClick={openExtendedLayout}
                      >
                        Quickview
                      </div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Porto Extended Layout
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">
                        ${priceExtandlayout}.00
                      </span>
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
                      <div className="portfolioDisc" onClick={openPortowidth}>
                        Quickview
                      </div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Porto Full-Width
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">
                        ${PricePortoFullWidth}.00
                      </span>
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
                      <div className="portfolioDisc" onClick={openleftSlidebar}>
                        Quickview
                      </div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Porto Left Sidebar
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">
                        ${pricePortoSidebar}0
                      </span>
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
                      <div className="portfolioDisc" onClick={openRightSidebar}>
                        Quickview
                      </div>
                      <div className="product-labels">
                        <div className="sale-label">-13%</div>
                      </div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Porto Right Sidebar
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">
                        ${priceRightsidebar}.00
                      </span>
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
                      <div
                        className="portfolioDisc"
                        onClick={openTransparentimage}
                      >
                        Quickview
                      </div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        1 Porto Transparent Images
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">
                        ${priceTransparent}.00
                      </span>
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
                      <div className="portfolioDisc" onClick={openSportsWatch}>
                        Quickview
                      </div>
                      <div className="product-labels">
                        <div className="sale-label">-13%</div>
                      </div>
                    </a>
                  </span>
                  <div className="product-details-items">
                    <strong className="product-item-name">
                      <a className="product-item-link" href="#">
                        Sport Watch
                      </a>
                    </strong>
                    <span className="label">
                      <form className="rating">
                        <label>
                          <input type="radio" name="stars" defaultValue="1" />
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="2" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="3" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="4" />
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                          <span className="icon">★</span>
                        </label>
                        <label>
                          <input type="radio" name="stars" defaultValue="5" />
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
                      <span className="price-premier">
                        ${priceSportwatch}.00
                      </span>
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
                    <div className="gallery__item">
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
                            <input
                              id="rating1"
                              type="radio"
                              name="stars"
                              defaultValue="1"
                            />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          data-price-amount="101.00"
                          data-price-type="finalPrice"
                          className="price-wrapper "
                        >
                          <h4>${proceGirlShouse}</h4>
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
                      <div className="switch-attribute-size">
                        <span id="option-label-size-137">Size : </span>
                        <div
                          className="switch-option-text"
                          index="0"
                          defaultValue="0"
                          aria-invalid="true"
                        >
                          <div
                            className={
                              ClickSize
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-136-item-166"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="166"
                            option-label="37"
                            aria-label="37"
                            aria-selected="true"
                            defaultValue={37}
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="37"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            onClick={SizeClick}
                          >
                            <h3 onClick={Clicker}>37</h3>
                          </div>
                          <div
                            className={
                              ClickSize2
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-137-item-167"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            aria-selected="true"
                            option-type="0"
                            option-id="167"
                            option-label="38"
                            aria-label="38"
                            defaultValue="2"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="XS"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            onClick={SizeClick2}
                          >
                            <h3 onClick={Clicker2}>38</h3>
                          </div>
                          <div
                            className={
                              ClickSize3
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-138-item-168"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="168"
                            option-label="39"
                            aria-label="39"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="39"
                            role="option"
                            aria-selected="true"
                            thumb-width="110"
                            thumb-height="90"
                            defaultValue={39}
                            onClick={SizeClick3}
                          >
                            <h3 onClick={Clicker3}>39</h3>
                          </div>
                          <div
                            className={
                              ClickSize4
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-139-item-169"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="169"
                            option-label="40"
                            aria-label="40"
                            aria-selected="true"
                            option-tooltip-thumb=""
                            option-tooltip-value="40"
                            role="option"
                            thumb-width="110"
                            defaultValue={40}
                            thumb-height="90"
                            onClick={SizeClick4}
                          >
                            <h3 onClick={Clicker4}>40</h3>
                          </div>
                        </div>
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
                            maxLength="12"
                            Value={Count}
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
                            onClick={OnclickGirlShouse}
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
                    <div className="gallery__item">
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
                            <input type="radio" name="stars" defaultValue="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          ${priceGlasses}.00
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
                            Value={Count}
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
                            onClick={AddtocartGlasses}
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
              <div className="mfp-content">
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
                        name="gallery-9"
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
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base-1" itemProp="name">
                        Ideapad
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" defaultValue="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          <span className="old-price-wrapper-09">$299.00</span>
                          <span className="price-premier-09">
                            ${priceIdeapad}.00
                          </span>
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
                            maxlength="11"
                            Value={Count}
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
                            onClick={Addtocartideapad}
                          >
                            <BsBag className="bs-bag-modal" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1__2" />
                    <div className="fieldset">
                      <div className="action22">
                        <a
                          target="_parent"
                          href="#"
                          title="Go To Product"
                          className="action-primary2"
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
              isOpen={menCapmodal}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content-9">
                <div className="bsx">
                  <BsX className="Bsk" onClick={closeMencap} />
                </div>
                <div className="column-main">
                  <section className="gallery-9">
                    <div className="gallery__item-5">
                      <input
                        type="radio"
                        id="img-2"
                        checked
                        name="gallery-9"
                        className="gallery__selector"
                      />
                      <img
                        for="img-2"
                        className="gallery__img__ideapad"
                        src={menCap3}
                        alt=""
                      />{" "}
                    </div>
                  </section>
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base-1" itemProp="name">
                        Men Cap
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" defaultValue="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          ${priceMenCap}
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
                      <div className="switch-attribute-size">
                        <span id="option-label-size-137">Size : </span>
                        <div
                          className="switch-option-text"
                          index="0"
                          defaultValue="0"
                          aria-invalid="true"
                        >
                          <div
                            className={
                              ClickSize
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-136-item-166"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="166"
                            option-label="XS"
                            aria-label="XS"
                            defaultValue="1"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="XS"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            onClick={ClickSizeclothes}
                          >
                            <h3 onClick={Clicker}>XS</h3>
                          </div>
                          <div
                            className={
                              ClickSize2
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-137-item-167"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="167"
                            option-label="S"
                            aria-label="S"
                            defaultValue="2"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="S"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            onClick={ClickSizeclothes2}
                          >
                            <h3 onClick={Clicker2}>S</h3>
                          </div>
                          <div
                            className={
                              ClickSize3
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-138-item-168"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="168"
                            option-label="M"
                            aria-label="M"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="M"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            defaultValue="3"
                            onClick={ClickSizeclothes3}
                          >
                            <h3 onClick={Clicker3}>M</h3>
                          </div>
                          <div
                            className={
                              ClickSize4
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-138-item-168"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="168"
                            option-label="L"
                            aria-label="L"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="L"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            defaultValue="4"
                            onClick={ClickSizeclothes4}
                          >
                            <h3 onClick={Clicker4}>L</h3>
                          </div>
                        </div>
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
                            Value={Count}
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
                            <span onClick={ADDTOCARTMENCAP}>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1__2" />
                    <div className="fieldset">
                      <div className="action22">
                        <a
                          target="_parent"
                          href="#"
                          title="Go To Product"
                          className="action-primary2"
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
              isOpen={MenSHose}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content">
                <div className="bsx">
                  <BsX className="Bsk" onClick={clouseMenShouse} />
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
                      <img className="gallery__img" src={menshoes1} alt="" />
                      <label for="img-1" className="gallery__thumb">
                        <img src={menshoes1_1} alt="" />
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
                      <img className="gallery__img" src={menshoes2} alt="" />
                      <label for="img-2" className="gallery__thumb">
                        <img src={menshoes2_2} alt="" />
                      </label>
                    </div>
                    <div className="gallery__item">
                      <input
                        type="radio"
                        id="img-3"
                        checked
                        name="gallery"
                        className="gallery__selector"
                      />
                      <img className="gallery__img" src={menshoes3} alt="" />
                      <label for="img-3" className="gallery__thumb">
                        <img src={menshoes3_3} alt="" />
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
                      <img className="gallery__img" src={menshoes4} alt="" />
                      <label for="img-4" className="gallery__thumb">
                        <img src={menshoes4_4} alt="" />
                      </label>
                    </div>
                  </section>
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base" itemProp="name">
                        Men Shoes
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" defaultValue="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          <h4>${priceMenshouse}</h4>
                        </span>
                      </div>
                    </div>
                    <div className="product-attribute">
                      <div className="value" itemProp="description">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non.
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
                      <div className="switch-attribute-size">
                        <span id="option-label-size-137">Size : </span>
                        <div
                          className="switch-option-text"
                          index="0"
                          defaultValue="0"
                          aria-invalid="true"
                        >
                          <div
                            className={
                              ClickSize
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-136-item-166"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="166"
                            option-label="38"
                            aria-label="38"
                            defaultValue="1"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="38"
                            role="option"
                            thumb-width="110"
                            aria-selected="true"
                            thumb-height="90"
                            onClick={SizeClick}
                          >
                            <h3 onClick={Clicker}>37</h3>
                          </div>
                          <div
                            className={
                              ClickSize2
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-137-item-167"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="167"
                            option-label="39"
                            aria-label="39"
                            defaultValue="2"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="XS"
                            aria-selected="true"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            onClick={SizeClick2}
                          >
                            <h3 onClick={Clicker2}>38</h3>
                          </div>
                          <div
                            className={
                              ClickSize3
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-138-item-168"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="168"
                            option-label="40"
                            aria-label="40"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="40"
                            role="option"
                            thumb-width="110"
                            aria-selected="true"
                            thumb-height="90"
                            defaultValue="3"
                            onClick={SizeClick3}
                          >
                            <h3 onClick={Clicker3}>39</h3>
                          </div>
                          <div
                            className={
                              ClickSize4
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-139-item-169"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="169"
                            option-label="41"
                            aria-label="41"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="41"
                            role="option"
                            thumb-width="110"
                            aria-selected="true"
                            defaultValue="4"
                            thumb-height="90"
                            onClick={SizeClick4}
                          >
                            <h3 onClick={Clicker4}>40</h3>
                          </div>
                        </div>
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
                            Value={Count}
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
                            <span onClick={OnclickMenShoes}>Add to Cart</span>
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
              isOpen={portoBoth}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content-dron">
                <div className="bsx">
                  <BsX className="Bsk" onClick={closeportoboth} />
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
                      <img className="gallery__img" src={dron11} alt="" />
                      <label for="img-1" className="gallery__thumb">
                        <img src={dron111} alt="" />
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
                      <img className="gallery__img" src={dron2} alt="" />
                      <label for="img-2" className="gallery__thumb">
                        <img src={dron22} alt="" />
                      </label>
                    </div>
                    <div className="gallery__item">
                      <input
                        type="radio"
                        id="img-3"
                        checked
                        name="gallery"
                        className="gallery__selector"
                      />
                      <img
                        className="gallery__img"
                        id="imges0933"
                        src={dron33}
                        alt=""
                      />
                      <label for="img-3" className="gallery__thumb">
                        <img src={dron333} alt="" />
                      </label>
                    </div>
                  </section>
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base" itemProp="name">
                        Porto Both Sticky Info
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" defaultValue="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          ${priceStickyInfo}.00
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
                            Value={Count}
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
                            onClick={ADDtocartPOrtoDron}
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
              isOpen={ExtendedLayout}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content">
                <div className="bsx">
                  <BsX className="Bsk" onClick={closeExtendedLayout} />
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
                      <img
                        className="gallery__img"
                        src={shoesclassy11}
                        alt=""
                      />
                      <label for="img-1" className="gallery__thumb">
                        <img src={shoesclassy111} alt="" />
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
                      <img
                        className="gallery__img"
                        src={shoesclassy22}
                        alt=""
                      />
                      <label for="img-2" className="gallery__thumb">
                        <img src={shoesclassy222} alt="" />
                      </label>
                    </div>
                    <div className="gallery__item">
                      <input
                        type="radio"
                        id="img-3"
                        checked
                        name="gallery"
                        className="gallery__selector"
                      />
                      <img
                        className="gallery__img"
                        src={shoesclassy33}
                        alt=""
                      />
                      3{" "}
                      <label for="img-3" className="gallery__thumb">
                        <img src={shoesclassy333} alt="" />
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
                      <img
                        className="gallery__img"
                        src={shoesclassy44}
                        alt=""
                      />
                      <label for="img-4" className="gallery__thumb">
                        <img src={shoesclassy444} alt="" />
                      </label>
                    </div>
                  </section>
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base" itemProp="name">
                        Porto Extended Layout
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" defaultValue="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          <h4>$ {priceExtandlayout}.00</h4>
                        </span>
                      </div>
                    </div>
                    <div className="product-attribute">
                      <div className="value" itemProp="description">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur
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
                      <div className="switch-attribute-size">
                        <span id="option-label-size-137">Size : </span>
                        <div
                          className="switch-option-text"
                          index="0"
                          defaultValue="0"
                          aria-invalid="true"
                        >
                          <div
                            className={
                              ClickSize
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-136-item-166"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="166"
                            option-label="37"
                            aria-label="37"
                            defaultValue="1"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="37"
                            role="option"
                            aria-selected="true"
                            thumb-width="110"
                            thumb-height="90"
                            onClick={SizeClick}
                          >
                            <h3 onClick={Clicker}>37</h3>
                          </div>
                          <div
                            className={
                              ClickSize2
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-137-item-167"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="167"
                            option-label="38"
                            aria-label="38"
                            defaultValue="2"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="XS"
                            role="option"
                            thumb-width="110"
                            aria-selected="true"
                            thumb-height="90"
                            onClick={SizeClick2}
                          >
                            <h3 onClick={Clicker2}>38</h3>
                          </div>
                          <div
                            className={
                              ClickSize3
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-138-item-168"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="168"
                            option-label="39"
                            aria-label="39"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="39"
                            role="option"
                            aria-selected="true"
                            thumb-width="110"
                            thumb-height="90"
                            defaultValue="3"
                            onClick={SizeClick3}
                          >
                            <h3 onClick={Clicker3}>39</h3>
                          </div>
                          <div
                            className={
                              ClickSize4
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-139-item-169"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="169"
                            option-label="40"
                            aria-label="40"
                            option-tooltip-thumb=""
                            option-tooltip-value="40"
                            aria-selected="true"
                            role="option"
                            thumb-width="110"
                            defaultValue="4"
                            thumb-height="90"
                            onClick={SizeClick4}
                          >
                            <h3 onClick={Clicker4}>40</h3>
                          </div>
                        </div>
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
                            Value={Count}
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
                            <span onClick={PortoExtandlayout}>Add to Cart</span>
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
              isOpen={Portowidth}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content-9">
                <div className="bsx">
                  <BsX className="Bsk" onClick={closePortowidth} />
                </div>
                <div className="column-main">
                  <section className="gallery-9">
                    <div className="gallery__item-5">
                      <input
                        type="radio"
                        id="img-2"
                        checked
                        name="gallery-9"
                        className="gallery__selector"
                      />
                      <img
                        for="img-2"
                        className="gallery__img__ideapad"
                        src={portofullwidth}
                        alt=""
                      />{" "}
                    </div>
                  </section>
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base-1" itemProp="name">
                        Porto Full-Width
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" defaultValue="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          ${PricePortoFullWidth}.00
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
                      <div className="switch-attribute-size">
                        <span id="option-label-size-137">Size : </span>
                        <div
                          className="switch-option-text"
                          index="0"
                          defaultValue="0"
                          aria-invalid="true"
                        >
                          <div
                            className={
                              ClickSize
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-136-item-166"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="166"
                            option-label="XS"
                            aria-label="XS"
                            defaultValue="1"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="XS"
                            role="option"
                            thumb-width="110"
                            aria-selected="true"
                            thumb-height="90"
                            onClick={ClickSizeclothes}
                          >
                            <h3 onClick={Clicker}>XS</h3>
                          </div>
                          <div
                            className={
                              ClickSize2
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-137-item-167"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="167"
                            option-label="S"
                            aria-label="S"
                            value="2"
                            option-tooltip-thumb=""
                            option-tooltip-value="S"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            aria-selected="true"
                            onClick={ClickSizeclothes2}
                          >
                            <h3 onClick={Clicker2}>S</h3>
                          </div>
                          <div
                            className={
                              ClickSize3
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-138-item-168"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="168"
                            option-label="M"
                            aria-label="M"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="M"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            aria-selected="true"
                            onClick={ClickSizeclothes3}
                            defaultValue="3"
                          >
                            <h3 onClick={Clicker3}>M</h3>
                          </div>
                          <div
                            className={
                              ClickSize4
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-138-item-168"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="168"
                            option-label="L"
                            aria-label="L"
                            option-tooltip-thumb=""
                            option-tooltip-value="L"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            aria-selected="true"
                            defaultValue="4"
                            onClick={ClickSizeclothes4}
                          >
                            <h3 onClick={Clicker4}>L</h3>
                          </div>
                        </div>
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
                            Value={Count}
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
                            <span onClick={ADDTOCARTPORTOWIDTH}>
                              Add to Cart
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1__2" />
                    <div className="fieldset">
                      <div className="action22">
                        <a
                          target="_parent"
                          href="#"
                          title="Go To Product"
                          className="action-primary2"
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
              isOpen={leftSlidebar}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content-9">
                <div className="bsx">
                  <BsX className="Bsk" onClick={closeleftSlidebar} />
                </div>
                <div className="column-main">
                  <section className="gallery-9">
                    <div className="gallery__item-5">
                      <input
                        type="radio"
                        id="img-2"
                        checked
                        name="gallery-9"
                        className="gallery__selector"
                      />
                      <img
                        for="img-2"
                        className="gallery__img__ideapad"
                        src={leftSlider}
                        alt=""
                      />
                    </div>
                  </section>
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base-1" itemProp="name">
                        porto left Sidebar
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" defaultValue="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          {" "}
                          <span className="price">${pricePortoSidebar}.00</span>
                          <span className="old-price-wrapper">$299.00</span>
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
                      <div className="switch-attribute-size">
                        <span id="option-label-size-137">Size : </span>
                        <div
                          className="switch-option-text"
                          index="0"
                          defaultValue="0"
                          aria-invalid="true"
                        >
                          <div
                            className={
                              ClickSize
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-136-item-166"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="166"
                            option-label="XS"
                            aria-label="XS"
                            defaultValue="1"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="XS"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            aria-selected="true"
                            onClick={ClickSizeclothes}
                          >
                            <h3 onClick={Clicker}>XS</h3>
                          </div>
                          <div
                            className={
                              ClickSize2
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-137-item-167"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="167"
                            option-label="S"
                            aria-label="S"
                            defaultValue="2"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="S"
                            role="option"
                            thumb-width="110"
                            aria-selected="true"
                            thumb-height="90"
                            onClick={ClickSizeclothes2}
                          >
                            <h3 onClick={Clicker2}>S</h3>
                          </div>
                          <div
                            className={
                              ClickSize3
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-138-item-168"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="168"
                            option-label="M"
                            aria-label="M"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="M"
                            aria-selected="true"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            defaultValue="3"
                            onClick={ClickSizeclothes3}
                          >
                            <h3 onClick={Clicker3}>M</h3>
                          </div>
                          <div
                            className={
                              ClickSize4
                                ? "swatch-option-text action"
                                : "swatch-option-text"
                            }
                            id="option-label-size-138-item-168"
                            index="0"
                            aria-checked="false"
                            aria-describedby="option-label-size-137"
                            tabindex="0"
                            option-type="0"
                            option-id="168"
                            option-label="L"
                            aria-label="L"
                            option-tooltip-thumb=""
                            option-tooltip-defaultValue="L"
                            aria-selected="true"
                            role="option"
                            thumb-width="110"
                            thumb-height="90"
                            defaultValue="4"
                            onClick={ClickSizeclothes4}
                          >
                            <h3 onClick={Clicker4}>L</h3>
                          </div>
                        </div>
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
                            Value={Count}
                            title="qty"
                            className="input-text-qty"
                          />
                          <div className="qty-changer">
                            <a className="qty-inc-1">
                              <BsPlus className="plus" onClick={AddNumber} />
                            </a>
                            <a className="qty-dec-1" onClick={subtract}>
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
                            <span onClick={ADDTOCARTPORTOLEFTSIDEBAR}>
                              Add to Cart
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1__2" />
                    <div className="fieldset">
                      <div className="action22">
                        <a
                          target="_parent"
                          href="#"
                          title="Go To Product"
                          className="action-primary2"
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
              isOpen={RightSidebar}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content-9">
                <div className="bsx">
                  <BsX className="Bsk" onClick={closeRightSidebar} />
                </div>
                <div className="column-main">
                  <section className="gallery-9">
                    <div className="gallery__item-5">
                      <input
                        type="radio"
                        id="img-2"
                        checked
                        name="gallery-9"
                        className="gallery__selector"
                      />
                      <img
                        for="img-2"
                        className="gallery__img__ideapad"
                        src={suitcase}
                        alt=""
                      />{" "}
                    </div>
                  </section>
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base-1" itemProp="name">
                        Porto Right Sidebar
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" defaultValue="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          {" "}
                          <span className="price">${priceRightsidebar}.00</span>
                          <span className="old-price-wrapper">$299.00</span>
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
                            Value={Count}
                            title="qty"
                            className="input-text-qty"
                          />
                          <div className="qty-changer">
                            <a className="qty-inc-1">
                              <BsPlus className="plus" onClick={AddNumber} />
                            </a>
                            <a className="qty-dec-1" onClick={subtract}>
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
                            onClick={ADDtocartPortoRightsidebar}
                          >
                            <BsBag className="bs-bag-modal" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1__2" />
                    <div className="fieldset">
                      <div className="action22">
                        <a
                          target="_parent"
                          href="#"
                          title="Go To Product"
                          className="action-primary2"
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
              isOpen={Transparentimage}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content-9">
                <div className="bsx">
                  <BsX className="Bsk" onClick={closeTransparentimage} />
                </div>
                <div className="column-main">
                  <section className="gallery-9">
                    <div className="gallery__item-5">
                      <input
                        type="radio"
                        id="img-2"
                        checked
                        name="gallery-9"
                        className="gallery__selector"
                      />
                      <img
                        for="img-2"
                        className="gallery__img__ideapad"
                        src={transparentimages}
                        alt=""
                      />{" "}
                    </div>
                  </section>
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base-1" itemProp="name">
                        1 Porto Transparent Images
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" defaultValue="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          {" "}
                          <span>${priceTransparent}.00</span>
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
                            Value={Count}
                            title="qty"
                            className="input-text-qty"
                          />
                          <div className="qty-changer">
                            <a className="qty-inc-1">
                              <BsPlus className="plus" onClick={AddNumber} />
                            </a>
                            <a className="qty-dec-1" onClick={subtract}>
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
                            onClick={ADDtocarttransparentImages}
                          >
                            <BsBag className="bs-bag-modal" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1__2" />
                    <div className="fieldset">
                      <div className="action22">
                        <a
                          target="_parent"
                          href="#"
                          title="Go To Product"
                          className="action-primary2"
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
              isOpen={SportsWatch}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="mfp-content-9">
                <div className="bsx">
                  <BsX className="Bsk" onClick={closeSportsWatch} />
                </div>
                <div className="column-main">
                  <section className="gallery-9">
                    <div className="gallery__item-5">
                      <input
                        type="radio"
                        id="img-2"
                        checked
                        name="gallery-9"
                        className="gallery__selector"
                      />
                      <img
                        for="img-2"
                        className="gallery__img__ideapad"
                        src={watch}
                        alt=""
                      />{" "}
                    </div>
                  </section>
                  <div className="product-main-info">
                    <div className="page-title-wrapper">
                      <h1 className="base-1" itemProp="name">
                        Sports Wach
                      </h1>
                    </div>
                    <div className="product-reviews-summary-madel">
                      <span className="label">
                        <form className="rating">
                          <label>
                            <input type="radio" name="stars" defaultValue="1" />
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="2" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="3" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="4" />
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                            <span className="icon">★</span>
                          </label>
                          <label>
                            <input type="radio" name="stars" defaultValue="5" />
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
                          {" "}
                          <span className="price">$259.00</span>
                          <span className="old-price-wrapper">
                            ${priceSportwatch}.00
                          </span>
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
                            Value={Count}
                            title="qty"
                            className="input-text-qty"
                          />
                          <div className="qty-changer">
                            <a className="qty-inc-1">
                              <BsPlus className="plus" onClick={AddNumber} />
                            </a>
                            <a className="qty-dec-1" onClick={subtract}>
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
                            onClick={ADDtocartSportWatch}
                          >
                            <BsBag className="bs-bag-modal" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="align_center-hr_1__2" />
                    <div className="fieldset">
                      <div className="action22">
                        <a
                          target="_parent"
                          href="#"
                          title="Go To Product"
                          className="action-primary2"
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
