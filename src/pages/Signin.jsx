import React, { useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Signin = () => {
  const { user, signIn, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // dynamic title
  const titles = (title) => {
    useEffect(() => {
      document.title = `${title}-Findus`;
    }, [title]);
  };

  titles("SignIn");

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="mb-16">
      <h1 className="text-center underline bg-black py-4 text-yellow-500 font-bold text-4xl mt-16">
        Please SignIn
      </h1>
      <div className="md:flex items-center justify-evenly">
        <div className="md:w-2/6">
          <video src={"signup.mp4"} autoPlay></video>
        </div>
        <div>
          <div
            style={{
              width: "500px",
              margin: "0 auto",
              marginTop: "40px",
            }}
            className="border bg-black text-yellow-500 pt-16 rounded p-8 mt-16 shadow-xl shadow-yellow-500"
          >
            <form onSubmit={handleSignIn}>
              <div>
                <p className="font-semibold">Email:</p>
                <input
                  className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  type="email"
                  placeholder="Email Please"
                  name="email"
                  id=""
                />
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
              </div>
              <input
                className="transition hover:bg-gray-800 bg-yellow-500 text-center w-full mt-4 py-2 rounded text-white font-bold"
                type="submit"
                value="SignIn"
              />
              <p className="text-white mt-2">
                Do you have an Account?
                <Link to="/signUp" className="ms-2 text-teal-600">
                  SignUp
                </Link>
              </p>
            </form>
            <div className="flex mt-4 items-center justify-center">
              <button onClick={handleGoogle} className="w-12">
                <img
                  src={
                    "https://freepngimg.com/download/google/66903-google-pay-gboard-platform-logo-cloud.png"
                  }
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
