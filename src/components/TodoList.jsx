import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { VscCheckAll, VscCheck, VscChecklist } from "react-icons/vsc";
function TodoList() {
  const [text, setText] = useState("");
  const [completed] = useState(false);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    const item = {
      id: list.length + 1,
      text,
      completed,
    };
    setList([item, ...list]);
    setText("")
  };
  const handleTodo = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    console.log("updatedList", updatedList);
    setList(updatedList);
  };

  const handleDelete = (id) => {
    const deleteItem = list.filter((p) => p.id !== id);
    setList(deleteItem);
  };
  
  const todoLeft = list.filter((p)=>p.completed).length
  const remainder = list.filter((p) => !p.completed).length;
  console.log("todoLeft", todoLeft);
  return (
    <div className=" mt-10">
      <form onSubmit={handleSubmit} className="">
        <input
          className="w-[500px] border border-gray-400 
          
          border-r-0 p-3 rounded-l-md focus:border-blue-500 outline-none"
          type="text"
          value={text}
          placeholder="enter a text"
          onChange={(e) => setText(e.target.value)}
        />

        <button
          disabled={!text}
          className=" border border-gray-400 border-l-0 p-3 rounded-e-md disabled:bg-blue-500 bg-blue-700 text-gray-50"
          type="submit"
        >
          Add
        </button>
      </form>

      {list.length  >0 ? (
        <div className="border border-gray-200 mt-3 rounded-lg">
          <ul className="flex itemse-center justify-around mt-2">
            <li className="relative">
              <VscCheck className="text-blue-700  font-extrabold" size={36} />
              <p
                className="absolute flex items-center justify-center border border-spacing-1 text-gray-50
            -right-1 top-0.5 z-10 bg-red-500 w-5 h-5 rounded-full p-2 text-sm"
              >
                {" "}
                {remainder}
              </p>
            </li>

            <li className="relative">
              <VscCheckAll className="text-blue-700 font-extrabold" size={36} />
              <p
                className="absolute flex items-center justify-center border border-spacing-1
            text-gray-50 -right-1 top-0.5 z-10 bg-red-500 w-5 h-5 rounded-full p-2 text-sm"
              >
                {" "}
                {todoLeft}
              </p>
            </li>
            <li className="relative">
              <VscChecklist className="text-blue-700" size={36} />
              <p
                className="absolute flex items-center justify-center border border-spacing-1
            text-gray-50 -right-1 top-0.5 z-10 bg-red-500 w-5 h-5 rounded-full p-2 text-sm"
              >
                {list.length}{" "}
              </p>
            </li>
          </ul>

          <ul className="flex items-center content-center flex-col  p-2 m-3 rounded-lg">
            {list.map((item) => (
              <li
                key={item.id}
                className="  border-b m-2 relative border-gray-400 flex p-2   "
              >
                <div className=" flex  items-center">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      value={completed}
                      checked={item.completed}
                      onChange={() => handleTodo(item.id)}
                    />
                    <span class="checkbox-icon"></span>
                  </label>

                  <div className="p-2 ">
                    <p
                      className={`${
                        item.completed && "line-through italic text-gray-400"
                      } overflow-hidden whitespace-normal w-96 break-words text-clip `}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>

                <button
                  className="absolute right-2 top-2 "
                  type="click"
                  onClick={() => handleDelete(item.id)}
                >
                  <AiOutlineClose className="text-red-800 font-extrabold" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) :  <p className="text-red-500"> Add Todo</p>}

      {/* <p>{todoLeft}/ {list.length}</p> */}
    </div>
  );
}

export default TodoList;
