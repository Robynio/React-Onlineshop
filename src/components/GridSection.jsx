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

      {/* <Product2 name="Vegan Retro Sneaker 2" price="155€" button={<button onClick={() => (props.onAddItem)} type="button" className="btn btn-light">Add to Cart</button>} img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-retro-90s-sneakers-low-flamingos-life-512021_360x.jpg?v=1653263080"/>

    <Product3 name="Vegan Retro Sneaker 3" price="145€" button={<button onClick={() => (props.onAddItem)} type="button" className="btn btn-light">Add to Cart</button>} img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-classic-70s-sneakers-low-flamingos-life-339445_360x.jpg?v=1650475462"/>

    <Product4 name="Vegan Retro Sneaker 4" price="175€" button={<button onClick={() => (props.onAddItem)} type="button" className="btn btn-light">Add to Cart</button>} img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-old-80s-sneakers-high-flamingos-life-721073_360x.jpg?v=1631706130"/>

    <Product5 name="Vegan Retro Sneaker 5" price="155€" button={<button onClick={() => (props.onAddItem)} type="button" className="btn btn-light">Add to Cart</button>} img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-retro-90s-sneakers-low-flamingos-life-434830_360x.jpg?v=1633458170"/>

    <Product6 name="Vegan Retro Sneaker 6" price="175€" button={<button onClick={() => (props.onAddItem)} type="button" className="btn btn-light">Add to Cart</button>} img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-old-80s-sneakers-high-flamingos-life-793921_360x.jpg?v=1631704789"/>

    <Product7 name="Vegan Retro Sneaker 7" price="125€" button={<button onClick={() => (props.onAddItem)} type="button" className="btn btn-light">Add to Cart</button>} img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-roland-v3-2021-sneakers-low-flamingos-life-313622_360x.jpg?v=1628720232"/>

    <Product8 name="Vegan Retro Sneaker 8" price="165€" button={<button onClick={() => (props.onAddItem)} type="button" className="btn btn-light">Add to Cart</button>} img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-old-80s-sneakers-high-flamingos-life-567566_360x.jpg?v=1631706119"/> */}
    </div>
  );
}

export default GridSection;
