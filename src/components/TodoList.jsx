import React, { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";

// import { VscCheckAll, VscCheck, VscChecklist } from "react-icons/vsc";
import AddTodo from "./AddTodo";
import List from "./List";
function TodoList() {
  const [text, setText] = useState("");
  const [completed] = useState(false);
  const [list, setList] = useState([]);
  
  //Add Todo
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

  return (
    <div className=" mt-10">
  
        <AddTodo text={text} setText={setText} handleSubmit={handleSubmit}/>

        <List list={list} setList={setList} completed={completed}/>
   
    </div>
  );
}

export default TodoList;
