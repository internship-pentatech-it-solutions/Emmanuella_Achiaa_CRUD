import React from "react";
import Todo from "./components/Todo";
const App = () => {
  return (
    <>
      <div className="m-0 p-14 bg-red-100 font-medium text-xl h-screen">
        <h1>Welcome to the todo app</h1>
        <Todo />
      </div>
    </>
  );
};

export default App;
