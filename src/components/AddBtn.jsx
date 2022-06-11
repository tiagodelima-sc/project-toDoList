import React, { useState } from "react";

import Button from "./Button";

import "./AddBtn.css";

//Criando componente input e btn da task.

const AddBtn = ({ handleTaskAddition }) => {

  const [inputData, setInputData] = useState("");
 
  //pegando e setando o valor que ta sendo passado no input
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  //manda os dados do input para minha função na main e add no state
  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    //limpando input
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />;
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddBtn;
