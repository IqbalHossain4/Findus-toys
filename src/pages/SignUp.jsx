import { updateProfile } from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { user, createUser } = useContext(AuthContext);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [selectImg, setSelectImg] = useState("");

  const imgChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectImg(e.target.files[0]);
      console.log(e);
    }
  };

  // dynamic title
  const titles = (title) => {
    useEffect(() => {
      document.title = `${title}-Findus`;
    }, [title]);
  };

  titles("SignUp");

  const handleSignUp = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    setEmailSuccess("");
    setPasswordSuccess("");
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const myPhoto = URL.createObjectURL(selectImg);
    if (password == "") {
      setPasswordError("please fill up Empty file ");
      return;
    }
    if (email == "") {
      setEmailError("please fill up Empty file ");
      return;
    }
    if (password.length < 6) {
      setPasswordError("need at least six character");
      return;
    }
    createUser(email, password, name, myPhoto)
      .then((result) => {
        const user = result.user;
        setEmailSuccess("Login SuccessFull");

        updateProfile(user, {
          displayName: name,
          photoURL: myPhoto,
        })
          .then(() => {
            console.log("Name added");
          })
          .catch((error) => {
            console.log(error.message);
          });
        navigate(from);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);

        // setPasswordError(error.message);
      });
  };

  return (
    <div className="mb-16">
      <h1 className="text-center font-bold bg-black py-4 text-yellow-500 text-4xl underline mt-16">
        Please SignUp
      </h1>
      <div className="md:flex items-center justify-evenly">
        <div className="md:w-2/6">
          <video src={"login.mp4"} autoPlay></video>
        </div>
        <div>
          <div
            style={{
              width: "500px",
              margin: "0 auto",
              marginTop: "40px",
            }}
            className="border bg-black text-yellow-500 rounded pt-8 p-8 flex items-center justify-center mt-16 shadow-xl shadow-yellow-500"
          >
            <form onSubmit={handleSignUp}>
              <div>
                <p className="font-semibold">Name:</p>
                <input
                  className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  id=""
                />
              </div>

              <div className="mt-4">
                <p className="font-semibold">Email:</p>
                <input
                  className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  type="email"
                  placeholder="Email Please"
                  name="email"
                  id=""
                  required
                />
                <br />
                <p className="text-red-400 ">{emailError}</p>
                <p className="text-green-600">{emailSuccess}</p>
              </div>

              <div className="mt-4">
                <p className="font-semibold">Password:</p>
                <input
                  className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id=""
                />
                <br />
                <p className="text-red-600">{passwordError}</p>
              </div>
              <input
                className="mt-4"
                type="file"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                onChange={imgChange}
              />
              <input
                className="transition hover:bg-gray-800 bg-yellow-500  text-center w-full mt-4 py-2 rounded text-white font-bold"
                type="submit"
                value="SignUp"
              />
              <p className="text-white mt-2">
                I have an Account?
                <Link to="/signin" className="ms-2 text-teal-600 font-semibold">
                  SignIn
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
