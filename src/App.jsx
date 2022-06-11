import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddBtn from "./components/AddBtn";

import "./App.css";

const App = () => {

  //Lista de tarefas = Guardando tarefa dentro do state
  //Lista com 5 objetos
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

    {
      id: "4",
      title: "Participar do desenvolvimento de um jogo",
      completed: false,
    },

    {
      id: "5",
      title: "Participar da reunião de terça-feiras as 10:30am",
      completed: true,
    }
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

  //add nova tarefa no state
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

  //remove tarefa
  const handleTaskDeletion = (taskId) => {
    //pegar toda as tasks que tem o id diferente de taskId
    const newTasks = tasks.filter((task) => task.id =! taskId);
    setTasks(newTasks);
  };

  return (
    //Invocando os componentes no app
    <>
      <div className="container">
        <Header />
        <AddBtn handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      </div>
    </>
  );
};

export default App;
