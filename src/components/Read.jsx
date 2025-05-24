import { useContext } from "react";
import { toast } from "react-toastify";
import { todoContext } from "../wrapper";

const Read = () => {
  const [todos, setTodos] = useContext(todoContext);

  const deleteHandler = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
    toast.error("To do deleted");
  };

  const renderTodos = todos.map((todo) => {
    return (
      <li
        className="w-[80%] sm:w-[85%] md-w-[60%] bg-zinc-900 px-3 py-2 flex justify-between items-center rounded-xl mb-2 "
        key={todo.id}
      >
        <div className="flex gap-2 items-center text-xl sm:text-md ">
          <input type="checkbox" name="" id="" className="w-4 h-4 rounded-full text-green-600 bg-blue-600"/>
          {todo.title}{" "}
        </div>
        <span
          className=" text-sm sm:text text-orange-400"
          onClick={() => deleteHandler(todo.id)}
        >
          Delete
        </span>
      </li>
    );
  });
  return (
    <div>
      <div>
        <ol className="text-white flex flex-col items-center w-full md:w-[80%] m-auto mt-5">
          {renderTodos}
        </ol>
      </div>
    </div>
  );
};

export default Read;
