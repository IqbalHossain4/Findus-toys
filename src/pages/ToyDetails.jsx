import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";

const ToyDetails = () => {
  const toy = useLoaderData();
  const { picture, name, price, rating, available_quantity } = toy;
  return (
    <div className="w-[100%] h-[600px] mt-16">
      <div className="md:flex items-center justify-evenly">
        <div className="md:w-[450px] h-[400px]">
          <img src={picture} alt="" />
        </div>
        <div className="font-semibold text-md">
          <h3>Name: {name}</h3>
          <p className="my-1">Price: ${price}</p>
          <p className="flex items-center">
            Rating:
            <span className="ms-2">
              <ReactStarsRating className="flex items-center " value={rating} />
            </span>
            <span>{rating}</span>
          </p>
          <button className="transition hover:bg-gray-800 bg-yellow-500 text-center w-full mt-8 py-2 rounded text-white font-bold">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
