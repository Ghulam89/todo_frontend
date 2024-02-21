import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {

  const id = localStorage.getItem('todo_data') || undefined
 const navigate = useNavigate();
  const removeLocal = () => {
    localStorage.removeItem("todo_data");
    navigate("/");

    toast.success("user sign out successfuly!");
  };
  return (
    <div className="nav flex  h-24 justify-between items-center container mx-auto">
      <div className=" text-2xl font-bold">
        <Link className="nav-link" to={"/"}>
          Almustafa Dev
        </Link>
      </div>
      <div className=" md:block hidden">
      <div className="nav-link flex  items-center gap-12">
       
        <div className="  text-lg  font-bold">
          <Link className="nav-link" to={""}>
            Home
          </Link>
        </div>

        <div className="  text-lg  font-bold">
          <Link className="nav-link" to={"/about"}>
            About Us
          </Link>
        </div>
        {id?(
          <>
           <div className="  text-lg  font-bold">
          <Link
            onClick={removeLocal}
            className="nav-link bg-orange py-2 px-2 rounded-md text-white"
            
          >
            Log out
          </Link>
        </div>
          </>
        ):(
          <>
           <div className="  text-lg  font-bold">
          <Link
            className="nav-link bg-orange py-2 px-2 rounded-md text-white"
            to={"/register"}
          >
            Sign Up
          </Link>
        </div>
        <div className="  text-lg  font-bold">
          <Link
            className="nav-link bg-orange py-2 px-2 rounded-md text-white"
            to={"/login"}
          >
            Sign In
          </Link>
        </div>
          </>
        )}
       
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
