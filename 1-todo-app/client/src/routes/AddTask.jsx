import { LuNotebookText } from "react-icons/lu";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaTasks } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { Form, useNavigate } from "react-router";
import Tasks from "../components/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { bucketActions } from "../store/bucketSlice";

const AddTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentTask, setCurrentTask] = useState([]);
  const [isDisabled, setisDisabled] = useState(false);

  const bucketTitle = useRef();
  const bucketDescription = useRef();
  const bucketTasks = [];
  const bucketTask = useRef();
  const handleAddTask = (e) => {
    e.preventDefault();

    if (bucketTitle.current.value && bucketTasks.length >= 0) {
      setisDisabled(true);
    }
    console.log("Hello");

    const title = bucketTitle.current.value;
    const description = bucketDescription.current.value;
    dispatch(bucketActions.addBucket({ title, description, bucketTasks }));
  };

  return (
    <main className="border-2 border-black max-w-[1000px] h-[450px] mt-[60px] mr-auto ml-auto relative">
      <button
        onClick={() => navigate("/")}
        className="flex justify-between items-center absolute left-[-15px] top-[-15px] bg-gray-800 text-white p-2 rounded-3xl cursor-pointer transition-transform duration-200 hover:scale-120"
      >
        <FaArrowLeft />
      </button>
      <Form method="POST" className="h-auto w-[100%] flex flex-col">
        <div className="flex justify-center font-bold text-2xl mb-4">
          <h3>Create a bucket list</h3>
        </div>
        <div className="ml-8 mr-8">
          <label htmlFor="">
            <LuNotebookText className="mb-2 ml-2" />
          </label>
          <input
            required
            ref={bucketTitle}
            type="text"
            placeholder="Your bucket heading"
            className="bg-purple-700 placeholder:text-black placeholder:font-bold placeholder:font-[monospace] placeholder:text-[16px] text-[16px] text-black pl-4 font-bold font-[monospace] shadow-2xl shadow-purple-900 rounded-3xl w-[400px] mb-6 p-2 outline-0 transition-transform duration-200 hover:scale-110"
          />

          <label htmlFor="">
            <HiOutlinePencilSquare className="mb-2 ml-2" />
          </label>
          <input
            ref={bucketDescription}
            type="text"
            placeholder="Description (optional)"
            className="bg-purple-700 placeholder:text-black placeholder:font-bold placeholder:font-[monospace] placeholder:text-[16px] text-[16px] text-black pl-4 font-bold font-[monospace] shadow-2xl shadow-gray-900 rounded-3xl w-[400px] mb-6 p-2 outline-0 transition-transform duration-200 hover:scale-110"
          />

          <label htmlFor="" className="flex w-[100%] items-center">
            <FaTasks className="mb-3 ml-3" />
            <button
              onClick={(e) => {
                e.preventDefault();
                bucketTasks.push(bucketTask.current.value);
              }}
              className="ml-[870px] mb-1 bg-gray-900 p-2 text-white rounded-3xl cursor-pointer"
            >
              <MdAddTask />
            </button>
          </label>
          <input
            ref={bucketTask}
            type="text"
            placeholder="Add your tasks"
            className="bg-purple-700 placeholder:text-black placeholder:font-bold placeholder:font-[monospace] placeholder:text-[16px] text-[16px] text-black pl-4 font-bold font-[monospace] shadow-2xl shadow-gray-900 rounded-3xl w-[100%] mb-6 p-2 outline-0 transition-transform duration-200 hover:scale-102"
          />
        </div>
        <button
          onClick={handleAddTask}
          type="submit"
          disabled={isDisabled}
          className="flex justify-between items-center absolute right-[-15px] top-[-15px] bg-gray-800 text-white p-2 rounded-3xl cursor-pointer transition-transform duration-200 hover:scale-120"
        >
          <IoMdAdd />
        </button>
      </Form>
      {/* <Tasks /> */}
    </main>
  );
};

export default AddTask;
