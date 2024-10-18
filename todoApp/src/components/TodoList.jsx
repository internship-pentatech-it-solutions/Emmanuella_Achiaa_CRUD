import React from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todo, fetchData }) => {
  console.log(todo, "todo");

  const updateTodo = async (id, completed) => {
    try {
      await axios.put(`http://localhost:3050/api/v1/todo/${id}`, { completed });
      fetchData(); // Fetch updated data
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3050/api/v1/todo/${id}`);
      fetchData(); // Fetch updated data after deletion
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <div className="p-0 cursor-pointer">
        {/* Render all todos in bullet points */}
        {todo?.map((todoItem) => (
          <div
            key={todoItem._id}
            className="flex bg-blue-100 rounded-md align-middle justify-between py-2 my-2 px-2 text-base shadow-sm"
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => updateTodo(todoItem._id, !todoItem.completed)} // Toggle completed status
                className="mr-2"
              />
              <span
                className={
                  todoItem.completed
                    ? "capitalize line-through italic"
                    : "capitalize"
                }
              >
                {todoItem.text}
              </span>
            </label>
            <MdDelete
              className="text-lg cursor-pointer"
              onClick={() => deleteTodo(todoItem._id)} // Call delete function
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
