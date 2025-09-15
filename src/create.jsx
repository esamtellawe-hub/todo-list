import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const Create = () => {
  const [taskText, setTaskText] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      text: taskText,
      id: Date.now(),
    };

    const stored = localStorage.getItem("tasks");
    const tasks = stored ? JSON.parse(stored) : [];

    localStorage.setItem("tasks", JSON.stringify([newTask, ...tasks]));
    setTaskText("");
    navigate("/home");
  };

  return (
    <form action="">
      <div className="create p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add a New Task</h2>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Write the task"
          required
          className="border p-2 rounded w-full mb-4"
        />
        <button
          type="submit"
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Create;
