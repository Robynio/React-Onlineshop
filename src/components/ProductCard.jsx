import React from "react";

export default function ProductCard(props) {
  return (
    <div>
      <div className="col">
        <div className="card">
          <img src={props.img} className="card-img-top" alt="Product-2" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              Absolut stylische Sneaker, völlig tierfrei & 100% vegan und fair
              hergestellt aus natürlichen Materialien, die biologisch abbaubar
              sind.
            </p>
            <div id="productPrice">€ {props.price}</div>
            <button
              onClick={() => {
                props.onAddProduct(props.id);
              }}
              type="button"
              className="btn btn-light"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
