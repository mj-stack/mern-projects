import { ImCancelCircle } from "react-icons/im";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsInfoSquare } from "react-icons/bs";
import { useSelector } from "react-redux";

const AllTasks = () => {
  const buckets = useSelector((state) => state.bucket);

  return (
    <main className="relative border-2 border-black max-w-[1000px] h-[450px] mt-[60px] mr-auto ml-auto flex-col ">
      <BsInfoSquare className="cursor-pointer text-2xl border-0 bg-black text-white absolute right-[-10px] top-[-10px]" />
      <div className="flex justify-center items-center h-[60px] bg-blue-700">
        <div className="text-gray-900 font-bold text-2xl mr-8">
          Total tasks: 0
        </div>
        <div className="text-gray-900 font-bold text-2xl mr-8">
          Task completed: 0
        </div>
        <div className="text-gray-900 font-bold text-2xl mr-8">
          Task pending: 0
        </div>
      </div>
      <div className="max-h-[85%] grid grid-cols-1 overflow-scroll no-scrollbar">
        {buckets.map((bucket) => (
          <div className="border-2 border-black rounded-3xl w-[90%] ml-auto mr-auto flex items-center h-[40px] mt-2 relative pl-4">
            <div>{bucket.bucketTasks}</div>
            <div className="absolute right-[60px] cursor-pointer">
              <IoCheckmarkDoneSharp className="text-green-500 text-2xl" />
            </div>
            <div className="absolute right-[20px] cursor-pointer">
              <ImCancelCircle className="text-red-900 text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AllTasks;
