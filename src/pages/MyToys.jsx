import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [deleteToy, setDeleteToy] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/toy?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [toys]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success",
          fetch(`http://localhost:5000/toy/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deleteCount > 0) {
                setDeleteToy(!deleteToy);
              }
            })
        );
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Product Name</th>
              <th>Author</th>
              <th>Quantity</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => {
              return (
                <tr key={toy._id}>
                  <th>
                    <label>
                      <button
                        onClick={() => handleDelete(toy._id)}
                        title="delete item"
                        className="text-red-600 text-2xl"
                      >
                        X
                      </button>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={toy.picture} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{toy.name}</div>
                        <div className="text-sm opacity-50">
                          Price: ${toy.price}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {toy.authorName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {toy.authorSatet}
                    </span>
                  </td>
                  <td>{toy.available_quantity}</td>
                  <th>
                    <Link to={`/updateToy/${toy._id}`}>
                      <button className="btn btn-ghost btn-xs">Edit</button>
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

export default MyToys;
