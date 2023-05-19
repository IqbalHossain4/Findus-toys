import React, { useState } from "react";
import { useEffect } from "react";

const AddToy = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const addToys = (e) => {
    e.preventDefault();
    const authorName = e.target.name.value;
    const authorSatet = e.target.author.value;
    const name = e.target.product.value;
    const subcategory = e.target.category.value;
    const available_quantity = e.target.quantity.value;
    const rating = e.target.rating.value;
    const price = e.target.price.value;
    const details = e.target.details.value;
    const email = e.target.email.value;
    const picture = e.target.photo.value;
    const toys = {
      authorName,
      authorSatet,
      picture,
      name,
      subcategory,
      available_quantity,
      rating,
      price,
      email,
      details,
    };

    fetch("http://localhost:5000/toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset("");
        }
      });
  };
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-16">Add Toys</h1>
      <form
        onSubmit={addToys}
        className="border p-16 rounded border-yellow-400 my-16"
      >
        <div className="w-full text-center">
          <div className="mb-8 w-auto  ">
            <input
              className="mr-4 mb-4 w-full md:w-1/3 p-2 md:w-1/3 border outline-none border-blue-400 rounded"
              type="text"
              name="name"
              placeholder="Author name"
            />
            <input
              className="p-2 w-full md:w-1/3 border outline-none border-blue-400 rounded"
              type="text"
              name="author"
              placeholder="Author State"
            />
          </div>
          <div className="mb-8 w-auto">
            <input
              className="mr-4 mb-4 w-full md:w-1/3 p-2 border outline-none border-blue-400 rounded"
              type="text"
              name="product"
              placeholder="product name"
            />
            <input
              className="p-2 w-full md:w-1/3 border outline-none border-blue-400 rounded"
              max="4"
              type="number"
              name="category"
              placeholder="category"
            />
          </div>
          <div className="mb-8 w-auto">
            <input
              className="mr-4 mb-4 w-full md:w-1/3 p-2 border outline-none border-blue-400 rounded"
              type="text"
              name="quantity"
              placeholder="quantity"
            />
            <input
              className="p-2 w-full md:w-1/3 border outline-none border-blue-400 rounded"
              max="5"
              type="number"
              name="rating"
              placeholder="ratings"
            />
          </div>

          <div className="mb-8 w-auto">
            <input
              className="p-2 mr-4 mb-4 w-full md:w-1/3 border outline-none border-blue-400 rounded"
              type="text"
              name="price"
              placeholder="Price"
            />
            <input
              className=" w-full md:w-1/3 p-2 border outline-none border-blue-400 rounded"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>
        <textarea
          name="details"
          className="text-center w-full   font-semibold p-2 border outline-none border-blue-400 rounded mb-4"
          placeholder="Product details"
        ></textarea>
        <input
          className="text-center w-full   font-semibold p-2 border outline-none border-blue-400 rounded mb-4"
          placeholder="photo url"
          type="text"
          name="photo"
        />
        <input
          className="transition hover:bg-gray-800 bg-yellow-500 text-center w-full mt-4 py-2 rounded text-white font-bold"
          type="submit"
          value="Add Toys"
        />
      </form>
    </div>
  );
};

export default AddToy;
