import AddToDo from "./AddToDo";

import { useDispatch, useSelector } from "react-redux";
import { todoCleared } from "../store/features/todo/todoSlice";
import SingleCard from "./SingleCard";
import UpdateToDo from "./UpdateToDo";

const Card = () => {
  const myTodos = useSelector((state) => state.todos.todos);
  const toggleform = useSelector((state) => state.todos.toggleForm);
  const dispatch = useDispatch();

  return (
    <div
      className="w-1/2 h-3/4 min-h-max bg-amber-100
  shadow-2x1 rounded-1g p-2 items-center flex flex-col 
  space-y-10 justify-beteeen to-transparent rounded-1g"
    >
      <div>
        <h1 className="text-4xl font-semibold underline">My ToDo List</h1>
      </div>
      <div className="w-3/4">{toggleform ? <AddToDo /> : <UpdateToDo />}</div>

      <div className="w-3/4 bg-red-200 h-3/4 inline-block overflow-y-scroll">
        <ul className="w-full  py-1">
          {myTodos.map((todo) => (
            <li key={todo.id} className="flex w-full py-2">
              <SingleCard
                id={todo.id}
                name={todo.name}
                description={todo.description}
                date={todo.date}
              />
            </li>
          ))}
        </ul>
      </div>

      <button
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold py-2 px-10 rounded 
      focus:outline-none"
        onClick={() => dispatch(todoCleared())}
      >
        clear
      </button>
    </div>
  );
};

export default Card;
