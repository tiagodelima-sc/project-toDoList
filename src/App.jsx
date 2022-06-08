import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

  //completar tarefa
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId)
        return {
          ...task,
          completed: !task.completed,
        };
      return task;
    });

    setTasks(newTasks);
  };

  //add nova tarefa
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <AddBtn handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
    </div>
  );
};

export default App;
