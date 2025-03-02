import { createContext } from "react";
import data from "../data/tasks.json";
import { useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    task.id = tasks.length;
    setTasks([...tasks, task]);
  }

  function deleteTask(taskId) {
    setTasks([...tasks].filter((task) => task.id !== taskId));
  }

  useEffect(() => setTasks(data), []);

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
}
