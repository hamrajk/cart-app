import Head from "next/head";
import { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ItemPanel from "../components/ItemPanel";
import Sidebar from "../components/Sidebar";
import data from "../data";

export default function Home() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  // onclick handler for adding items to cart
  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // onclick handler for removing items from cart
  const onRemove = (product) => {
    if (product.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  // console.log(products);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <div className="flex h-full">
        <Sidebar cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        <div className="w-4/5 flex flex-col ">
          <Banner />
          <div className="flex flex-col">
            {products.map((product) => (
              <ItemPanel onAdd={onAdd} key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
