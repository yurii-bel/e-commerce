import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header className="shadow-lg">
        <div className="container mx-auto text-center py-4">
          <h1 className="text-xl md:text-3xl font-semibold text-blue-200">
            Welcome to Our E-Commerce Store
          </h1>
          <p className="text-slate-400 mt-2">
            Discover the latest trends in fashion, electronics, and more.
          </p>
        </div>
      </header>

      {/* Hero Image with Parallax Effect */}
      <section
        className="bg-cover bg-center h-screen "
        // style={{
        //   backgroundImage: 'url("hero-image.jpg")', // Replace with your image URL
        // }}
      >
        {/* <div className="z-1 mix-blend-overlay absolute bg-cover inset-0 bg-[url('/home-bg.jpg')] opacity-90"></div> */}
        <div className="mx-auto h-full flex justify-center items-center bg-gradient-to-r from-sky-900 to-indigo-300 md:bg-cover md:bg-[url('/e4.jpg')] md:bg-transparent">
          <div className="text-center bg-black/30 p-2 rounded-md text-slate-100">
            <h2 className="text-xl font-semibold md:text-4xl ">
              Explore the World of E-commerce
            </h2>
            <p className="text-md text-blue-200 bg-slate-900 px-1 rounded-sm md:text-xl mt-4">
              Find the latest products at unbeatable prices.
            </p>

            <Link
              to="/store"
              className="mt-6 inline-block bg-slate-700 text-white py-3 px-6 rounded-md hover:bg-slate-900 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-slate-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 mb-6">
            Stay updated with our latest products and offers.
          </p>
          <div className="flex justify-center">
            <div className="border-2 border-white px-4 py-2 rounded-l-md focus:outline-none">
              Hurry up!
            </div>
            <button className="bg-white text-slate-600 px-6 py-2 rounded-r-md hover:bg-slate-800 hover:text-white transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">{/* Footer content */}</div>
      </footer>
    </div>
  );
};

export default Home;
