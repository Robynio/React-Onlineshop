import React, { useState, useEffect } from "react";
import ShopCartPic from "../assets/images/shoppCart.png";
import ShopCartFullPic from "../assets/images/shoppCartFull.png";

function Navbar(props) {
  const [cartContent, setCartContent] = useState(ShopCartPic);

  useEffect(() => {
    if (props.productsInCart.length > 0) {
      return setCartContent(ShopCartFullPic);
    }
  }, [props.productsInCart.length]);

  return (
    <div>
      <nav className="nav shadow rounded">
        <ul className="nav-list">
          <li id="title">Fly Veggie Shoe Co.</li>
          <li>
            <a
              className="link-danger"
              data-bs-toggle="offcanvas"
              href="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <div>
                <img src={cartContent} alt="shopCart" id="shop-cart-symbol" />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
