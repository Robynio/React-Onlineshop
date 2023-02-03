import React, { useState } from "react";
import Footer from "./components/Footer";
import GridSection from "./components/GridSection";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import img1 from "./assets/images/90s-sneakers-low.jpg";
import img2 from "./assets/images/old-80s-sneakers-high.jpg";
import img3 from "./assets/images/classic-70s-sneakers-low.jpg";
import img4 from "./assets/images/retro-90s-sneakers-low.jpg";
import img5 from "./assets/images/red-old-80s-sneakers-high.jpg";
import img6 from "./assets/images/green-roland-v7-sneakers-low.jpg";
import img7 from "./assets/images/beige-old-80s-sneakers-high.jpg";
import img8 from "./assets/images/dark-roland-v5-sneakers-low.jpg";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);

  let products = [
    {
      id: 1,
      name: "Vegan Retro Sneaker 1",
      price: 155,
      image: img1,
    },
    {
      id: 2,
      name: "Vegan Retro Sneaker 2",
      price: 175,
      image: img2,
    },
    {
      id: 3,
      name: "Vegan Retro Sneaker 3",
      price: 135,
      image: img3,
    },
    {
      id: 4,
      name: "Vegan Retro Sneaker 4",
      price: 155,
      image: img4,
    },
    {
      id: 5,
      name: "Vegan Retro Sneaker 5",
      price: 175,
      image: img5,
    },
    {
      id: 6,
      name: "Vegan Retro Sneaker 6",
      price: 135,
      image: img6,
    },
    {
      id: 7,
      name: "Vegan Retro Sneaker 7",
      price: 175,
      image: img7,
    },
    {
      id: 8,
      name: "Vegan Retro Sneaker 8",
      price: 155,
      image: img8,
    },
  ];

  const onAddProduct = (id) => {
    let selectedProduct = products.filter((p) => p.id === id);
    let product = selectedProduct[0];
    setProductsInCart([...productsInCart, product]);
  };

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
