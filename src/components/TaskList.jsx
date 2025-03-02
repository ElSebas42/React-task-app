import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const { deleteTask } = useContext(TaskContext);
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="font-bold text-3xl text-white">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} deleteTask={deleteTask} />;
      })}
    </div>
  );
}

export default TaskList;
