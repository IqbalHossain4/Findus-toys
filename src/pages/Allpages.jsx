import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStarHalfAlt } from "react-icons/fa";
const Allpages = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-16">Our Popular Toys</h1>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {toys.map((toy) => {
          return (
            <div
              key={toy._id}
              className="border rounded p-4 shadow-md shadow-yellow-500"
            >
              <div className="h-[350px]">
                <img src={toy.picture} className="w-[100%] h-[100%]" alt="" />
              </div>
              <div className="font-semibold text-md">
                <h3>Name: {toy.name}</h3>
                <p className="my-1">Price: ${toy.price}</p>
                <p className="flex items-center">
                  Rating:
                  <span className="ms-2">
                    <FaStarHalfAlt className="text-yellow-500" />
                  </span>
                  <span>{toy.rating}</span>
                </p>
              </div>
              <div className="text-center">
                <Link to={`/details/${toy._id}`}>
                  <button className="transition hover:bg-gray-800 bg-yellow-500 text-center w-full mt-4 py-2 rounded text-white font-bold">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allpages;
