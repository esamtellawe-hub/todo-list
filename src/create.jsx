import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [taskText, setTaskText] = useState("");
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();

    const trimmedText = taskText.trim();
    if (trimmedText === "") return;

    const stored = localStorage.getItem("tasks");
    const tasks = stored ? JSON.parse(stored) : [];

    const isDuplicate = tasks.some((task) => task.text === trimmedText);
    if (isDuplicate) {
      alert("⚠️These already exist task ");
      return;
    }

    const newTask = {
      text: trimmedText,
      id: Date.now(),
    };

    localStorage.setItem("tasks", JSON.stringify([newTask, ...tasks]));
    setTaskText("");
    navigate("/home");
  };

  return (
    <form onSubmit={handleAdd}>
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
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Create;
