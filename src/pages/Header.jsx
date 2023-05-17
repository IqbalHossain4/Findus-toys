import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product">All Toys</Link>
      </li>
      <li>
        <Link to="/product">My Toys</Link>
      </li>
      <li>
        <Link to="/product">Add A Toy</Link>
      </li>
      <li>
        <Link to="/about">Blogs</Link>
      </li>
    </>
  );

  const [showSrc, setShowSrc] = useState(false);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="w-[80px] h-[50px]">
            <Link to="/">
              <img
                className="w-full h-full"
                src={
                  "https://cdn.dribbble.com/users/1700393/screenshots/14210857/media/53dda477de8b0c57b3abd5d144e89312.png"
                }
                alt=""
              />
            </Link>
          </div>
          <div>
            <h1 className="font-bold text-1xl text-yellow-500">FINDUS TOYS</h1>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{navItems}</ul>
      </div>

      <div className="navbar-end">
        <div className="mr-8">
          {!showSrc ? (
            <button
              onClick={() => setShowSrc(true)}
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          ) : (
            <div className="flex items-center">
              <div className="w-38 relative ">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
                <button
                  onClick={() => setShowSrc(false)}
                  className="absolute h-12 w-38 font-bold my-auto right-4"
                >
                  X
                </button>
              </div>
              <button className="border px-3 py-3  rounded-md transition hover:bg-black hover:text-white ">
                Search
              </button>
            </div>
          )}
        </div>
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Header;
