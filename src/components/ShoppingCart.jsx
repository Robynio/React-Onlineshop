import React, { useState } from "react";

function ShoppingCart(props) {
  const [discount, setDiscount] = useState();

  function getTotalPrice() {
    let sum = 0;
    for (let i = 0; i < props.productsInCart.length; i++) {
      sum += props.productsInCart[i].price;
    }
    return sum;
  }

  let totalPrice = getTotalPrice(props.productsInCart);
  let discountPrice = (totalPrice * 0.85).toFixed(2);

  function getDiscount(event) {
    if (event.key === "Enter") {
      setDiscount(
        <div>
          You saved 15%! Your total price is: <b>{discountPrice} Euros</b>
        </div>
      );
    }
  }

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h5 id="offcanvasRightLabel">Your Shopping Cart</h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        {props.productsInCart.map((product) => {
          return (
            <div>
              <div>
                <img
                  src={product.image}
                  style={{ width: "150px" }}
                  alt="product"
                />
              </div>
              {product.name}: {product.price},- Euros
            </div>
          );
        })}
        <hr />
        <div>
          Total Price: <b>{totalPrice},- Euros</b>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px dashed black",
            height: "1px",
            color: "#000000",
            background: "transparent",
          }}
        />

        <input
          type="text"
          placeholder="Enter your coupon code"
          onKeyDown={getDiscount}
        />
        <div>
          <br />
          {discount}
        </div>
      </div>

      <div>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">Shopping Cart</div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
