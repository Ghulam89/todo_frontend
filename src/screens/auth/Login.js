import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    const params = {
      email: state.email,
      password: state.password,
    };

    axios
      .post(`${Base_url}/user/login`, params)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("todo_data", res.data.user._id);
        toast.success(res.data.msg)
        navigate('/')
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="pt-6 pb-[80px]">
        <div className="flex flex-wrap justify-center">
          <motion.div
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 p-6"
          >
            <form
              onSubmit={onSubmit}
              className="bg-white rounded-lg -mt-12 border border-gray-200 p-10"
            >
              <h1 className="heading mb-5">sign up</h1>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`form-input border-gray-300 bg-white`}
                  placeholder="Email..."
                  value={state.email}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`form-input  border-gray-300 bg-white`}
                  placeholder="Password..."
                  value={state.password}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  value={`sign in`}
                  className="btn btn-indigo w-full"
                />
              </div>
              <div>
                <p>
                  Already have an account ?{" "}
                  <span className="capitalize font-medium text-base text-black">
                    <Link to="/register">sign up</Link>
                  </span>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Login;
