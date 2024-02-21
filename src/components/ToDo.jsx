import axios from "axios";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Base_url } from "../utils/Base_url";
import { toast } from "react-toastify";
const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
  const deleteTodo = () => {
    axios.delete(`${Base_url}/todo/delete/${id}`).then((res) => {
      console.log(res.data);
      toast.success('Task Delete Successfully!')
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };

  return (
    <div className="toDo flex bg-orange p-2 rounded-sm shadow-lg justify-between items-center">
      <span className="   text-white">{text}</span>
      <div className="icons flex gap-2">
        <AiFillEdit className="icon text-white" onClick={updateToDo} />
        <AiFillDelete  className="icon text-white" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default ToDo;
