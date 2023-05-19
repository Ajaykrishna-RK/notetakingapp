import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearSignUpState, signUpApi } from "../../../redux/auth/signSlice";
import Swal from "sweetalert2";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Signloading } = useSelector((state) => state.signUp);

  console.log(Signloading);

  const [signupcred, setSignUpCred] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignUpCred({ ...signupcred, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signUpApi(signupcred));
  };

  useEffect(() => {
    if (Signloading) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SignUp successfully Now you can Sign-in",
        showConfirmButton: true,
        timer: 3500,
      });
      navigate("/login");
    }
    return () => {
      dispatch(clearSignUpState());
    };
  }, [Signloading]);

  return (
    <div>
      <div className="justify-center items-center flex mt-10">
        <h1 className="text-5xl text-white">Sign-Up</h1>
      </div>

      <div className="justify-center items-center flex mt-10 ml-4 mr-4">
        <div className="w-96">
          <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                name="name"
                value={signupcred.name}
                onChange={(e) => handleChange(e)}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                name="email"
                value={signupcred.email}
                onChange={(e) => handleChange(e)}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Email"
                required
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                name="password"
                value={signupcred.password}
                onChange={(e) => handleChange(e)}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Password"
                required
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
              <Link
                to="/login"
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Already have an account? Signin
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
