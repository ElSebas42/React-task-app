import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>{" "}
      <p className="text-gray-200 text-sm">{task.description}</p>
      <p className="text-gray-600 text-xs">{task.id}</p>
      <button
        className="bg-red-500 px-2 rounded-md hover:bg-red-400 relative left-85/100" 
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        x
      </button>
    </div>
  );
}
export default TaskCard;
