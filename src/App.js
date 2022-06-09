import React, { useState } from "react";
import Footer from "./components/Footer";
import GridSection from "./components/GridSection";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);

  let products = [
    {
      id: 1,
      name: "Vegan Retro Sneaker 1",
      price: 155,
      image:
        "https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-retro-90s-sneakers-low-flamingos-life-512021_360x.jpg",
    },
    {
      id: 2,
      name: "Vegan Retro Sneaker 2",
      price: 175,
      image:
        "https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-old-80s-sneakers-high-flamingos-life-721073_360x.jpg",
    },
    {
      id: 3,
      name: "Vegan Retro Sneaker 3",
      price: 135,
      image:
        "https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-classic-70s-sneakers-low-flamingos-life-339445_360x.jpg",
    },
    {
      id: 4,
      name: "Vegan Retro Sneaker 4",
      price: 155,
      image:
        "https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-retro-90s-sneakers-low-flamingos-life-434830_360x.jpg",
    },
    {
      id: 5,
      name: "Vegan Retro Sneaker 5",
      price: 175,
      image:
        "https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-old-80s-sneakers-high-flamingos-life-793921_360x.jpg",
    },
    {
      id: 6,
      name: "Vegan Retro Sneaker 6",
      price: 135,
      image:
        "https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-roland-v3-2021-sneakers-low-flamingos-life-313622_360x.jpg",
    },
    {
      id: 7,
      name: "Vegan Retro Sneaker 7",
      price: 175,
      image:
        "https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-old-80s-sneakers-high-flamingos-life-567566_360x.jpg",
    },
    {
      id: 8,
      name: "Vegan Retro Sneaker 8",
      price: 155,
      image:
        "https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-roland-v5-sneakers-low-flamingos-life-518225_360x.jpg",
    },
  ];

  // let productsInCart = [];

  const onAddProduct = (id) => {
    console.log("app: " + id);
    let selectedProduct = products.filter((p) => p.id === id);
    let product = selectedProduct[0];
    console.log("Adding Item: " + product.name + " Price: " + product.price);
    setProductsInCart([...productsInCart, product]);
  };

  let totalPrice = null;
  let price = null;

  // const getTotalPrices = (prevState) => {
  //   totalPrice = prevState.map((data) => {
  //     price = data.price;

  //     for (let index = 0; index < price.length; index++) {
  //       totalPrice += price[index];
  //     }
  //   });
  //   console.log(totalPrice);
  // };

  // const deleteItem = (id) => {
  //   setShoppingList((prevState) => {
  //     prevState.filter((element) => element.id !== id);
  //   });
  // };

  return (
    <div>
      <Navbar />
      <ShoppingCart productsInCart={productsInCart} />
      <GridSection products={products} onAddProduct={onAddProduct} />
      <Footer />
    </div>
  );
}

export default App;
