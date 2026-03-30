import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 navbar">

        {/* LEFT */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>

            <ul className="menu menu-sm cursor-pointer dropdown-content mt-3 p-3 shadow bg-white rounded-box w-56">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
              <li><a className="hover:text-purple-600"><button>Login</button></a></li>
            </ul>
          </div>

          {/* Logo */}
          <a className="text-2xl sm:text-3xl font-bold text-purple-600">
            DigiTools
          </a>

        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex cursor-pointer">
          <ul className="menu menu-horizontal gap-6 text-sm font-medium text-gray-700">
            <li><a className="hover:text-purple-600">Products</a></li>
            <li><a className="hover:text-purple-600">Features</a></li>
            <li><a className="hover:text-purple-600">Pricing</a></li>
            <li><a className="hover:text-purple-600">Testimonials</a></li>
            <li><a className="hover:text-purple-600">FAQ</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex items-center gap-3 sm:gap-4">

          {/* Cart */}
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 2h13m0 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] px-1.5 rounded-full">
              8
            </span>
          </div>

          {/* Login */}
          <button className="hidden sm:block text-sm text-gray-700 cursor-pointer hover:text-purple-600 font-semibold">
            Login
          </button>

          {/* CTA */}
          <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded-full cursor-pointer hover:bg-purple-700 transition font-semibold whitespace-nowrap">
            Get Started
          </button>

        </div>

      </div>
    </div>
  );
};

export default Navbar;