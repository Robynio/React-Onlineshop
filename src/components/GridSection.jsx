import React from "react";
import ProductCard from "./ProductCard";

function GridSection(props) {
  function onAddProduct(id) {
    console.log("grid section: " + id);
    props.onAddProduct(id);
  }
  return (
    <div
      className="container-md row row-cols-1 row-cols-md-4 g-4 pt-5 pb-4 gx-5 gy-5"
      style={{ margin: "auto" }}
    >
      {props.products.map((product) => {
        return (
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.image}
            onAddProduct={onAddProduct}
          />
        );
      })}
    </div>
  );
}

export default GridSection;
