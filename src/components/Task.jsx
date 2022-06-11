import React from "react";
import { CgClose } from "react-icons/cg";

import "./Task.css";

//Componente criado para renderizar as tarefas

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  return (
    //Renderizar tudo do componente em uma div só ou dentro de fragments <> </>
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "10px solid #613659" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
