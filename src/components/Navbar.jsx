import React from "react";
import ShopCartPic from "../assets/images/shoppCart.png";

function Navbar(props) {
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
              <img src={ShopCartPic} alt="shopCart" style={{ width: "45px" }} />
            </a>
          </li>
        </ul>
        <div></div>
      </nav>
    </div>
  );
}

export default Navbar;
