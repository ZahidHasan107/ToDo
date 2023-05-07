import { useState } from "react";
import { BiPencil, BsCheckSquare, BsTrashFill } from "react-icons/all";
import { useDispatch } from "react-redux";
import { todoDeleted, toggleForm } from "../store/features/todo/todoSlice";

const SingleCard = (props) => {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="flex bg-gray-500 py-2 w-full rounded-full px-5 justify-between">
      <div className={done ? "font-semibolld line-through" : "font-semibold"}>
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
      </div>
      <div className={done ? "font-semibolld line-through" : "font-semibold"}>
        <p className="ml-10 text-center">{props.date}</p>
      </div>

      <div className="flex m-2 mx-5 w-1/4 justify-between">
        <div className=" items-center space-x-2 flex">
          <BsCheckSquare
            onClick={() => setDone(!done)}
            className="w-8 h-8 text-green-500"
          />
        </div>
        <div className=" items-center space-x-2 flex">
          <BiPencil
            onClick={() =>
              dispatch(
                toggleForm({
                  id: props.id,
                  name: props.name,
                })
              )
            }
            className="w-8 h-8 text-[#2E1A47]"
          />
        </div>
        <div className=" items-center space-x-2 flex">
          <BsTrashFill
            onClick={() => {
              dispatch(todoDeleted(props.id));
            }}
            className="w-8 h-8 text-[#EB5406]"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
