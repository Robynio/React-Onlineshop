import React from "react";

function ShoppingCart(props) {
  function getTotalPrice() {
    let sum = 0;
    for (let i = 0; i < props.productsInCart.length; i++) {
      sum += props.productsInCart[i].price;
    }
    return sum;
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
              {product.name}: {product.price} Euros
            </div>
          );
        })}
        <hr />
        <div>Total Price {getTotalPrice(props.productsInCart)} Euros</div>
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
