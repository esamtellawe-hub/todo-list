import { useState, useEffect } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleDelete = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const handleDeleteAll = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div className="home p-6 max-w-xl mx-auto">
      <h3 className="text-2xl font-bold mb-2">Your Tasks</h3>

      <p className="text-sm text-gray-600 mb-4">
        {tasks.length} task{tasks.length !== 1 ? "s" : ""} total
      </p>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="task-preview bg-gray-100 p-4 rounded mb-3 flex items-center justify-between"
          >
            <h2 className="text-lg">{task.text}</h2>
            <button
              onClick={() => handleDelete(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))
      )}

      <button
        className="bg-red-500 text-white px-3 py-1 rounded mt-4"
        onClick={handleDeleteAll}
      >
        Delete All
      </button>
    </div>
  );
};

export default Home;

