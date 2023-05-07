import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoUpdated } from "../store/features/todo/todoSlice";

const UpdateToDo = () => {
  const todoupdate = useSelector((state) => state.todos.todoUpdate);
  const [update, setUpdate] = useState(todoupdate.name);
  const [Date, setDate] = useState(todoupdate.date);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(update)) {
      alert("Enter a todo");
      setUpdate("");
    } else {
      dispatch(
        todoUpdated({
          id: todoUpdated.id,
          name: update,
          date: Date,
        })
      );
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={update}
          onChange={(e) => {
            setUpdate(e.target.value);
          }}
          type="text"
          placeholder="Update todo"
        ></input>
        <div className="mt-3">
          <input
            value={Date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="date"
          ></input>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold py-2 px-10 rounded 
              focus:outline-none mt-3"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateToDo;
