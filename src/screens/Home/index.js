import React, { useEffect, useState } from "react";
import transition from "../../transition";
import Register from "../auth/Register";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import ToDo from "../../components/ToDo";
import Popup from "../../components/Popup";
import { toast } from "react-toastify";
const Home = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});
  const id = localStorage.getItem("todo_data");
  useEffect(() => {
    axios
      .get(`${Base_url}/todo/getAll`)
      .then((res) => setToDos(res.data.todo))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .post(`${Base_url}/todo/create`, { name: input })
        .then((res) => {
          console.log(res.data);
          toast.success("Your Task is Added");
          setUpdateUI((prevState) => !prevState);
          setInput("");
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("Your Task is Not Saved ! Please Sign up");
    }
  };

  return (
    <div>
      <main className="   pt-32 flex justify-center items-center">
        <div className="  bg-white rounded-md p-4  w-[480px] shadow-lg">
          <h1 className=" text-black text-2xl font-bold">ToDo App</h1>

          <form onSubmit={saveToDo} className="flex justify-center gap-2.5 mt-5">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add a ToDo..."
              className="p-2.5  w-full bg-gray-600 text-white outline-none border-none placeholder-white"
              required
            />
            <button
             
              className="p-2.5 w-32  bg-orange  rounded-sm text-white hover:bg-gray-400"
            >
              Add  Task
            </button>
          </form>

          <div className="mt-5 flex flex-col gap-5">
            {toDos.map((el) => (
              <ToDo
                key={el._id}
                text={el.name}
                id={el._id}
                setUpdateUI={setUpdateUI}
                setShowPopup={setShowPopup}
                setPopupContent={setPopupContent}
              />
            ))}
          </div>
        </div>
        {showPopup && (
          <Popup
            setShowPopup={setShowPopup}
            popupContent={popupContent}
            setUpdateUI={setUpdateUI}
          />
        )}
      </main>
    </div>
  );
};

export default transition(Home);
