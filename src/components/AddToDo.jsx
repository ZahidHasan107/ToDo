import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "../store/features/todo/todoSlice";

const AddToDo = () => {
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const [Date, setDate] = useState(" ");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(input)) {
      alert("Enter a todo");
      setInput("");
    } else {
      dispatch(
        todoAdded({
          id: nanoid(),
          name: input,
          description: input1,
          date: Date,
        })
      );
      setInput("");
      setInput1("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="content-center w-full">
        <div className="grid-col-2 gap-4">
          <div>
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              placeholder="Add todo"
              className="border-2"
            ></input>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold py-2 px-10 rounded 
              focus:outline-none ml-5"
            >
              Add
            </button>
            <input
              value={input1}
              onChange={(e) => {
                setInput1(e.target.value);
              }}
              type="text"
              placeholder="Add descrioption"
              className="border-2"
            ></input>
          </div>
          <div>
            <input
              value={Date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
            ></input>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddToDo;
