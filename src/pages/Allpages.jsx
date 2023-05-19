import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStarHalfAlt } from "react-icons/fa";
const Allpages = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  console.log(toys);
  return (
    <div className="overflow-x-auto w-full mb-16">
      <h1 className="text-center font-bold text-3xl my-16">Our Popular Toys</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-yellow-500">
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
                  <td>${price}</td>
                  <td>{subcategory}</td>
                  <td>{available_quantity}</td>
                  <th>
                    <Link to={`/details/${_id}`}>
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
