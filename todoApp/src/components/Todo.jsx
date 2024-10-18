import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import TodoList from "./TodoList";
import { MdFaceRetouchingNatural } from "react-icons/md";
const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3050/api/v1/todo");
      setTodo(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addTodo = async (e) => {
    e.preventDefault();
    if (input.length == 0) return null;
    await axios.post("http://localhost:3050/api/v1/todo", [
      {
        ...todo,
        text: input,
      },
    ]);
    fetchData();
    setInput("");
    console.log("addedTodo");
  };

  return (
    <>
      <div className="bg-slate-50 pt-3 pl-5 pr-6 pb-5 rounded-lg">
        <h2 className="my-3">List of Todos</h2>
        <Form input={input} setInput={setInput} addTodo={addTodo} />
        {/* TodoList */}
        <TodoList todo={todo} fetchData={fetchData} />
        {/* key */}
        {/* Author Component */}
      </div>
    </>
  );
};

export default Todo;
