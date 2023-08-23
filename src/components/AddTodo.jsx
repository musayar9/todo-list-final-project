import React from "react";

function AddTodo({text, setText, handleSubmit}) {

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        className="w-[500px] border border-gray-300 
          
          border-r-0 p-3 rounded-l-md focus:border-[#2196F3] outline-none"
        type="text"
        value={text}
        placeholder="enter a text"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        disabled={!text}
        className=" active:border active:border-[#2196F3] border-l-0 p-3 rounded-e-md disabled:bg-blue-300 bg-[#2196F3] text-gray-50"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
