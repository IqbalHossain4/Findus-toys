import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Allpages = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  // dynamic title
  const titles = (title) => {
    useEffect(() => {
      document.title = `${title}-Findus`;
    }, [title]);
  };

  titles("All-Toys");

  useEffect(() => {
    fetch("https://ass11.vercel.app/toy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  //for search
  const handleSearch = () => {
    fetch(`https://ass11.vercel.app/search/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  //sorting
  const handleSorting = () => {
    fetch("https://ass11.vercel.app/sort")
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  const handleDeceSorting = () => {
    fetch("https://ass11.vercel.app/sorts")
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="overflow-x-auto w-full mb-16">
      <h1 className="text-center underline bg-black py-4 text-yellow-500 font-bold text-4xl my-16">
        Popular Toys
      </h1>
      <div className="w-full text-center mb-8">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
          className="input w-[350px]  border-yellow-500 mt-1 px-3 py-2 bg-white  text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <button
          onClick={handleSearch}
          className="py-[14px] px-[20px] ms-2 font-semibold rounded-md bg-yellow-500"
        >
          Search
        </button>
      </div>
      <div className="w-full text-right">
        <button
          onClick={handleSorting}
          className="py-2  text-white font-semibold px-6 bg-black rounded-md mb-8 hover:bg-yellow-500"
        >
          Acending...
        </button>

        <button
          onClick={handleDeceSorting}
          className="py-2 ms-4 text-white font-semibold px-6 bg-black rounded-md mb-8 hover:bg-yellow-500"
        >
          Decending...
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Author</th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => {
              const {
                _id,
                picture,
                authorName,
                name,
                subcategory,
                available_quantity,
                price,
                details,
              } = toy;
              return (
                <tr key={toy._id}>
                  <th>
                    <label>{authorName ? authorName : "Unknown Parson"}</label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={picture} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">${price}</td>
                  <td className="font-semibold">{subcategory}</td>
                  <td className="font-semibold">{available_quantity}</td>
                  <th>
                    <Link to={user ? `/details/${_id}` : "/signin"}>
                      <button className="transition hover:bg-gray-800 bg-yellow-500 text-center w-full mt-4 py-2 rounded text-white font-bold">
                        View Details
                      </button>
                    </Link>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allpages;
