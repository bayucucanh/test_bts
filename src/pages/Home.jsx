import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChecklistAll, postChecklistAll } from "../redux/checklistActions";

function Home() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const checlistData = useSelector((state) => state?.checklist?.dataChecklist);

  useEffect(() => {
    dispatch(getChecklistAll());
    console.log("checlistData", checlistData);
  }, []);

  const handleSubmit = (e) => {
    dispatch(postChecklistAll(name));
  };

  if (checlistData.length === 0) {
    return (
      <div className="bg-gray-900 w-full min-h-screen flex flex-col justify-center items-center p-4">
        <h1 className="text-white">Data Kosong, Silahkan masukan checklist</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center w-full mt-5">
            <div>
              <textarea
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add your checklist..."
                className="p-2 focus:outline-1 focus:outline-blue-500 font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-[60vw]"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-sm font-semibold absolute bg-[#4F46E5] w-fit text-white py-2 rounded px-3"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="bg-gray-900 w-full min-h-screen flex flex-col justify-center items-center p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center w-full mt-5">
            <div>
              <textarea
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add your checklist..."
                className="p-2 focus:outline-1 focus:outline-blue-500 font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-[60vw]"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-sm font-semibold absolute bg-[#4F46E5] w-fit text-white py-2 rounded px-3"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </form>
        {/* Content */}
        {checlistData.map((checklist) => (
          <div className="bg-gray-800 text-white w-full max-w-md flex flex-col rounded-xl shadow-lg p-4 mb-3 mt-16">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="rounded-full w-4 h-4 border border-purple-500"></div>
                <div className="text-md font-bold">{checklist?.name}</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="cursor-pointer">
                  <img
                    className="w-5 h-5 rounded-lg"
                    src="https://i.pravatar.cc/300"
                  />
                </div>
                <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-500 font-bold text-sm"># TODO</div>
          </div>
        ))}
        {/* End Content */}
      </div>
    );
  }
}

export default Home;
