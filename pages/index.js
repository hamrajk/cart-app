import Head from "next/head";
import { FaDog } from "react-icons/fa";

export default function Home() {
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
        <script src="/Users/hamrajkhangura/Documents/next-learning/cart-app/node_modules/tw-elements/dist/js/index.min.js"></script>
      </Head>
      <div className="flex flex-wrap w-full px-6 py-8 bg-slate-900 text-white justify-between items-center">
        <h1 className="text-8xl p-2 font-medium">Woofmart</h1>
        <FaDog className="absolute p-2 left-[28rem] text-8xl" />
        <p className="p-2 text-3xl">For All Your Dog Needs!</p>
      </div>
      {/* <div className="flex h-screen">
        <div className="flex-col w-1/5 py-8 px-8 items-left bg-slate-300">
          <h1 className="text-3xl font-bold py-8">Categories</h1>
          <ul className="text-lg leading-8 font-semibold">
            <li>Toys</li>
            <li>Treats</li>
            <li>Foods</li>
            <li>Clothes</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div className="w-4/5 flex-col min-h-fit">
          <div className="flex h-1/5 bg-[#f6f6f6] justify-center items-center">
            <h1 className="text-6xl p-2 font-semibold">Toys</h1>
            <img className="h-full" src="/dog-playing.png" />
          </div>
          <div className="flex-col h-4/5 ">
            <div className="h-1/5  bg-white border-slate-500 border-8	flex-auto m-0">
              Product 1
            </div>
            <div className="h-1/5  bg-white border-slate-500 border-8	flex-auto m-0">
              Product 1
            </div>
            <div className="h-1/5  bg-white border-slate-500 border-8	flex-auto m-0">
              Product 1
            </div>
          </div>
        </div>
      </div> */}
      <div class="flex items-start">
        <ul
          class="nav nav-tabs flex flex-col flex-wrap w-1/5 list-none border-b-0 pl-0 mr-4"
          id="tabs-tabVertical"
          role="tablist"
        >
          <li class="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-homeVertical"
              class="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
          active
        "
              id="tabs-home-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-homeVertical"
              role="tab"
              aria-controls="tabs-homeVertical"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li class="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-profileVertical"
              class="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        "
              id="tabs-profile-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profileVertical"
              role="tab"
              aria-controls="tabs-profileVertical"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
          <li class="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-messagesVertical"
              class="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        "
              id="tabs-messages-tabVertical"
              data-bs-toggle="pill"
              data-bs-target="#tabs-messagesVertical"
              role="tab"
              aria-controls="tabs-messagesVertical"
              aria-selected="false"
            >
              Messages
            </a>
          </li>
        </ul>
        <div class="tab-content" id="tabs-tabContentVertical">
          <div
            class="tab-pane fade show active"
            id="tabs-homeVertical"
            role="tabpanel"
            aria-labelledby="tabs-home-tabVertical"
          >
            <div className="flex-col min-h-fit w-full">
              <div className="flex h-1/5 bg-[#f6f6f6] justify-center items-center">
                <h1 className="text-6xl p-2 font-semibold">Toys</h1>
                <img className="h-full" src="/dog-playing.png" />
              </div>
              <div className="flex-col h-4/5 ">
                <div className="h-1/5  bg-white border-slate-500 border-8	flex-auto m-0">
                  Product 1
                </div>
                <div className="h-1/5  bg-white border-slate-500 border-8	flex-auto m-0">
                  Product 1
                </div>
                <div className="h-1/5  bg-white border-slate-500 border-8	flex-auto m-0">
                  Product 1
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="tabs-profileVertical"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabVertical"
          >
            Tab 2 content vertical
          </div>
          <div
            class="tab-pane fade"
            id="tabs-messagesVertical"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabVertical"
          >
            Tab 3 content vertical
          </div>
        </div>
      </div>
      <div className="h-24 text-white items-center justify-center flex bg-slate-900">
        Footer
      </div>
    </div>
  );
}
