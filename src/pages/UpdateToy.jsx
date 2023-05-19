import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toys = useLoaderData();
  const { _id, name, subcategory, available_quantity, price, details } = toys;
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.product.value;
    const subcategory = e.target.category.value;
    const available_quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const details = e.target.details.value;
    const UpdateToys = {
      name,
      subcategory,
      available_quantity,
      price,
      details,
    };
    fetch(`http://localhost:5000/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateToys),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("ok");
        }
      });
  };
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-16">UpdateToys</h1>
      <form
        onSubmit={handleUpdate}
        className="border p-16 rounded border-yellow-400 my-16"
      >
        <div className="w-full text-center">
          <div className="mb-8 w-auto">
            <input
              className="mr-4 mb-4 w-full md:w-1/3 p-2 border outline-none border-blue-400 rounded"
              type="text"
              defaultValue={name}
              name="product"
              placeholder="product name"
            />
            <input
              className="p-2 w-full md:w-1/3 border outline-none border-blue-400 rounded"
              max="4"
              type="number"
              defaultValue={subcategory}
              name="category"
              placeholder="category"
            />
          </div>
          <div className="mb-8 w-auto">
            <input
              className="mr-4 mb-4 w-full md:w-1/3 p-2 border outline-none border-blue-400 rounded"
              type="text"
              defaultValue={available_quantity}
              name="quantity"
              placeholder="quantity"
            />
            <input
              className="p-2 mr-4 mb-4 w-full md:w-1/3 border outline-none border-blue-400 rounded"
              type="text"
              defaultValue={price}
              name="price"
              placeholder="Price"
            />
          </div>
        </div>
        <textarea
          name="details"
          defaultValue={details}
          className="text-center w-full   font-semibold p-2 border outline-none border-blue-400 rounded mb-4"
          placeholder="Product details"
        ></textarea>

        <input
          className="transition hover:bg-gray-800 bg-yellow-500 text-center w-full mt-4 py-2 rounded text-white font-bold"
          type="submit"
          value="Update Toy"
        />
      </form>
    </div>
  );
};

export default UpdateToy;
