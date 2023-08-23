import React from 'react'
import { VscCheckAll, VscCheck, VscChecklist } from "react-icons/vsc";
function TodoStatus({list}) {

  const todoLeft = list.filter((p) => p.completed).length;
  const remainder = list.filter((p) => !p.completed).length;
  return (
    <ul className="flex itemse-center justify-around mt-2">
      <li className="relative">
        <VscCheck className="text-[#2196F3]  font-extrabold" size={36} />
        <p
          className="absolute flex items-center justify-center border border-spacing-1 text-gray-50
            -right-1 top-0.5 z-10 bg-red-500 w-5 h-5 rounded-full p-2 text-sm"
        >
          {" "}
          {remainder}
        </p>
      </li>

      <li className="relative">
        <VscCheckAll className="text-[#2196F3]  font-extrabold" size={36} />
        <p
          className="absolute flex items-center justify-center border border-spacing-1
            text-gray-50 -right-1 top-0.5 z-10 bg-red-500 w-5 h-5 rounded-full p-2 text-sm"
        >
          {" "}
          {todoLeft}
        </p>
      </li>
      <li className="relative">
        <VscChecklist className="text-[#2196F3] " size={36} />
        <p
          className="absolute flex items-center justify-center border border-spacing-1
            text-gray-50 -right-1 top-0.5 z-10 bg-red-500 w-5 h-5 rounded-full p-2 text-sm"
        >
          {list.length}{" "}
        </p>
      </li>
    </ul>
  );
}

export default TodoStatus
