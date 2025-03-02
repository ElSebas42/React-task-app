import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      title: title,
      description: description,
    };
    createTask(newTask);
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <fieldset className="bg-slate-800 p-10 mb-4 rounded-2xl">
        <legend className="text-3xl font-bold text-slate-900 p-3 bg-gradient-to-t from-slate-800 to-slate-400 rounded-md">Ingrese una Tarea</legend>
        <form onSubmit={handleSubmit}>
          <label className="text-white font-bold text-4xl">
            Title:{" "}
            <input className="border-2 rounded-xl border-slate-400"
              type="text"
              placeholder="Coloca aquí el título"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </label>
          <br />
          <label className="text-white font-bold text-4xl">
            Description:
            <br />
            <textarea className="border-2 rounded-xl border-slate-400"
              placeholder="Coloca aquí la descripción"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
          </label>
          <br />
          <button className="bg-red-500 text-white p-2 font-bold relative left-80/100" type="submit">Crear Nueva Tarea</button>
        </form>
      </fieldset>
    </>
  );
}

export default TaskForm;
