import React, { useState } from "react";
import Tasks from "./components/Tasks";
import AddBtn from "./components/AddBtn";

import "./App.css";

const App = () => {
  //let message = "teste";
  //Lista de tarefas
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Ir para a academia",
      completed: false,
    },
    {
      id: "2",
      title: "Jogar bola",
      completed: true,
    },
    {
      id: "3",
      title: "Ir na reuniao na quinta-feira",
      completed: true,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(15),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <AddBtn handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
