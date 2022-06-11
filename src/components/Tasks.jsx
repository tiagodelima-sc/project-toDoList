import React from "react";

import Task from "./Task";

//Componente criado para renderizar uma Tarefa para cada Tarefa
//Utilizando props no componente filho para passar os dados

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    <>
      //utilizando map, para cada task, renderiza um task
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};

export default Tasks;
