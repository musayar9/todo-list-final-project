import React from 'react'
import TodoStatus from './TodoStatus';
import { AiOutlineClose } from "react-icons/ai";
function List({list, setList, completed}) {


//Edit Complete
  const handleTodo = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setList(updatedList);
  };

//Delete Todo
  const handleDelete = (id) => {
    const deleteItem = list.filter((p) => p.id !== id);
    setList(deleteItem);
  };


  return (
    <>
      {list.length > 0 ? (
        <div className="border border-gray-200 mt-3 rounded-lg bg-white">
          <TodoStatus list={list}/>

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
                  <AiOutlineClose className="text-red-500  hover:text-red-800 duration-300 font-extrabold" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-3 border border-gray-300 bg-[#2196f3] rounded-lg p-2">
          <p className="text-white font-semibold">
            {" "}
            The list is empty! Add something to the list.
          </p>
        </div>
      )}
    </>
  );
}

export default List
