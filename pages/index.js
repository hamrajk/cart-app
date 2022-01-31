import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ItemPanel from "../components/ItemPanel";
import Sidebar from "../components/Sidebar";
import data from "../data";
import Collapsible from "react-collapsible";

export default function Home() {
  const { products } = data;
  console.log(products);
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
      <div className="flex flex-col justify-end  bg-slate-400">
        hi
        <p>hi</p>
      </div>

      <div className="flex h-full">
        <Sidebar />
        <div className="w-4/5 flex flex-col ">
          <Banner />
          <div className="flex flex-col">
            {products.map((product) => (
              <ItemPanel key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div className="h-24 text-white items-center justify-center flex bg-slate-900">
        Footer
      </div>
    </div>
  );
}
