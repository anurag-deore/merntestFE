import React, { useEffect, useState } from "react";

const Home = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((r) => {
      r.json().then((res) => setTaskList(res));
    });
  }, []);

  const handleCreatetask = () => {
    fetch("http://localhost:5000/tasks", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify({
        Title: "test",
        Description: "test",
      }),
    }).then((r) => {
      r.json().then((res) => setTaskList(res));
    });
  };

  return (
    <div className="create">
      <ul>
        {taskList.map((task: any) => (
          <li>{task.Title}</li>
        ))}
      </ul>
      <button onClick={handleCreatetask}>Create Task</button>
    </div>
  );
};

export default Home;
