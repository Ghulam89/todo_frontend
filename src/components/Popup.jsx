import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Base_url } from "../utils/Base_url";
import { toast } from "react-toastify";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input, setInput] = useState(popupContent.text);

  const updateToDo = (e) => {
    e.preventDefault();
    axios
      .put(`${Base_url}/todo/update/${popupContent.id}`, { name: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);

        setShowPopup(false);
        toast.success('Task update successfully!')
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 grid place-items-center">
      <div className="relative bg-white  rounded-md w-[500px] p-2.5">
        <RxCross1 className="absolute top-0 text-black right-0 m-2.5 cursor-pointer hover:text-gray-400" onClick={() => setShowPopup(false)} />
        <h1 className=" text-center text-black font-bold text-xl">Update ToDo</h1>

        <form onSubmit={updateToDo} className="mt-7.5 flex flex-col justify-center  pt-7 gap-2.5 pb-7.5">
          <input
          className="bg-white p-2 rounded-md w-full  border-2 text-black placeholder-gray-700"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <button className=" p-2   bg-orange  rounded-md text-white hover:bg-gray-400"   type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
