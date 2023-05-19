import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toy?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);
  return (
    <div>
      <h1>{toys.length}</h1>
    </div>
  );
};

export default MyToys;
