import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product1 from "./components/Product1";
import Product2 from "./components/Product2";
import Product3 from "./components/Product3";
import Product4 from "./components/Product4";
import Product5 from "./components/Product5";
import Product6 from "./components/Product6";
import Product7 from "./components/Product7";
import Product8 from "./components/Product8";



function App() {
  return (
    <div>
    <Navbar/>
    
    <div className="container-md row row-cols-1 row-cols-md-4 g-4 pt-5 pb-5 gx-5 gy-5"
    style={{margin:"auto"}}>

    <Product1 name="Vegan Retro Sneaker 2" price="155€" id="2" img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-retro-90s-sneakers-low-flamingos-life-512021_360x.jpg?v=1653263080"/>

    <Product2 name="Vegan Retro Sneaker 2" price="155€" id="2" img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-retro-90s-sneakers-low-flamingos-life-512021_360x.jpg?v=1653263080"/>

    <Product3 name="Vegan Retro Sneaker 3" price="145€" id="3" img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-classic-70s-sneakers-low-flamingos-life-339445_360x.jpg?v=1650475462"/>

    <Product4 name="Vegan Retro Sneaker 4" price="175€" id="4" img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-old-80s-sneakers-high-flamingos-life-721073_360x.jpg?v=1631706130"/>

    <Product5 name="Vegan Retro Sneaker 5" price="155€" id="5" img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-retro-90s-sneakers-low-flamingos-life-434830_360x.jpg?v=1633458170"/>

    <Product6 name="Vegan Retro Sneaker 6" price="175€" id="6" img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-old-80s-sneakers-high-flamingos-life-793921_360x.jpg?v=1631704789"/>

    <Product7 name="Vegan Retro Sneaker 7" price="125€" id="7" img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-roland-v3-2021-sneakers-low-flamingos-life-313622_360x.jpg?v=1628720232"/>

    <Product8 name="Vegan Retro Sneaker 8" price="165€" id="8" img="https://cdn.shopify.com/s/files/1/0277/7736/8147/products/flamingos-life-old-80s-sneakers-high-flamingos-life-567566_360x.jpg?v=1631706119"/>
    </div>

    <Footer/>
    
    </div>
  );
}

export default App;
