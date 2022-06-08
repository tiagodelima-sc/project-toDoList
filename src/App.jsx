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

  return (
    <div className="container">
      <AddBtn />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
