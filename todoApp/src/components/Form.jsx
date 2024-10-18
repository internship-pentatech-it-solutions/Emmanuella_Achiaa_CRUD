import React from "react";

const Form = ({ input, setInput, addTodo }) => {
  return (
    <div className="flex align-middle justify-center">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-red-50 w-full p-2 mb-3 border-2 border-r-slate-50 rounded-tl-lg rounded-bl-lg border-red-300 focus:outline-none"
        type="text"
        role="input"
      />
      <button
        type="submit"
        className=" p-2 rounded-tr-lg rounded-br-lg mb-3 bg-red-400 "
        onClick={(e) => addTodo(e)}
      >
        Add
      </button>
    </div>
  );
};

export default Form;
