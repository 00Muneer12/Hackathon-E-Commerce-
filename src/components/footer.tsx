import React from 'react';
import { GiSofa } from "react-icons/gi";

export default function Footer() {
  return (
    <div className="">
      <footer className="text-gray-600 body-font">
        <div className="py-10 md:py-24">
          <div className="flex flex-wrap md:flex-nowrap md:text-center text-center justify-center">
            <div className="w-full md:w-64 flex-shrink-0 mx-auto mb-6 md:mb-0">
              <a className="flex title-font font-medium items-center justify-center text-gray-900">
                <GiSofa className="text-emerald-500 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                <span className="ml-3 text-xl">Comporty</span>
              </a>
              <p className="mt-2 text-xs text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-xs mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-gray-800 text-xs">Sofa</a></li>
                <li><a className="text-gray-600 hover:text-gray-80 text-xs">Arm Chair</a></li>
                <li><a className="text-gray-600 hover:text-gray-800 text-xs">Wing Chair</a></li>
                <li><a className="text-gray-600 hover:text-gray-800 text-xs">Desk Chair</a></li>
              </nav>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-xs mb-3">Support</h2>
              <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-gray-800 text-xs">Help And Support</a></li>
                <li><a className="text-gray-600 hover:text-gray-800 text-xs">Term and Condition</a></li>
                <li><a className="text-gray-600 hover:text-gray-800 text-xs">Privacy Policy</a></li>
                <li><a className="text-gray-600 hover:text-gray-800 text-xs">Help</a></li>
              </nav>
            </div>
            {/* <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0 space-y-2">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-xs mb-3">NEWSLATTER</h2>
              <div className="flex flex-wrap justify-center items-end">
                <div className="relative w-full sm:w-40 md:w-auto mb-3 md:mb-0">
                  <label htmlFor="footer-field" className="leading-7 text-xs text-gray-600"></label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center">Bitters chicharrones fanny pack<br className="lg:block hidden" />waistcoat green juice</p>
            </div> */}
           <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xs font-semibold text-gray-500 text-left uppercase mb-2">
        Newsletter
      </h2>
      <form className="flex items-center space-x-2">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {/* Subscribe Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition">
          Subscribe
        </button>
      </form>
    </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
